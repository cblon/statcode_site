'use client';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { MailIcon, MessageSquareIcon } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

const DATA = [
  {
    type: 'email',
    icon: MailIcon,
    title: 'Data',
    timing: 'How to collect the right data (without overcomplicating things)'
  },
  {
    type: 'message',
    icon: MessageSquareIcon,
    title: 'Method',
    timing: 'Proven methods for evaluating programs'
  },
  {
    type: 'email',
    icon: MailIcon,
    title: 'impact',
    timing: 'How to communicate impact to funders and stakeholders'
  },


];

const MotionCard = motion.create(Card);

export function BentoCampaignsCard({
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
        <CardTitle className="text-xl font-semibold">Build a Data-Driven Pipeline</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
        Get Started
        </p>
        <Carousel
          opts={{
            align: 'start',
            skipSnaps: true,
            loop: true,
            dragFree: true
          }}
          plugins={[
            Autoplay({
              delay: 2000
            })
          ]}
          orientation="vertical"
          className="pointer-events-none size-full select-none"
        >
          <CarouselContent className="pointer-events-none -mt-1 h-[232px] select-none sm:h-[146px]">
            {DATA.map(({ title, timing, icon: Icon }, index) => (
              <CarouselItem
                key={index}
                className="pointer-events-none basis-1/4 select-none pt-1 will-change-transform"
              >
                <Card className="m-1">
                  <CardContent className="flex w-full flex-row items-center justify-start gap-4 p-6">
                    <div className="rounded-full bg-primary p-2 text-primary-foreground">
                      <Icon className="size-5 shrink-0" />
                    </div>
                    <div>
                      <div className="text-xs font-medium sm:text-sm">
                        {title}
                      </div>
                      <div className="text-[10px] text-muted-foreground sm:text-xs">
                        {timing}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </CardContent>
    </MotionCard>
  );
}
