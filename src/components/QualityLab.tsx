import { useState } from 'react';
import { evaluationScenarios, evaluateTrace } from '../data/evaluation';

export default function QualityLab() {
  const [scenarioId, setScenarioId] = useState('grounding');
  const [variant, setVariant] = useState<'broken' | 'corrected'>('broken');
  const [evaluated, setEvaluated] = useState(false);
  const [showTrace, setShowTrace] = useState(false);
  const [editedAnswer, setEditedAnswer] = useState<string | null>(null);
  const scenario = evaluationScenarios.find((item) => item.id === scenarioId)!;
  const trace = { ...scenario[variant], answer: editedAnswer ?? scenario[variant].answer };
  const result = evaluateTrace(scenario, trace);

  const download = () => {
    const report = { demonstration: true, scenario: scenario.label, input: scenario.prompt, trace, evaluation: result };
    const url = URL.createObjectURL(new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' }));
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `illustrative-evaluation-${scenario.id}.json`;
    anchor.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  return (
    <section id="lab" className="p-section p-lab-section" aria-labelledby="lab-title">
      <div className="p-section-heading">
        <div><p className="p-eyebrow">02 / THE THINKING, MADE TANGIBLE</p><h2 id="lab-title">An answer is easy.<br /><em>Trust takes engineering.</em></h2></div>
        <p>Explore the checks behind an AI release decision. Change the trace. Inspect the evidence. See what passes.</p>
      </div>
      <div className="p-lab">
        <div className="p-lab-top"><span><span className="p-dot" /> AI QUALITY LAB</span><span className="p-mono">LOCAL DEMONSTRATION / 01</span></div>
        <div className="p-lab-grid">
          <div className="p-lab-input">
            <p className="p-label">SELECT A SCENARIO</p>
            <div className="p-scenario-options" aria-label="Evaluation scenario">
              {evaluationScenarios.map((item, index) => <button key={item.id} type="button" aria-pressed={item.id === scenarioId} onClick={() => { setScenarioId(item.id); setEditedAnswer(null); setEvaluated(false); }}><span className="p-mono">0{index + 1}</span>{item.label}<span aria-hidden>↗</span></button>)}
            </div>
            <div className="p-prompt"><p className="p-label">USER REQUEST</p><p>“{scenario.prompt}”</p></div>
            <div className="p-context"><p className="p-label">RETRIEVED EVIDENCE</p><p>{scenario.context}</p></div>
            <div className="p-variant" aria-label="Trace variant"><button type="button" aria-pressed={variant === 'broken'} onClick={() => { setVariant('broken'); setEditedAnswer(null); setEvaluated(false); }}>Failing trace</button><button type="button" aria-pressed={variant === 'corrected'} onClick={() => { setVariant('corrected'); setEditedAnswer(null); setEvaluated(false); }}>Corrected trace</button></div>
            <label htmlFor="lab-answer" className="p-label">AGENT ANSWER / EDIT TO EXPERIMENT</label>
            <textarea id="lab-answer" className="p-answer-input" rows={3} value={trace.answer} onChange={(event) => { setEditedAnswer(event.target.value); setEvaluated(false); }} />
            <button type="button" className="p-button p-button-primary p-run" onClick={() => setEvaluated(true)}>Run evaluation <span aria-hidden>→</span></button>
          </div>
          <div className="p-lab-output">
            <div className="p-output-heading"><p className="p-label">EVALUATION REPORT</p><span className="p-mono">6 ASSERTIONS</span></div>
            <div className={`p-gate ${evaluated ? result.passed ? 'is-passed' : 'is-blocked' : ''}`} role="status" aria-live="polite">
              <span className="p-gate-symbol" aria-hidden>{evaluated ? result.passed ? '✓' : '×' : '⎔'}</span>
              <div><h3>{evaluated ? result.passed ? 'Release gate passed' : 'Release gate blocked' : 'Ready to evaluate'}</h3><p>{evaluated ? `${result.count} of 6 checks passed · ${result.passed ? 'all fixture assertions satisfied' : 'inspect failures before release'}` : 'Run the selected trace to inspect the result.'}</p></div>
            </div>
            <ul className="p-checks">{result.checks.map((check) => <li key={check.id}><div><span aria-hidden className={evaluated ? check.passed ? 'p-check-pass' : 'p-check-fail' : ''}>{evaluated ? check.passed ? '✓' : '×' : '·'}</span><span>{check.label}</span><span className="p-mono">{evaluated ? check.passed ? 'PASS' : 'FAIL' : 'PENDING'}</span></div>{evaluated && !check.passed && <p>{check.detail}</p>}</li>)}</ul>
            <div className="p-lab-actions"><button type="button" onClick={() => setShowTrace(!showTrace)} aria-expanded={showTrace} aria-controls="trace-json">{showTrace ? 'Hide' : 'Inspect'} trace <span aria-hidden>{showTrace ? '−' : '+'}</span></button><button type="button" disabled={!evaluated} onClick={download}>Export report ↓</button></div>
            {showTrace && <pre id="trace-json" className="p-code" tabIndex={0}>{JSON.stringify(trace, null, 2)}</pre>}
          </div>
        </div>
        <p className="p-lab-note">Illustrative fixtures, evaluated in your browser. No live model calls or production data. These deterministic checks demonstrate release gates; semantic quality still needs model-based evaluation and human review.</p>
      </div>
    </section>
  );
}
