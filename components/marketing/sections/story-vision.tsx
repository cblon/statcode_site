import * as React from 'react';

import { GridSection } from '@/components/marketing/fragments/grid-section';

export function StoryVision(): React.JSX.Element {
  return (
    <GridSection>
      <div className="container max-w-6xl py-20">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Our vision
            </h2>
            <p className="text-2xl font-medium leading-relaxed md:text-3xl">
              "Simple shift, positive impact."
            </p>
          </div>
          <div className="space-y-6 text-base text-muted-foreground md:text-lg">
            <p>
              The reality is, most organizations are collecting data, but they’re not evaluating it. They’re missing out on critical feedback loops that would allow them to adapt and improve in real-time. Without an evidence-based framework, data becomes just noise — and you’ll continue making decisions that feel right, but don’t actually move you forward.
            </p>
            <p>
              I use a blend of systems thinking and mixed-method evaluation approaches to design data pipelines that aren’t just useful — they’re actionable. By integrating quantitative and qualitative data sources, I can provide you with a holistic view of program performance, identify causality, and guide you to outcomes that truly move the needle.
            </p>
          </div>
        </div>
      </div>
    </GridSection>
  );
}
