import * as React from 'react';
import { CircleCheckBigIcon } from 'lucide-react';

import { AiAdvisorCard } from '@/components/marketing/cards/ai-advisor-card';
import { BentoAnalyticsCard } from '@/components/marketing/cards/bento-analytics-card';
import { BentoCampaignsCard } from '@/components/marketing/cards/bento-campaigns-card';
import { BentoCustomersCard } from '@/components/marketing/cards/bento-customers-card';
import { BentoMagicInboxCard } from '@/components/marketing/cards/bento-magic-inbox-card';
import { BentoPipelinesCard } from '@/components/marketing/cards/bento-pipelines-card';
import { GridSection } from '@/components/marketing/fragments/grid-section';
import { AppInfo } from '@/constants/app-info';

export function Solution(): React.JSX.Element {
  return (
    <GridSection>
      <div className="bg-diagonal-lines">
        <div className="flex flex-col gap-24 bg-background py-20 lg:mx-12 lg:border-x">
          <div className="container relative space-y-10">
            <div>
              <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">
              Theory of Change
              </h2>
              <p className="mt-1 max-w-2xl text-muted-foreground md:mt-6">
                {/* {AppInfo.APP_NAME}  */}
                We often face the challenge of designing programs based on a fixed theory of change, assuming that one-size-fits-all solutions will work across diverse communities. But this can lead to a disconnect between the model and the people it’s supposed to serve. If the assumptions don’t match the reality on the ground—whether it’s cultural, socio-economic, or geographic—it’s easy to miss the mark and fail to achieve impact.  
              </p>
            </div>
            <div className="mx-auto xl:container xl:rounded-xl xl:bg-neutral-50 xl:p-6 dark:xl:bg-neutral-900">
             
             
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-full">

              <div className='flex flex-col gap-2'>

                <BentoCustomersCard
                  className="col-span-12 md:col-span-6 xl:col-span-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                />
               
                <BentoAnalyticsCard
                  className="col-span-12 md:col-span-6 xl:col-span-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
                {/* <BentoCampaignsCard
                  className="col-span-12 md:col-span-6 xl:col-span-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                />
                <BentoMagicInboxCard
                  className="col-span-12 md:col-span-6 xl:col-span-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                /> */}
              </div>
              <BentoPipelinesCard
                  className="h-full overflow-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              
              </div>
            </div>
            <div className="-ml-8 w-[calc(100%+64px)] border-t border-dashed sm:-ml-20 sm:w-[calc(100%+160px)]" />
            <div className="grid gap-10 sm:container lg:grid-cols-2">
              <div className="order-1 lg:order-2">
                <h2 className="mb-2.5 mt-8 text-3xl font-semibold md:text-5xl">
                Process Evaluations
                </h2>
                <p className="mt-1 text-muted-foreground md:mt-6">
                Various types of process evaluations (chronicle, compliance, translation, improvement, adaptive management) help address questions of context, fidelity, adaptation, and improvement.
                </p>
                <ul className="mt-6 list-none flex-wrap items-center gap-6 space-y-3 md:flex md:space-y-0">
                  {[
                    'Chronicle  ',
                    'Compliance/Fidelity  ',
                    'Translation  ',
                    'Improvement  ',
                    'Adaptive Management  ',
                    
                  ].map((feature) => (
                    <li
                      key={feature}
                      className="flex flex-row items-center gap-2"
                    >
                      <CircleCheckBigIcon className="size-4 shrink-0 text-primary" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-2 md:order-1">
                <AiAdvisorCard className="w-full max-w-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GridSection>
  );
}
