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
  "role": "AI Quality Engineering Leader",
  "tagline": [
    "AI Quality Engineering",
    "Automation Architecture",
    "Test & Release Leadership"
  ],
  "intro": "Quality Engineering leader with 18+ years of experience connecting hands-on automation, AI evaluation and enterprise release governance. I build evidence-driven quality systems for conversational AI, healthcare workflows and business-critical platforms.",
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
    "LLM & multi-agent evaluation",
    "Agentic testing",
    "Healthcare & regulated systems"
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
    "logline": "A voice-driven assistant and job-search workspace, developed in this local project.",
    "stack": [
      "Python",
      "Three.js",
      "Gemini",
      "OpenRouter",
      "Codex"
    ],
    "build": [
      "Integrated voice interaction with routed model providers.",
      "Built current-run website activity traces and job evidence views.",
      "Added fresh-search isolation and a strict eight-hour posting window."
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
    "link": ""
  },
  {
    "issuer": "Professional qualification",
    "name": "Accredited Payments Risk Professional (APRP)",
    "link": ""
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
        "name": "HITL",
        "mono": "HI"
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
  "HITL": [
    "Source résumé: AI Quality Engineering"
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
        "description": "Quality engineering across healthcare IT, financial services, telecom, payments and enterprise systems.",
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
        "description": "Owned ERP and supply-chain QA for 500+ internal users. Built Java, Selenium and REST Assured automation covering 300+ test cases.",
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
        "description": "Delivered C# and Selenium frameworks for web and API testing across Agile release cycles.",
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
        "description": "Automated ITGC and Segregation of Duties validation, eliminating 60% of manual checks. Integrated API and UI automation into Jenkins and GitHub Actions. Led risk-based validation of regulated enterprise workflows.",
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
        "description": "Built patient and clinician workflow automation across web and Salesforce healthcare processes. Developed reusable Playwright and TypeScript components and integrated them into GitLab CI/CD.",
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
        "description": "Standardised Playwright, Cypress and Appium across web and mobile. Used BrowserStack AI clustering to reduce defect triage time by 40%. Led a 10-person distributed QA organisation.",
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
        "description": "Built Playwright automation across Salesforce, ERP, BI, CPQ and Contract Management. Reduced regression cycles from 12 days to 3; owned Go/No-Go, cutover and rollback readiness. Engineered MCP-based test tooling and mentored 6–8 engineers.",
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
        "description": "Defined AI quality strategy for a production multi-agent conversational AI platform spanning RAG, MCP tool-calling and Salesforce Agentforce. Designed evaluation metrics for faithfulness, agent routing, tool-call correctness and end-to-end response quality. Combined deterministic checks, LLM-as-a-Judge and Human-in-the-Loop validation.",
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
      "AI Quality Engineering Leader",
      "Amsterdam, Netherlands"
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
    "title": "Evidence over assumptions.",
    "lines": [
      "Multi-agent evaluation at PostNL",
      "RAG, MCP, LLM-as-a-Judge and HITL"
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
    "kicker": "Personal project",
    "title": "Meet Jarvis.",
    "lines": [
      "Voice-driven AI workspace",
      "Fresh job searches and visible decision evidence"
    ]
  }
];

export const sectionMeta: Record<SectionId,{nav:string;card:string;meta:string;palette:Palette}> = {
  "about": {
    "nav": "About",
    "card": "About Me",
    "meta": "Quality engineering & leadership",
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
    "meta": "Enterprise engagements & personal work",
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
    "meta": "AI, automation & enterprise delivery",
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
