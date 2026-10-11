import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';

const source = readFileSync(new URL('../src/data/evaluation.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.ES2020 } }).outputText;
const { evaluationScenarios, evaluateTrace } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`);
let checks = 0;
for (const scenario of evaluationScenarios) {
  assert.equal(evaluateTrace(scenario, scenario.broken).passed, false, `${scenario.id}: known-bad trace must block release`);
  const passed = evaluateTrace(scenario, scenario.corrected);
  assert.equal(passed.passed, true, `${scenario.id}: corrected fixture must pass`);
  assert.equal(passed.count, 6);
  checks += 3;
  const corruptions = [
    { route: 'unexpected-agent' },
    { tool: 'unexpected-tool' },
    { arguments: { [scenario.expected.argument]: '   ' } },
    { citations: ['unrelated-source'] },
    { answer: 'Unsupported fixture answer.' },
    ...(scenario.expected.identityRequired ? [{ identityVerified: false }] : []),
  ];
  for (const corruption of corruptions) {
    const result = evaluateTrace(scenario, { ...scenario.corrected, ...corruption });
    assert.equal(result.passed, false, `${scenario.id}: one failed assertion must block the gate`);
    assert.equal(result.count, 5, `${scenario.id}: independent failure must not change other checks`);
    checks += 2;
  }
}
console.log(`Passed ${checks} assertions across ${evaluationScenarios.length} evaluation scenarios.`);
