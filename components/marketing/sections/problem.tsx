import * as React from 'react';
import { AlarmCheckIcon, DollarSignIcon, TriangleAlertIcon } from 'lucide-react';

import { BlurFade } from '@/components/marketing/fragments/blur-fade';
import { GridSection } from '@/components/marketing/fragments/grid-section';
import { TextGenerateWithSelectBoxEffect } from '@/components/marketing/fragments/text-generate-with-select-box-effect';

const DATA = [
  {
    icon: <TriangleAlertIcon className="size-5 shrink-0" />,
    title: 'Competition',
    description:
      'Imagine seeing another organizations in your industry getting more funding, gaining recognition, and scaling—while you’re still struggling to demonstrate real impact. Can you afford to stay in the dark?'
  },
  {
    icon: <DollarSignIcon className="size-5 shrink-0" />,
    title: 'lack of Resources',
    description:
      'Think about the last time you wished for more resources, better engagement or customer/participant life-cycle. Now, imagine having the ability to achieve all of that with less effort—by simply understanding and using your data better.'
  },
  {
    icon: <AlarmCheckIcon className="size-5 shrink-0" />,
    title: 'Time and Energy',
    description:
      'Can you afford to be caught off guard by changes in the landscape? What happens when you’re asked to demonstrate the effectiveness of your programs on short notice, and you have no data to show? It’s not a matter of if change will come—it’s when. Will your organization be ready?'
  }
];

export function Problem(): React.JSX.Element {
  return (
    <GridSection>
      <div className="px-4 py-20 text-center">
        <h2 className="text-3xl font-semibold md:text-5xl">
          <TextGenerateWithSelectBoxEffect words="The Problem" />
        </h2>
      </div>
      <div className="grid divide-y border-t border-dashed md:grid-cols-3 md:divide-x md:divide-y-0">
        {DATA.map((statement, index) => (
          <BlurFade
            key={index}
            inView
            delay={0.2 + index * 0.2}
            className="border-dashed px-8 py-12"
          >
            <div className="mb-7 flex size-12 items-center justify-center rounded-2xl border bg-background shadow">
              {statement.icon}
            </div>
            <h3 className="mb-3 text-lg font-semibold">{statement.title}</h3>
            <p className="text-muted-foreground">{statement.description}</p>
          </BlurFade>
        ))}
      </div>
    </GridSection>
  );
}
