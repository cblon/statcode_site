import type { Problem } from "../types/problem";

export const problemsData: Problem[] = [
  {
    title: "Incomplete or Low-Quality Administrative Data",
    cause: "Collected for operational—not evaluative—purposes; may lack consistency or detail.",
    solutions: [
      "Conduct a data audit early in the process.",
      "Supplement with other data sources like surveys or interviews.",
      "Partner with data custodians to improve accuracy and accessibility.",
    ],
  },
  {
    title: "Limited Access to Secondary Data",
    cause: "Restrictions due to privacy, ownership, or licensing issues.",
    solutions: [
      "Establish data-sharing agreements upfront.",
      "Use open data alternatives or aggregate-level datasets where possible.",
      "Seek Institutional Review Board (IRB) guidance if ethics are involved.",
    ],
  },
  {
    title: "Survey Fatigue & Low Response Rates",
    cause: "Over-surveyed populations, unclear incentives, or long questionnaires.",
    solutions: [
      "Keep surveys short and relevant.",
      "Use mixed methods (e.g., online + phone).",
      "Provide incentives or partner with trusted community leaders.",
    ],
  },
  {
    title: "Misaligned Data With Evaluation Goals",
    cause: "Data doesn't answer the core implementation or impact questions.",
    solutions: [
      "Define evaluation questions and logic model before data collection.",
      "Choose or adapt tools that match those goals.",
      "Use process evaluations to bridge context and goals.",
    ],
  },
  {
    title: "Time Lag in Outcome Data",
    cause: "Some effects take months or years to manifest (e.g., education, health).",
    solutions: [
      "Use intermediate indicators as proxies.",
      "Conduct longitudinal or follow-up evaluations.",
      "Combine quantitative data with qualitative insights.",
    ],
  },
  {
    title: "Context-Specific Findings Limit Generalizability",
    cause: "Evaluation reflects a single time/place/policy context.",
    solutions: [
      "Document contextual variables thoroughly.",
      "Use translation process evaluations to adapt findings.",
      "Plan pilot replication studies before scaling.",
    ],
  },
  {
    title: "Data Overload Without Insight",
    cause: "Large volumes of data collected without a clear analytic framework.",
    solutions: [
      "Use a theory of change or evaluation matrix to structure analysis.",
      "Visualize key metrics and trends with dashboards or summary reports.",
      "Prioritize actionable insights over exhaustive reporting.",
    ],
  },
]
