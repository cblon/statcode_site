'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { DataMaturityQuiz } from '@/components/quiz/data-maturity-quiz';

const DATA = [
  {
    id: 'reactive ',
    label: 'Reactive ',
    deals: 7,
    value: 16
  },
  {
    id: 'compliant ',
    label: 'Compliant ',
    deals: 18,
    value: 40
  },
  {
    id: 'strategic',
    label: 'Strategic',
    deals: 32,
    value: 71
  },
  {
    id: 'transformative',
    label: 'Transformative',
    deals: 45,
    value: 100
  },

];

const MotionCard = motion.create(Card);

export function BentoPipelinesCard({
  className,
  ...other
}: React.ComponentPropsWithoutRef<typeof MotionCard>): React.JSX.Element {
  return (
    <MotionCard
      className={cn(
        'relative h-[300px] max-h-[300px] overflow-hidden',
        className
      )}
      {...other}
    >
      <CardHeader>
      <CardTitle className="text-xl font-semibold"> The Data Maturity Model</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="line-clamp-2 text-sm text-muted-foreground lg:max-w-[55%]">
          Take the quiz and understand your data maturity level
        </p>

      <DataMaturityQuiz />
      </CardContent>

      {/* <CardHeader>
        <CardTitle className="text-xl font-semibold"> The Data Maturity Model</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="line-clamp-2 text-sm text-muted-foreground lg:max-w-[55%]">
        4 Stages of Data Literacy
        </p>
        <div className="relative min-h-[142px] overflow-hidden">
          <div className="group absolute inset-0 top-2 flex flex-col justify-between">
            {DATA.map((stage, index) => (
              <div
                key={stage.id}
                className="hover:!opacity-100 group-hover:opacity-40"
              >
                <motion.div
                  className="flex items-center space-x-2 rounded-md pr-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Badge
                    id={`stage-${stage.label}`}
                    variant="secondary"
                    className="w-24 justify-center"
                  >
                    {stage.label}
                  </Badge>
                  <Progress
                    aria-labelledby={`stage-${stage.label}`}
                    value={stage.value}
                    className="flex-1"
                  />
                  <span className="w-8 text-right text-sm font-medium">
                    {stage.deals}
                  </span>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </CardContent> */}
    </MotionCard>
  );
}
