import * as React from 'react';

import { AppInfo } from '@/constants/app-info';
import { cn } from '@/lib/utils';

// The logo size below is 28px x 28px but in a 36px x 36px container.
// Because of the 8px difference the components <Sidebar /> and <Mobilesheet /> have a pl-0.5 (4px left padding) class applied.
// When you update the logo make sure to eventually adjust the pl-0.5 class in those two components.

export type LogoProps = React.HTMLAttributes<HTMLDivElement> & {
  hideSymbol?: boolean;
  hideWordmark?: boolean;
};

export function Logo({
  hideSymbol,
  hideWordmark,
  className,
  ...other
}: LogoProps): React.JSX.Element {
  return (
    <div
      className={cn('flex items-center space-x-2', className)}
      {...other}
    >
      {!hideSymbol && (
        <div className="flex size-9 items-center justify-center p-1">
          <div className="flex size-7 items-center justify-center rounded-md border-0 text-primary dark:bg-er">
          

          
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <defs>
            <radialGradient
              id="gradient-0-0"
              gradientUnits="userSpaceOnUse"
              cx="150.793"
              cy="349.288"
              r="44"
              gradientTransform="matrix(8.01338, -2.662218, 2.35494, 7.08846, -1907.75728, -1620.826656)"
              spreadMethod="pad"
              xlinkHref="#gradient-0"
            />
            <linearGradient id="gradient-0">
              {/* <title>main</title> */}
              <stop offset="0" stopColor="rgb(79, 209, 197)" />
              <stop offset="0.257" stopColor="rgb(129, 230, 217)" />
              <stop offset="1" stopColor="rgb(51, 140, 245)" />
            </linearGradient>
          </defs>
          <ellipse
            style={{
              fillRule: 'nonzero',
              mixBlendMode: 'multiply',
              paintOrder: 'stroke',
              stroke: 'rgba(224, 13, 101, 0)',
            }}
            fill="url(#gradient-0-0)"
            cx="245.807"
            cy="246.419"
            rx="250"
            ry="250"
          />
        </svg>




          </div>
        </div>
      )}
      {!hideWordmark && <span className="font-bold">{AppInfo.APP_NAME}</span>}
    </div>
  );
}
