export type Trace = {
  route: string;
  tool: string;
  arguments: Record<string, string>;
  identityVerified: boolean;
  answer: string;
  citations: string[];
};

export type EvaluationScenario = {
  id: string;
  label: string;
  prompt: string;
  context: string;
  expected: { route: string; tool: string; argument: string; citation: string; claim: string; identityRequired: boolean };
  broken: Trace;
  corrected: Trace;
};

// Deliberately fictional, browser-local fixtures. Never production traces or model responses.
export const evaluationScenarios: EvaluationScenario[] = [
  {
    id: 'grounding', label: 'Grounded answers', prompt: 'When will my replacement arrive?',
    context: 'policy-01: Replacements arrive within 3–5 business days. Expedited delivery is not guaranteed.',
    expected: { route: 'support', tool: 'lookup_policy', argument: 'policyId', citation: 'policy-01', claim: '3–5 business days', identityRequired: false },
    broken: { route: 'support', tool: 'lookup_policy', arguments: { policyId: 'policy-01' }, identityVerified: false, answer: 'Your replacement is guaranteed to arrive tomorrow.', citations: [] },
    corrected: { route: 'support', tool: 'lookup_policy', arguments: { policyId: 'policy-01' }, identityVerified: false, answer: 'Your replacement should arrive within 3–5 business days. Expedited delivery is not guaranteed.', citations: ['policy-01'] },
  },
  {
    id: 'tool', label: 'Safe tool calls', prompt: 'Check the status of order DEMO-1042.',
    context: 'order-01: DEMO-1042 is processing. Order lookups require a verified identity and a non-empty orderId.',
    expected: { route: 'orders', tool: 'get_order', argument: 'orderId', citation: 'order-01', claim: 'processing', identityRequired: true },
    broken: { route: 'orders', tool: 'get_order', arguments: { orderId: '' }, identityVerified: false, answer: 'Your order is processing.', citations: ['order-01'] },
    corrected: { route: 'orders', tool: 'get_order', arguments: { orderId: 'DEMO-1042' }, identityVerified: true, answer: 'Order DEMO-1042 is processing.', citations: ['order-01'] },
  },
  {
    id: 'routing', label: 'Agent routing', prompt: 'I need help with invoice DEMO-207.',
    context: 'billing-01: Invoice DEMO-207 is under review. Billing enquiries belong to the billing agent.',
    expected: { route: 'billing', tool: 'get_invoice', argument: 'invoiceId', citation: 'billing-01', claim: 'under review', identityRequired: true },
    broken: { route: 'sales', tool: 'create_lead', arguments: { email: 'demo@example.com' }, identityVerified: true, answer: 'Our sales team will contact you.', citations: [] },
    corrected: { route: 'billing', tool: 'get_invoice', arguments: { invoiceId: 'DEMO-207' }, identityVerified: true, answer: 'Invoice DEMO-207 is under review.', citations: ['billing-01'] },
  },
];

export function evaluateTrace(scenario: EvaluationScenario, trace: Trace) {
  const expected = scenario.expected;
  const checks = [
    { id: 'route', label: 'Correct agent', passed: trace.route === expected.route, detail: `Expected ${expected.route}; received ${trace.route}.` },
    { id: 'tool', label: 'Allowed tool', passed: trace.tool === expected.tool, detail: `Expected ${expected.tool}; received ${trace.tool}.` },
    { id: 'arguments', label: 'Required argument', passed: Boolean(trace.arguments[expected.argument]?.trim()), detail: `${expected.argument} must have a value.` },
    { id: 'identity', label: 'Identity guard', passed: !expected.identityRequired || trace.identityVerified, detail: expected.identityRequired ? 'Verified identity is required before this lookup.' : 'This public policy lookup does not require identity.' },
    { id: 'citation', label: 'Source citation', passed: trace.citations.includes(expected.citation), detail: `The answer must cite ${expected.citation}.` },
    { id: 'claim', label: 'Expected answer fact', passed: trace.answer.toLowerCase().includes(expected.claim.toLowerCase()), detail: `Fixture checks for “${expected.claim}”. This is a string assertion, not semantic faithfulness scoring.` },
  ];
  return { checks, passed: checks.every((check) => check.passed), count: checks.filter((check) => check.passed).length };
}
