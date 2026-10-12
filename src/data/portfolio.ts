// Career facts: source résumé R01 (AI QA Lead), cross-checked against R08 (Test Manager).
// Enterprise engagements are case studies; Jarvis is a personal workspace project.
export type Palette = { from:string; via:string; to:string; accent:string };
export type Metric = {value:string; label:string};
export type Project = {id:string; title:string; year:string; genre:string; logline:string; stack:string[]; build:string[]; features:string[]; metrics:Metric[]; github?:string; palette:Palette; motif:'shield'|'flow'|'tenants'};
export type Achievement = {id:string; title:string; org:string; detail:string; laurel:string; link?:string};
export type Certification = {issuer:string; name:string; link:string};
export type Skill = {name:string; mono:string; note?:string};
export type SkillCategory = {id:string; title:string; subtitle:string; skills:Skill[]};
export type Episode = {code:string; title:string; description:string; tags:string[]; runtime:string; palette:Palette};
export type Season = {number:number; title:string; period:string; synopsis:string; episodes:Episode[]};
export type TopPick = {label:string; title:string; detail:string; palette:Palette};
export type IntroSlide = {kicker:string; title:string; lines:string[]; chips?:string[]};
export type SectionId = 'about'|'journey'|'originals'|'picks'|'skills'|'moments'|'story';

export const profile = {
  "fullName": "Suresh Parimi",
  "displayName": "Suresh Parimi",
  "firstName": "SURESH",
  "seriesTag": "THE QUALITY SERIES",
  "originalLabel": "A PARIMI ORIGINAL",
  "role": "Test Engineering & Quality Engineering Leader",
  "tagline": [
    "Test Engineering Leadership",
    "Quality Engineering & Automation",
    "AI Quality & AIOps"
  ],
  "intro": "Test and Quality Engineering leader with 18+ years of experience building automation strategy, leading distributed QA teams, governing releases and improving engineering reliability. I connect quality metrics, AI evaluation, observability and AIOps practices to help teams detect risk earlier and ship dependable software.",
  "location": "Amsterdam, Netherlands",
  "email": "reachparimi@gmail.com",
  "links": {
    "linkedin": "https://www.linkedin.com/in/sparimi/",
    "github": ""
  },
  "resumePdf": "/assets/Suresh_Parimi_Resume.pdf",
  "portrait": {
    "src": "/assets/suresh-monogram.svg",
    "srcSet": "/assets/suresh-monogram.svg 1100w",
    "alt": "SP monogram artwork for Suresh Parimi"
  },
  "interests": [
    "Test Engineering & Quality Leadership",
    "AI Quality Engineering & AIOps",
    "Observability, reliability & release confidence"
  ]
};

export const education = [
  {
    "school": "RGMCET, JNTU",
    "place": "India",
    "degree": "B.E. — Electrical & Electronics Engineering",
    "period": "Degree completed",
    "score": ""
  }
];

export const experience = [
  {
    "company": "PostNL",
    "role": "Automation & AI Evaluation Lead",
    "place": "Amsterdam, Netherlands",
    "period": "Jan 2026 – Present",
    "points": [
      "Defined AI quality strategy for a production multi-agent conversational AI platform spanning RAG, MCP tool-calling and Salesforce Agentforce.",
      "Designed evaluation metrics for faithfulness, agent routing, tool-call correctness and end-to-end response quality.",
      "Combined deterministic checks, LLM-as-a-Judge and Human-in-the-Loop validation."
    ]
  },
  {
    "company": "Canon Europe",
    "role": "Test / Release Manager · Automation Architect",
    "place": "Amstelveen, Netherlands",
    "period": "Nov 2023 – Jan 2026",
    "points": [
      "Built Playwright automation across Salesforce, ERP, BI, CPQ and Contract Management.",
      "Reduced regression cycles from 12 days to 3; owned Go/No-Go, cutover and rollback readiness.",
      "Engineered MCP-based test tooling and mentored 6–8 engineers."
    ]
  },
  {
    "company": "Dolby US (via Andela)",
    "role": "Automation Test Manager",
    "place": "Remote",
    "period": "Feb 2022 – Oct 2023",
    "points": [
      "Standardised Playwright, Cypress and Appium across web and mobile.",
      "Used BrowserStack AI clustering to reduce defect triage time by 40%.",
      "Led a 10-person distributed QA organisation."
    ]
  },
  {
    "company": "Crossover Health",
    "role": "Automation Test Engineer — Healthcare Workflows",
    "place": "Healthcare technology",
    "period": "Aug 2021 – Jul 2022",
    "points": [
      "Built patient and clinician workflow automation across web and Salesforce healthcare processes.",
      "Developed reusable Playwright and TypeScript components and integrated them into GitLab CI/CD."
    ]
  },
  {
    "company": "Pfizer (via NewPage Solutions)",
    "role": "Engineering Test Manager",
    "place": "Remote",
    "period": "Apr 2020 – Feb 2022",
    "points": [
      "Automated ITGC and Segregation of Duties validation, eliminating 60% of manual checks.",
      "Integrated API and UI automation into Jenkins and GitHub Actions.",
      "Led risk-based validation of regulated enterprise workflows."
    ]
  },
  {
    "company": "Epsilon (Publicis Groupe)",
    "role": "Test Lead",
    "place": "Bangalore, India",
    "period": "Apr 2019 – Apr 2020",
    "points": [
      "Delivered C# and Selenium frameworks for web and API testing across Agile release cycles."
    ]
  },
  {
    "company": "JRD Systems at Gordon Food Services",
    "role": "Functional & Automation Test Manager",
    "place": "Grand Rapids, US",
    "period": "Dec 2014 – Apr 2019",
    "points": [
      "Owned ERP and supply-chain QA for 500+ internal users.",
      "Built Java, Selenium and REST Assured automation covering 300+ test cases."
    ]
  },
  {
    "company": "Infosys · T-Mobile · Canon · Syntel · Tech Mahindra · Emids",
    "role": "QA Lead & Consultant",
    "place": "Enterprise engagements",
    "period": "2006 – 2014",
    "points": [
      "Quality engineering across healthcare IT, financial services, telecom, payments and enterprise systems."
    ]
  }
];

export const projects: Project[] = [
  {
    "id": "ai-evaluation",
    "title": "AI Evaluation & Agentic Testing",
    "year": "2026",
    "genre": "AI • QUALITY • EVALUATION",
    "logline": "Quality controls for production conversational AI and multi-agent workflows at PostNL.",
    "stack": [
      "Ragas",
      "DeepEval",
      "promptfoo",
      "LangSmith",
      "Langfuse",
      "MCP"
    ],
    "build": [
      "Defined AI quality strategy for a production multi-agent conversational AI platform spanning RAG, MCP tool-calling and Salesforce Agentforce.",
      "Designed evaluation metrics for faithfulness, agent routing, tool-call correctness and end-to-end response quality.",
      "Combined deterministic checks, LLM-as-a-Judge and Human-in-the-Loop validation."
    ],
    "features": [
      "RAG faithfulness and answer relevance",
      "Routing and tool-call validation",
      "Human-in-the-Loop quality controls",
      "Behavioural regression detection"
    ],
    "metrics": [],
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    },
    "motif": "shield"
  },
  {
    "id": "enterprise-automation",
    "title": "Enterprise Automation & Release Readiness",
    "year": "2023–2026",
    "genre": "ENTERPRISE • AUTOMATION",
    "logline": "Cross-platform automation and release governance at Canon Europe.",
    "stack": [
      "Playwright",
      "TypeScript",
      "Salesforce",
      "Oracle Fusion",
      "MCP"
    ],
    "build": [
      "Built Playwright automation across Salesforce, ERP, BI, CPQ and Contract Management.",
      "Reduced regression cycles from 12 days to 3; owned Go/No-Go, cutover and rollback readiness.",
      "Engineered MCP-based test tooling and mentored 6–8 engineers."
    ],
    "features": [
      "Business-critical end-to-end workflows",
      "Deterministic, auditable automation",
      "Go/No-Go and rollback readiness",
      "AI-assisted test generation"
    ],
    "metrics": [
      {
        "value": "75%",
        "label": "Shorter regression cycles"
      },
      {
        "value": "12 → 3 days",
        "label": "Regression duration"
      },
      {
        "value": "6–8",
        "label": "Engineers mentored"
      }
    ],
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    },
    "motif": "flow"
  },
  {
    "id": "regulated-validation",
    "title": "Regulated Workflow Validation",
    "year": "2020–2022",
    "genre": "HEALTHCARE • COMPLIANCE",
    "logline": "Risk-based quality engineering for Pfizer compliance and Crossover Health clinical workflows.",
    "stack": [
      "Playwright",
      "TypeScript",
      "Jenkins",
      "GitLab CI/CD",
      "GitHub Actions"
    ],
    "build": [
      "Automated ITGC and Segregation of Duties validation, eliminating 60% of manual checks.",
      "Built patient and clinician workflow automation across web and Salesforce healthcare processes.",
      "Developed reusable Playwright and TypeScript components and integrated them into GitLab CI/CD."
    ],
    "features": [
      "Patient and clinician journey validation",
      "ITGC and Segregation of Duties checks",
      "API/UI automation in delivery pipelines",
      "Audit-oriented quality controls"
    ],
    "metrics": [
      {
        "value": "60%",
        "label": "Manual compliance checks eliminated"
      }
    ],
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    },
    "motif": "tenants"
  },
  {
    "id": "jarvis",
    "title": "Jarvis — Personal AI Workspace",
    "year": "2026",
    "genre": "PERSONAL PROJECT • AI",
    "logline": "A voice-driven AI workspace exploring model routing, activity traces and evidence-backed interactions.",
    "stack": [
      "Python",
      "Three.js",
      "Gemini",
      "OpenRouter",
      "Codex"
    ],
    "build": [
      "Integrated voice interaction with routed model providers.",
      "Built visible activity traces and evidence views for AI-assisted workflows.",
      "Designed freshness controls and evidence checks to support reliable decisions."
    ],
    "features": [
      "Voice commands",
      "Provider fallback routing",
      "Named website activity",
      "Evidence-based job decisions"
    ],
    "metrics": [],
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    },
    "motif": "flow"
  }
];

export const achievements: Achievement[] = [
  {
    "id": "regression",
    "title": "12 Days → 3 Days",
    "org": "Canon Europe",
    "detail": "Reduced enterprise regression cycles by 75% through Playwright automation.",
    "laurel": "Automation impact"
  },
  {
    "id": "triage",
    "title": "40% Faster Triage",
    "org": "Dolby",
    "detail": "Applied BrowserStack AI for intelligent test-result clustering.",
    "laurel": "Quality operations"
  },
  {
    "id": "compliance",
    "title": "60% Fewer Manual Checks",
    "org": "Pfizer",
    "detail": "Automated ITGC and Segregation of Duties compliance validation.",
    "laurel": "Regulated quality"
  },
  {
    "id": "leadership",
    "title": "Distributed QA Leadership",
    "org": "Dolby",
    "detail": "Led a 10-person distributed QA organisation and mentored senior engineers.",
    "laurel": "Team leadership"
  }
];

export const certifications: Certification[] = [
  {
    "issuer": "ISTQB",
    "name": "Certified Tester Foundation Level (CTFL)",
    "link": "https://www.istqb.org/certifications/certified-tester-foundation-level"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    "id": "ai",
    "title": "AI Quality Engineering",
    "subtitle": "Evaluation, evidence and reliability",
    "skills": [
      {
        "name": "Ragas",
        "mono": "Ra"
      },
      {
        "name": "DeepEval",
        "mono": "De"
      },
      {
        "name": "promptfoo",
        "mono": "pr"
      },
      {
        "name": "LangSmith",
        "mono": "La"
      },
      {
        "name": "Langfuse",
        "mono": "La"
      },
      {
        "name": "LLM-as-a-Judge",
        "mono": "LL"
      },
      {
        "name": "Agentic SDLC",
        "mono": "AS"
      },
      {
        "name": "Autonomous Test Automation",
        "mono": "AT"
      },
      {
        "name": "AI Agent Evaluation",
        "mono": "AE"
      },
      {
        "name": "Tool-Call Validation",
        "mono": "TV"
      }
    ]
  },
  {
    "id": "automation",
    "title": "Automation",
    "subtitle": "Web, mobile and API validation",
    "skills": [
      {
        "name": "Playwright",
        "mono": "Pl"
      },
      {
        "name": "Cypress",
        "mono": "Cy"
      },
      {
        "name": "Selenium",
        "mono": "Se"
      },
      {
        "name": "Appium",
        "mono": "Ap"
      },
      {
        "name": "REST Assured",
        "mono": "RE"
      },
      {
        "name": "Autonomous Test Automation",
        "mono": "AT"
      },
      {
        "name": "API Testing",
        "mono": "AP"
      },
      {
        "name": "End-to-End Testing",
        "mono": "E2"
      },
      {
        "name": "Test Framework Design",
        "mono": "TF"
      }
    ]
  },
  {
    "id": "platforms",
    "title": "Enterprise Platforms",
    "subtitle": "Business-critical integrations",
    "skills": [
      {
        "name": "Salesforce",
        "mono": "Sa"
      },
      {
        "name": "Agentforce",
        "mono": "Ag"
      },
      {
        "name": "Oracle Fusion ERP",
        "mono": "Or"
      },
      {
        "name": "CPQ",
        "mono": "CP"
      },
      {
        "name": "MCP",
        "mono": "MC"
      },
      {
        "name": "RAG",
        "mono": "RA"
      }
    ]
  },
  {
    "id": "languages",
    "title": "Languages",
    "subtitle": "Hands-on implementation",
    "skills": [
      {
        "name": "TypeScript",
        "mono": "Ty"
      },
      {
        "name": "JavaScript",
        "mono": "Ja"
      },
      {
        "name": "Python",
        "mono": "Py"
      },
      {
        "name": "Java",
        "mono": "Ja"
      },
      {
        "name": "C#",
        "mono": "C#"
      }
    ]
  },
  {
    "id": "delivery",
    "title": "Delivery & Governance",
    "subtitle": "From test strategy to release readiness",
    "skills": [
      {
        "name": "GitLab CI/CD",
        "mono": "Gi"
      },
      {
        "name": "Azure DevOps",
        "mono": "Az"
      },
      {
        "name": "Jenkins",
        "mono": "Je"
      },
      {
        "name": "GitHub Actions",
        "mono": "Gi"
      },
      {
        "name": "CI/CD",
        "mono": "CI"
      },
      {
        "name": "Release Governance",
        "mono": "RG"
      },
      {
        "name": "Risk Governance",
        "mono": "RK"
      },
      {
        "name": "Quality Assurance",
        "mono": "QA"
      },
      {
        "name": "Quality Engineering",
        "mono": "QE"
      },
      {
        "name": "Test Strategy",
        "mono": "TS"
      },
      {
        "name": "UAT",
        "mono": "UA"
      },
      {
        "name": "Go/No-Go",
        "mono": "Go"
      }
    ]
  },
  {
    "id": "domains",
    "title": "Domain Experience",
    "subtitle": "Healthcare and regulated workflows",
    "skills": [
      {
        "name": "Healthcare IT",
        "mono": "He"
      },
      {
        "name": "Life Sciences",
        "mono": "Li"
      },
      {
        "name": "SOX / ITGC",
        "mono": "SO"
      },
      {
        "name": "Payments",
        "mono": "Pa"
      },
      {
        "name": "AML",
        "mono": "AM"
      },
      {
        "name": "SWIFT / SEPA",
        "mono": "SW"
      },
      {
        "name": "Data Quality",
        "mono": "DQ"
      },
      {
        "name": "Data Validation",
        "mono": "DV"
      },
      {
        "name": "Risk-Based Testing",
        "mono": "RB"
      }
    ]
  }
];

export const skillEvidence: Record<string,string[]> = {
  "Ragas": [
    "Source résumé: AI Quality Engineering"
  ],
  "DeepEval": [
    "Source résumé: AI Quality Engineering"
  ],
  "promptfoo": [
    "Source résumé: AI Quality Engineering"
  ],
  "LangSmith": [
    "Source résumé: AI Quality Engineering"
  ],
  "Langfuse": [
    "Source résumé: AI Quality Engineering"
  ],
  "LLM-as-a-Judge": [
    "Source résumé: AI Quality Engineering"
  ],
  "Agentic SDLC": [
    "AI evaluation and agentic workflow quality strategy"
  ],
  "Autonomous Test Automation": [
    "Reusable Playwright automation and AI-assisted test tooling"
  ],
  "AI Agent Evaluation": [
    "RAG faithfulness, agent routing and response quality"
  ],
  "Tool-Call Validation": [
    "MCP tool-calling and agent action correctness"
  ],
  "API Testing": [
    "REST Assured and API/UI automation"
  ],
  "End-to-End Testing": [
    "Enterprise and healthcare business workflows"
  ],
  "Test Framework Design": [
    "Reusable Playwright, TypeScript, Selenium and REST Assured frameworks"
  ],
  "CI/CD": [
    "GitLab CI/CD, Jenkins and GitHub Actions"
  ],
  "Release Governance": [
    "Go/No-Go, cutover and rollback readiness"
  ],
  "Risk Governance": [
    "Risk-based validation and regulated workflow controls"
  ],
  "Quality Assurance": [
    "18+ years across enterprise, healthcare, financial services and AI quality"
  ],
  "Quality Engineering": [
    "Automation strategy, measurable quality signals and release confidence"
  ],
  "Test Strategy": [
    "Test planning, risk-based coverage and release readiness"
  ],
  "Data Quality": [
    "Validation of data-dependent business and AI workflows"
  ],
  "Data Validation": [
    "Cross-system and business workflow validation"
  ],
  "Risk-Based Testing": [
    "Regulated workflows, compliance checks and release risk"
  ],
  "Playwright": [
    "Source résumé: Automation"
  ],
  "Cypress": [
    "Source résumé: Automation"
  ],
  "Selenium": [
    "Source résumé: Automation"
  ],
  "Appium": [
    "Source résumé: Automation"
  ],
  "REST Assured": [
    "Source résumé: Automation"
  ],
  "Salesforce": [
    "Source résumé: Enterprise Platforms"
  ],
  "Agentforce": [
    "Source résumé: Enterprise Platforms"
  ],
  "Oracle Fusion ERP": [
    "Source résumé: Enterprise Platforms"
  ],
  "CPQ": [
    "Source résumé: Enterprise Platforms"
  ],
  "MCP": [
    "Source résumé: Enterprise Platforms"
  ],
  "RAG": [
    "Source résumé: Enterprise Platforms"
  ],
  "TypeScript": [
    "Source résumé: Languages"
  ],
  "JavaScript": [
    "Source résumé: Languages"
  ],
  "Python": [
    "Source résumé: Languages"
  ],
  "Java": [
    "Source résumé: Languages"
  ],
  "C#": [
    "Source résumé: Languages"
  ],
  "GitLab CI/CD": [
    "Source résumé: Delivery & Governance"
  ],
  "Azure DevOps": [
    "Source résumé: Delivery & Governance"
  ],
  "Jenkins": [
    "Source résumé: Delivery & Governance"
  ],
  "GitHub Actions": [
    "Source résumé: Delivery & Governance"
  ],
  "UAT": [
    "Source résumé: Delivery & Governance"
  ],
  "Go/No-Go": [
    "Source résumé: Delivery & Governance"
  ],
  "Healthcare IT": [
    "Source résumé: Domain Experience"
  ],
  "Life Sciences": [
    "Source résumé: Domain Experience"
  ],
  "SOX / ITGC": [
    "Source résumé: Domain Experience"
  ],
  "Payments": [
    "Source résumé: Domain Experience"
  ],
  "AML": [
    "Source résumé: Domain Experience"
  ],
  "SWIFT / SEPA": [
    "Source résumé: Domain Experience"
  ]
};

export const seasons: Season[] = [
  {
    "number": 1,
    "title": "Infosys · T-Mobile · Canon · Syntel · Tech Mahindra · Emids",
    "period": "2006 – 2014",
    "synopsis": "QA Lead & Consultant",
    "episodes": [
      {
        "code": "S01 E01",
        "title": "QA Lead & Consultant",
        "description": "Across healthcare IT, financial services, telecom and enterprise platforms, I built a broad foundation in how software quality affects real operations. I learned to connect business workflows with test evidence—not just verify screens. **Business impact:** surfaced risk across varied customer and operational journeys before release. **Engineering impact:** gave delivery teams a repeatable quality mindset spanning domains, integrations and release cycles.",
        "tags": [
          "Automation",
          "Evaluation"
        ],
        "runtime": "2006 – 2014",
        "palette": {
          "from": "#24060b",
          "via": "#6e0d1d",
          "to": "#09070a",
          "accent": "#ff3d5a"
        }
      }
    ]
  },
  {
    "number": 2,
    "title": "JRD Systems at Gordon Food Services",
    "period": "Dec 2014 – Apr 2019",
    "synopsis": "Functional & Automation Test Manager",
    "episodes": [
      {
        "code": "S02 E01",
        "title": "Functional & Automation Test Manager",
        "description": "I took ownership of ERP and supply-chain quality supporting 500+ internal users, then built Java, Selenium and REST Assured automation covering 300+ test cases. **Business impact:** improved confidence in workflows that employees depended on to keep operations moving. **Engineering impact:** shifted recurring checks from manual repetition toward reusable automated regression coverage.",
        "tags": [
          "Quality Engineering",
          "Leadership"
        ],
        "runtime": "Dec 2014 – Apr 2019",
        "palette": {
          "from": "#24060b",
          "via": "#6e0d1d",
          "to": "#09070a",
          "accent": "#ff3d5a"
        }
      }
    ]
  },
  {
    "number": 3,
    "title": "Epsilon (Publicis Groupe)",
    "period": "Apr 2019 – Apr 2020",
    "synopsis": "Test Lead",
    "episodes": [
      {
        "code": "S03 E01",
        "title": "Test Lead",
        "description": "I brought C# and Selenium automation into web and API testing across Agile release cycles. The goal was to make quality part of delivery rather than a late-stage checkpoint. **Business impact:** helped teams validate changes across connected user and service journeys. **Engineering impact:** established reusable checks that could be repeated as the product evolved.",
        "tags": [
          "Automation",
          "Evaluation"
        ],
        "runtime": "Apr 2019 – Apr 2020",
        "palette": {
          "from": "#24060b",
          "via": "#6e0d1d",
          "to": "#09070a",
          "accent": "#ff3d5a"
        }
      }
    ]
  },
  {
    "number": 4,
    "title": "Pfizer (via NewPage Solutions)",
    "period": "Apr 2020 – Feb 2022",
    "synopsis": "Engineering Test Manager",
    "episodes": [
      {
        "code": "S04 E01",
        "title": "Engineering Test Manager",
        "description": "In regulated enterprise workflows, I automated ITGC and Segregation of Duties validation, eliminating 60% of manual checks, and connected API/UI automation to Jenkins and GitHub Actions. **Business impact:** reduced manual compliance effort while strengthening consistency of control validation. **Engineering impact:** embedded repeatable risk-based checks into delivery pipelines so teams could detect issues earlier and produce clearer evidence.",
        "tags": [
          "Quality Engineering",
          "Leadership"
        ],
        "runtime": "Apr 2020 – Feb 2022",
        "palette": {
          "from": "#24060b",
          "via": "#6e0d1d",
          "to": "#09070a",
          "accent": "#ff3d5a"
        }
      }
    ]
  },
  {
    "number": 5,
    "title": "Crossover Health",
    "period": "Aug 2021 – Jul 2022",
    "synopsis": "Automation Test Engineer — Healthcare Workflows",
    "episodes": [
      {
        "code": "S05 E01",
        "title": "Automation Test Engineer — Healthcare Workflows",
        "description": "I automated patient and clinician journeys across web and Salesforce healthcare processes, creating reusable Playwright and TypeScript components and integrating them into GitLab CI/CD. **Business impact:** strengthened validation of workflows used in healthcare delivery. **Engineering impact:** gave engineers shared automation building blocks and a repeatable way to validate changes through the pipeline.",
        "tags": [
          "Automation",
          "Evaluation"
        ],
        "runtime": "Aug 2021 – Jul 2022",
        "palette": {
          "from": "#24060b",
          "via": "#6e0d1d",
          "to": "#09070a",
          "accent": "#ff3d5a"
        }
      }
    ]
  },
  {
    "number": 6,
    "title": "Dolby US (via Andela)",
    "period": "Feb 2022 – Oct 2023",
    "synopsis": "Automation Test Manager",
    "episodes": [
      {
        "code": "S06 E01",
        "title": "Automation Test Manager",
        "description": "I standardised Playwright, Cypress and Appium across web and mobile, applied BrowserStack AI clustering to reduce defect-triage time by 40%, and led a distributed 10-person QA organisation. **Business impact:** shortened the time needed to understand test failures and focus on meaningful defects. **Engineering impact:** created more consistent tooling and triage practices while aligning a distributed team around shared quality goals.",
        "tags": [
          "Quality Engineering",
          "Leadership"
        ],
        "runtime": "Feb 2022 – Oct 2023",
        "palette": {
          "from": "#24060b",
          "via": "#6e0d1d",
          "to": "#09070a",
          "accent": "#ff3d5a"
        }
      }
    ]
  },
  {
    "number": 7,
    "title": "Canon Europe",
    "period": "Nov 2023 – Jan 2026",
    "synopsis": "Test / Release Manager · Automation Architect",
    "episodes": [
      {
        "code": "S07 E01",
        "title": "Test / Release Manager · Automation Architect",
        "description": "At Canon Europe, I automated business-critical Salesforce, ERP, BI, CPQ and Contract Management journeys with Playwright, reducing regression cycles from 12 days to 3. I also owned Go/No-Go, cutover and rollback readiness, engineered MCP-based test tooling, and mentored 6–8 engineers. **Business impact:** made release decisions faster and better informed, with a 75% shorter regression window. **Engineering impact:** enabled quicker feedback, repeatable cross-platform validation and clearer release ownership.",
        "tags": [
          "Quality Engineering",
          "Leadership"
        ],
        "runtime": "Nov 2023 – Jan 2026",
        "palette": {
          "from": "#24060b",
          "via": "#6e0d1d",
          "to": "#09070a",
          "accent": "#ff3d5a"
        }
      }
    ]
  },
  {
    "number": 8,
    "title": "PostNL",
    "period": "Jan 2026 – Present",
    "synopsis": "Automation & AI Evaluation Lead",
    "episodes": [
      {
        "code": "S08 E01",
        "title": "Automation & AI Evaluation Lead",
        "description": "At PostNL, I defined quality strategy for a production multi-agent conversational AI platform spanning RAG, MCP tool-calling and Salesforce Agentforce. I designed evaluations for faithfulness, agent routing, tool-call correctness and end-to-end response quality, combining deterministic checks, LLM-as-a-Judge and Human-in-the-Loop validation. **Business impact:** turns AI quality from a subjective impression into evidence about whether responses and actions are dependable. **Engineering impact:** gives teams measurable signals across answer quality, routing and tool execution, with human review where automated evaluation alone is insufficient.",
        "tags": [
          "Automation",
          "Evaluation"
        ],
        "runtime": "Jan 2026 – Present",
        "palette": {
          "from": "#24060b",
          "via": "#6e0d1d",
          "to": "#09070a",
          "accent": "#ff3d5a"
        }
      }
    ]
  }
];

export const topPicks: TopPick[] = [
  {
    "label": "Career highlight",
    "title": "12 Days → 3 Days",
    "detail": "Canon Europe · Reduced enterprise regression cycles by 75% through Playwright automation.",
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    }
  },
  {
    "label": "Career highlight",
    "title": "40% Faster Triage",
    "detail": "Dolby · Applied BrowserStack AI for intelligent test-result clustering.",
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    }
  },
  {
    "label": "Career highlight",
    "title": "60% Fewer Manual Checks",
    "detail": "Pfizer · Automated ITGC and Segregation of Duties compliance validation.",
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    }
  },
  {
    "label": "Career highlight",
    "title": "Distributed QA Leadership",
    "detail": "Dolby · Led a 10-person distributed QA organisation and mentored senior engineers.",
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    }
  },
  {
    "label": "Core capability",
    "title": "AI Evaluation",
    "detail": "Faithfulness, routing and tool-call quality",
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    }
  },
  {
    "label": "Core capability",
    "title": "Playwright",
    "detail": "Enterprise and healthcare workflow automation",
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    }
  },
  {
    "label": "Core capability",
    "title": "Release Governance",
    "detail": "Go/No-Go, cutover and rollback readiness",
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    }
  },
  {
    "label": "Core capability",
    "title": "Healthcare",
    "detail": "Patient and clinician workflow validation",
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    }
  },
  {
    "label": "Core capability",
    "title": "Enterprise Platforms",
    "detail": "Salesforce and Oracle Fusion ERP",
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    }
  },
  {
    "label": "Core capability",
    "title": "Agentic Testing",
    "detail": "Jira criteria to executable test automation",
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    }
  }
];

export const introSlides: IntroSlide[] = [
  {
    "kicker": "The lead",
    "title": "Suresh Parimi",
    "lines": [
      "Test Engineering & Quality Engineering Leader",
      "AI Quality • AIOps • Release Governance"
    ],
    "chips": [
      "18+ years in Quality Engineering"
    ]
  },
  {
    "kicker": "Enterprise impact",
    "title": "12 days to 3.",
    "lines": [
      "Playwright automation at Canon Europe",
      "75% reduction in regression cycles"
    ]
  },
  {
    "kicker": "AI quality",
    "title": "Quality with operational evidence.",
    "lines": [
      "AI evaluation, reliability and release confidence at PostNL",
      "RAG, routing, tool-call correctness and human oversight"
    ]
  },
  {
    "kicker": "Regulated systems",
    "title": "Quality where it matters.",
    "lines": [
      "Pfizer compliance workflows",
      "Crossover Health patient and clinician journeys"
    ]
  },
  {
    "kicker": "Engineering leadership",
    "title": "Reliability by design.",
    "lines": [
      "Quality strategy, operational observability and AIOps",
      "Earlier risk signals, stronger release confidence and continuous improvement"
    ]
  }
];

export const sectionMeta: Record<SectionId,{nav:string;card:string;meta:string;palette:Palette}> = {
  "about": {
    "nav": "About",
    "card": "About Me",
    "meta": "Test leadership, AI quality & AIOps",
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    }
  },
  "journey": {
    "nav": "Journey",
    "card": "My Journey",
    "meta": "8 career chapters",
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    }
  },
  "originals": {
    "nav": "Case Studies",
    "card": "Case Studies",
    "meta": "Quality engineering, AI evaluation & operational reliability",
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    }
  },
  "picks": {
    "nav": "Top Picks",
    "card": "Top Picks",
    "meta": "10 career highlights",
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    }
  },
  "skills": {
    "nav": "Skills",
    "card": "My Skills",
    "meta": "Quality strategy, automation, observability & AIOps",
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    }
  },
  "moments": {
    "nav": "Impact",
    "card": "Career Impact",
    "meta": "Measured outcomes & qualifications",
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    }
  },
  "story": {
    "nav": "Resume",
    "card": "The Full Story",
    "meta": "Résumé · view & download",
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    }
  }
};
