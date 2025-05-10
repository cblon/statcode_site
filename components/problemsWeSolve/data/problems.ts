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
  // Previously added problems - Data Visualization
  {
    title: "Data is Hard to Interpret",
    cause: "Overly complex charts or raw data with no structure.",
    solutions: [
      "Use clear, familiar visual forms (bar, line, scatter).",
      "Apply visual hierarchy and simplify layouts using Gestalt principles.",
    ],
  },
  {
    title: "Audience Misreads the Message",
    cause: "Assumes viewers know how to read the visualization or interpret the data context.",
    solutions: [
      "Add explanatory titles, annotations, and visual cues that highlight the key takeaway directly on the chart.",
    ],
  },
  {
    title: "Charts are Overloaded with Information",
    cause: "Trying to answer too many questions in one visualization.",
    solutions: [
      "Focus on one insight per chart.",
      "Break down complex topics into small multiples or sequenced visuals.",
    ],
  },
  {
    title: "Data Lacks Context",
    cause: "No benchmarks, comparisons, or prior data for reference.",
    solutions: ["Add baselines, targets, historical comparisons, or peer data to provide meaning and relevance."],
  },
  {
    title: "Stakeholders Resist Using Data",
    cause: "Data feels irrelevant or imposed, not aligned with their work or goals.",
    solutions: [
      "Co-create metrics and visuals with stakeholders.",
      "Use language and framing that connects to their priorities.",
    ],
  },
  {
    title: "Too Many Tools, Not Enough Clarity",
    cause: "Fragmented tech stack with inconsistent outputs.",
    solutions: [
      "Standardize tools across teams.",
      "Choose ones that are intuitive and accessible for both analysts and non-technical users.",
    ],
  },
  {
    title: "Data is Siloed Across Departments",
    cause: "Lack of data integration and cross-functional communication.",
    solutions: [
      "Create a centralized database or dashboard.",
      "Assign data stewards or cross-team leads to bridge silos.",
    ],
  },
  {
    title: "Dashboard Fatigue",
    cause: "Static, repetitive, and overly detailed dashboards that lose relevance.",
    solutions: [
      "Customize dashboards for each audience.",
      "Use alerts, highlights, or narratives to make changes stand out.",
    ],
  },
  {
    title: "Visuals Don't Match Your Brand",
    cause: "No visual identity guidelines for data communications.",
    solutions: [
      "Develop a style guide for colors, fonts, and chart types.",
      "Align visuals with your organization's tone and values.",
    ],
  },
  {
    title: "Flashy Graphics Obscure Meaning",
    cause: "Prioritizing aesthetics or novelty over clarity.",
    solutions: ["Use simple, clean 2D graphics.", "Remove chart junk and distractions.", "Focus on what matters most."],
  },
  {
    title: "Visuals are Not Accessible",
    cause: "Lack of awareness of accessibility needs (color, format, structure).",
    solutions: [
      "Use high-contrast, colorblind-friendly palettes.",
      "Include alt text, descriptive labels, and readable typography.",
    ],
  },
  {
    title: "Visuals Don't Lead to Action",
    cause: "Charts show data, but no clear recommendation or next step.",
    solutions: ["Add callouts for decisions, flags for issues, or action prompts directly linked to the data."],
  },
  {
    title: "Too Many KPIs, Not Enough Focus",
    cause: "Misalignment between data collection and strategic goals.",
    solutions: [
      "Select 3–5 core metrics.",
      "Organize KPIs into primary (strategic) and secondary (supporting) layers.",
    ],
  },
  {
    title: "Weekly Reports Go Unread",
    cause: "Reports are dense, dry, and disconnected from current decisions.",
    solutions: [
      "Use engaging formats (infographics, dashboards, video explainers).",
      "Keep it visual and narrative-driven.",
    ],
  },
  {
    title: "Staff Lacks Data Literacy",
    cause: "No training or support in reading and using charts.",
    solutions: [
      "Run regular workshops, data jams, or office hours.",
      "Empower staff with simple interpretation guides.",
    ],
  },
  {
    title: "Visuals Lack Consistency",
    cause: "No shared templates or visual standards.",
    solutions: [
      "Create a design system with templates for common charts and dashboards to ensure consistency and efficiency.",
    ],
  },
  {
    title: "Data Isn't Up-to-Date",
    cause: "Manual reporting or fragmented data sources.",
    solutions: ["Automate data updates with ETL tools.", "Sync dashboards to real-time or frequent data refreshes."],
  },
  {
    title: "Reports Lack Emotional Engagement",
    cause: "Over-focus on numbers, ignoring human impact.",
    solutions: [
      "Add qualitative stories, quotes, or images alongside data.",
      "Humanize insights to drive empathy and connection.",
    ],
  },
  {
    title: "Leaders Ignore Data for Gut Instinct",
    cause: "Data doesn't feel actionable or trustworthy.",
    solutions: [
      'Deliver insights with confidence using the "Flash Roll" — a prepared, fluent pitch showing you\'ve seen this before and know what to do.',
    ],
  },
  {
    title: "Data is Only Used for Compliance",
    cause: "Culture sees data as something for reporting, not learning.",
    solutions: [
      "Shift to a learning culture.",
      "Celebrate data-driven decisions.",
      "Use visuals to provoke curiosity and experimentation, not just track KPIs.",
    ],
  },
  // Previously added problems - dbt
  {
    title: "Slow dbt Runs",
    cause: "Inefficient SQL models or lack of model materialization strategy.",
    solutions: [
      "Optimize SQL logic, use incremental or ephemeral models where appropriate, and refactor long-running models.",
    ],
  },
  {
    title: "Hard-to-Debug Broken Pipelines",
    cause: "Poor documentation and unclear model dependencies.",
    solutions: [
      "Use dbt's built-in documentation and DAG (Directed Acyclic Graph) to visualize and trace dependencies.",
    ],
  },
  {
    title: "Model Sprawl (Too Many Models)",
    cause: "Lack of naming conventions or folder organization.",
    solutions: [
      "Apply consistent naming conventions and a modular folder structure (like staging → intermediate → marts).",
    ],
  },
  {
    title: "Stale or Inaccurate Data",
    cause: "Missing freshness checks or tests.",
    solutions: ["Implement dbt tests (e.g., unique, not_null) and freshness checks for source data."],
  },
  {
    title: "Low Stakeholder Trust in Data",
    cause: "Lack of data testing or transparency.",
    solutions: ["Use dbt tests, generate documentation, and communicate data lineage to business users."],
  },
  {
    title: "Inconsistent Metric Definitions",
    cause: "Metrics defined in multiple tools or places.",
    solutions: ["Centralize metric logic using dbt's metrics layer or reusable CTEs in models."],
  },
  {
    title: "Deployment Fails Without Clear Reason",
    cause: "Missing CI/CD or local testing workflows.",
    solutions: ["Set up a CI pipeline with dbt Cloud or GitHub Actions to validate models before deployment."],
  },
  {
    title: "Overwritten or Lost Model Changes",
    cause: "Lack of version control practices.",
    solutions: ["Use Git with pull requests and code reviews for all model changes."],
  },
  {
    title: "No Visibility Into Model Lineage",
    cause: "Unused dbt documentation or no DAG review.",
    solutions: ["Regularly generate and share dbt docs to visualize lineage and model relationships."],
  },
  {
    title: "Duplicate Logic Across Models",
    cause: "Copy-pasting SQL instead of using Jinja macros or sources.",
    solutions: ["Abstract logic into reusable macros or common CTEs."],
  },
  {
    title: "Unclear Data Ownership",
    cause: "Shared responsibility across teams with no documentation.",
    solutions: ["Define ownership and model tags in dbt_project.yml."],
  },
  {
    title: "Cost Overruns in the Warehouse",
    cause: "Non-optimized queries or full table refreshes.",
    solutions: ["Use incremental models, limit unnecessary joins, and audit warehouse costs."],
  },
  {
    title: "Team Doesn't Understand dbt Workflows",
    cause: "Poor onboarding or documentation.",
    solutions: ["Create internal training materials and enforce code standards via dbt style guides."],
  },
  {
    title: "Hard to Onboard New Team Members",
    cause: "Missing project-level documentation.",
    solutions: ["Document folder structure, model purposes, and run instructions in a central README."],
  },
  {
    title: "Inconsistent Run Environments",
    cause: "Differences between dev and prod environments.",
    solutions: ["Use dbt profiles to define and test environment-specific configurations."],
  },
  {
    title: "Schedule Drift (Jobs Not Running as Expected)",
    cause: "Misconfigured scheduler or pipeline orchestration.",
    solutions: ["Use dbt Cloud scheduling or integrate with tools like Airflow, Prefect, or Dagster."],
  },
  {
    title: "Data Updates Aren't Traceable",
    cause: "No logging or audit trails for dbt runs.",
    solutions: ["Enable dbt artifacts, use logging, and version output tables."],
  },
  {
    title: "Long Turnaround Time for Changes",
    cause: "Bottlenecks in testing or approval processes.",
    solutions: ["Automate tests and CI pipelines to accelerate development cycles."],
  },
  {
    title: "Lack of Monitoring for Failed Models",
    cause: "No alerting set up for dbt runs.",
    solutions: ["Set up alerts via dbt Cloud, Slack integrations, or use orchestration alerts."],
  },
  {
    title: "Misalignment with Business KPIs",
    cause: "Technical teams not syncing with business needs.",
    solutions: ["Include business stakeholders in model review processes and translate metrics into accessible terms."],
  },
  // New data cleaning and ETL problems
  {
    title: "Inconsistent Column Formats",
    cause: "Data collected from multiple sources with differing standards.",
    solutions: ["Standardize formats using scripts (e.g., Pandas, SQL) early in the ETL pipeline."],
  },
  {
    title: "Missing Values",
    cause: "Incomplete data entry, sensor failure, or system errors.",
    solutions: ["Impute with statistical methods, drop rows, or flag and route for human review."],
  },
  {
    title: "Duplicated Records",
    cause: "Data ingestion from overlapping sources.",
    solutions: ["Use drop_duplicates() or ROW_NUMBER() in SQL with clear deduplication logic."],
  },
  {
    title: "Typos and Misspellings",
    cause: "Manual entry or OCR errors.",
    solutions: ["Use fuzzy matching or dictionaries to normalize string values."],
  },
  {
    title: "Inconsistent Date and Time Formats",
    cause: "Systems using different locales or formatting standards.",
    solutions: ["Parse all dates to ISO-8601 or standard datetime formats using libraries like dateutil."],
  },
  {
    title: "Mixed Data Types in a Single Column",
    cause: "Poor data validation at collection.",
    solutions: ["Coerce data types and create error logs for manual review."],
  },
  {
    title: "Outliers Distorting Analyses",
    cause: "Errors in measurement, entry, or edge cases.",
    solutions: ["Use statistical thresholds (IQR, Z-score) to flag, investigate, and address."],
  },
  {
    title: "Encoding Issues (e.g., UTF-8 vs ANSI)",
    cause: "Mismatched encoding across files or sources.",
    solutions: ["Standardize file encodings at ingestion and convert with appropriate libraries."],
  },
  {
    title: "Column Names with Inconsistent Naming",
    cause: "Manual column entry or lack of naming standards.",
    solutions: ["Rename columns consistently and use naming conventions (snake_case, camelCase)."],
  },
  {
    title: "Blank vs Null vs 0 Confusion",
    cause: "Semantic differences across systems.",
    solutions: ["Define and enforce a missing value policy, and clearly document how each value is treated."],
  },
  {
    title: "Mismatched IDs or Foreign Keys",
    cause: "Disparate databases or legacy systems.",
    solutions: ["Use mapping tables or fuzzy joins, and audit data lineage."],
  },
  {
    title: "Truncated or Overflowed Data",
    cause: "Field size limitations in source systems.",
    solutions: ["Increase field length during ingestion and validate against original source."],
  },
  {
    title: "Units of Measure Inconsistencies",
    cause: "Manual entry or international data sources.",
    solutions: ["Convert units to a common standard (e.g., metric vs imperial) using conversion tables."],
  },
  {
    title: "Non-normalized Categorical Data",
    cause: "Free-form text entries.",
    solutions: ["Use controlled vocabularies, lookup tables, or drop-down input forms upstream."],
  },
  {
    title: "Unnecessary Whitespace or Hidden Characters",
    cause: "Copy-paste or OCR errors.",
    solutions: ["Strip whitespace and remove non-printable characters with regex or string methods."],
  },
  {
    title: "Lack of Metadata or Data Dictionaries",
    cause: "Informal data collection processes.",
    solutions: ["Document data structure, meaning, and provenance using data catalog tools."],
  },
  {
    title: "Case Sensitivity Errors",
    cause: 'Systems treat "ABC" and "abc" differently.',
    solutions: ["Normalize text case early in preprocessing."],
  },
  {
    title: "Conflicting Sources of Truth",
    cause: "No master data management strategy.",
    solutions: ["Establish source of truth and reconciliation logic using version control or data contracts."],
  },
  {
    title: "Poorly Formatted or Nested JSON/XML",
    cause: "Inconsistent API responses or malformed files.",
    solutions: ["Use schema validation, flattening utilities, and recursive parsing tools."],
  },
  {
    title: "Manual, Repeatable Tasks",
    cause: "No automation in data pipeline.",
    solutions: ["Automate using dbt, Python scripts, or low-code ETL tools like Airbyte or Fivetran."],
  },
]
