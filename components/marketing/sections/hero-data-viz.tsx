'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { MistakeDetail } from '@/components/dataviz/mistake-detail';
import {
  mistakes,
  ProgramDesignMistakesChart
} from '@/components/dataviz/program-design-mistakes-chart';
import { UnderlinedTabs } from '@/components/ui/tabs';

function SupportiveDashedGridLines(): React.JSX.Element {
  return (
    <>
      <svg className="absolute left-[calc(50%-50vw)] top-[59px] z-10 hidden h-px w-screen [mask-image:linear-gradient(to_right,#0000,#000_100px,#000_calc(100%-100px),#0000)] lg:block">
        <line
          x1="0"
          y1="0.5"
          x2="100%"
          y2="0.5"
          strokeLinecap="round"
          strokeDasharray="5 5"
          stroke="hsl(var(--border))"
        />
      </svg>
      <svg className="absolute left-[calc(50%-50vw)] top-0 z-10 hidden h-px w-screen [mask-image:linear-gradient(to_right,#0000,#000_100px,#000_calc(100%-100px),#0000)] lg:block">
        <line
          x1="0"
          y1="0.5"
          x2="100%"
          y2="0.5"
          strokeLinecap="round"
          strokeDasharray="5 5"
          stroke="hsl(var(--border))"
        />
      </svg>
    </>
  );
}

export default function ProgramDesignandEvaluation() {
  const [selectedMistake, setSelectedMistake] = useState<number | null>(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="relative mt-3 lg:mt-6"
      >
        <SupportiveDashedGridLines />
        <UnderlinedTabs
          defaultValue="feature1"
          className="mt-3"
        >
   
            <div className="flex min-h-fit flex-col items-center justify-center px-2 my-32 gap-4 bg-white dark:bg-background">
              <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                Seven Mistakes in Data Design and Evaluation
              </h1>
              <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-2 items-center">
                <div className="w-full lg:w-2/3 lg:h-[600px] relative">
                  <ProgramDesignMistakesChart
                    selectedMistake={selectedMistake}
                    setSelectedMistake={setSelectedMistake}    
                  />
                </div>
                <div className="w-full lg:w-1/3">
                  <MistakeDetail
                    mistake={
                      selectedMistake !== null
                        ? mistakes[selectedMistake]
                        : null
                    }
                    onClose={() => setSelectedMistake(null)}
                  />
                </div>
              </div>
            </div>
          
        </UnderlinedTabs>
      </motion.div>
    </>
  );
}
