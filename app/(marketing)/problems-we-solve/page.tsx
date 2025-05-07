import * as React from 'react';
import type { Metadata } from 'next';

import { FAQ } from '@/components/marketing/sections/faq';
import { createTitle } from '@/lib/utils';
import { ProblemsWeSolveList } from '@/components/marketing/sections/problems-we-solve';

export const metadata: Metadata = {
  title: createTitle('Problems we solve')
};

export default function ProblemsWeSolvePage(): React.JSX.Element {
  return (
    <>
      <ProblemsWeSolveList/>
      <FAQ />
    </>
  );
}
