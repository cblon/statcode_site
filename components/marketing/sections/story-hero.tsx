import * as React from 'react'; 

import { GridSection } from '@/components/marketing/fragments/grid-section';
import { SiteHeading } from '@/components/marketing/fragments/site-heading';

export function StoryHero(): React.JSX.Element {
  return (
    <GridSection hideVerticalGridLines>
      <div className="container py-24 md:py-32">
        <SiteHeading
          badge="Our Story"
          title="Bring clarity where there’s noise"
          description="I’m not pitching you. I’m already solving problems for decision-makers like you."
        />
      </div>
    </GridSection>
  );
}
