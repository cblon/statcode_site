import * as React from 'react';
import Link from 'next/link';

import { GridSection } from '@/components/marketing/fragments/grid-section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { AppInfo } from '@/constants/app-info';
import { Routes } from '@/constants/routes';

const DATA = [
  {
    question: `How do we know if our programs are truly effective?`,
    answer: `You’re probably used to reporting on outputs—number of customers/participants, number of events/locations, number of job placements—but these numbers alone don’t tell you if the program is actually solving the problem. We’ve worked with organizations just like yours to shift from simple reporting to true impact measurement. Well-designed evaluation uses mixed-method approaches, including qualitative case studies and quantitative control-group comparisons, to determine causality. By implementing a logic model or theory of change, you can systematically connect activities to long-term impact. With this, you won’t just know that you’re doing work—you’ll know that it’s working. And you’ll have the data to prove it to your leadership, stakeholders, and your team.`
  },
  {
    question: 'How can we get more funding by demonstrating our impact?',
    answer: `Leadership aren’t just looking for feel-good stories anymore; they want hard data. Here’s what we do with organizations like yours: we structure their evaluation using the quasi-experimental designs and counterfactual analysis. These methods compare outcomes between program participants and non-participants, proving whether the program itself caused the impact. For instance, an organization can apply real-time data dashboards and incorporating pre-post comparisons to show impact trends. This is the level of certainty leadership need to make better decisions.`
  },
  {
    question: 'How do we ensure we are collecting the right data and not just drowning in numbers?',
    answer:
      'Many organizations believe that the more data, the better. But without a structured framework, it’s like having a GPS that spits out every possible route without telling you which one gets you there fastest. The importance of indicator selection based on program goals—not just collecting data for data’s sake. A simple but effective way to refine this is through the RE-AIM framework (Reach, Effectiveness, Adoption, Implementation, and Maintenance). We guide organizations in defining 3-5 key performance indicators (KPIs) that align with their mission and leadership expectations. By doing this, we help organizations move from drowning in data to using only the most critical, high-value metrics to drive decision-making.'
  },
  {
    question: 'How can we avoid bias in our evaluations to ensure credibility?',
    answer: `One of the biggest mistakes in program evaluation is letting bias creep in. This happens when only positive stories are collected, or when evaluations rely solely on self-reported outcomes. Ways to eliminate bias through triangulation, which means using multiple data sources and methodologies to validate results. We set up organizations with randomized controlled trials (RCTs) when feasible, or at minimum difference-in-differences analysis—both of which are gold-standard methods to ensure data integrity. By implementing these strategies, your evaluations will be rock-solid, leaving no room for doubt about the credibility of your findings.`
  },
  {
    question: 'How do we train staff and volunteers to use data effectively without overwhelming them?',
    answer:
      'Data adoption isn’t just about having the right tools—it’s about building a data culture. We recommend capacity-building through iterative training models, meaning you don’t train staff once and expect them to retain everything. Instead, we introduce a phased approach: First, we identify the most critical metrics aligned with organizational goals. Next, we create easy-to-understand dashboards so that staff can see insights visually, rather than being buried in spreadsheets. Finally, we implement weekly or monthly data touchpoints, where staff can apply insights in real-world decision-making. We’ve seen organizations move from data-averse to data-confident in just a few months using this approach.'
  },
  {
    question: 'How do we use evaluation data to improve our programs rather than just reporting it?',
    answer: `Most organizations use data retrospectively—collecting it, writing a report, and moving on. But evaluation is most valuable when it’s used for continuous improvement. The feedback loop model ensures that evaluation findings lead directly to program adjustments. We help organizations implement this through quarterly data review cycles, where teams analyze what’s working and make real-time tweaks. For example, a literacy organizations can use mid-year assessment data to tweak its tutoring model, leading to a increase in reading proficiency in just one year. When data becomes a tool for growth rather than a reporting requirement, organizations see real transformation.`
  },
  {
    question: 'How can we improve our stakeholder engagement using data?',
    answer:
      'Most organizations make the mistake of using the same report for all stakeholders, but different audiences care about different data points. We use the audience-tailored communication approach, where data is presented in different formats based on who’s consuming it. We help organizations develop stakeholder-specific data narratives—for leadership, it’s about ROI; for program staff, it’s about day-to-day impact; for the board, it’s about strategic direction. One implementation can be a tiered reporting system, using concise impact infographics for donors and detailed evaluations for internal teams. This approach can led to an increase in engagement and stronger support for expansion. When you customize how data is shared, stakeholders stay engaged and invested in your success.'
  }
];

export function FAQ(): React.JSX.Element {
  return (
    <GridSection>
      <div className="container py-20">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="text-center lg:text-left">
            <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 hidden text-muted-foreground md:block lg:max-w-[75%]">
              Haven't found what you're looking for? Try{' '}
              <Link
                href={Routes.Contact}
                className="font-normal text-inherit underline hover:text-foreground"
              >
                contacting
              </Link>{' '}
              us, we are glad to help.
            </p>
          </div>
          <div className="mx-auto flex w-full max-w-xl flex-col">
            <Accordion
              type="single"
              collapsible
            >
              {DATA.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={index.toString()}
                >
                  <AccordionTrigger className="text-left text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </GridSection>
  );
}
