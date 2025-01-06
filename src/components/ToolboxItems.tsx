import React, { Fragment } from 'react'
import { TechIcons } from './TechIcons';
import { twMerge } from 'tailwind-merge'
interface ToolBoxItem {
    title: string;
    iconType: string;
  }
interface ToolboxItemsProps {
    toolBoxItems?: ToolBoxItem[];
    itemsWrapperClass?: string;
  }
  
  export const ToolboxItems = ({ toolBoxItems, itemsWrapperClass }: ToolboxItemsProps) => {
    const arrayLength = ['', ''];
  
    return (
      <div
        className="flex mt-6"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div className={twMerge(`flex flex-none gap-6 py-0.5`, itemsWrapperClass)}>
          {arrayLength.map((_, index) => {
            return (
              <Fragment key={index}>
                {toolBoxItems?.map((item) => (
                  <div key={item.title} className="inline-flex items-center outline rounded-lg outline-2 outline-white/10 gap-4 px-3 py-2">
                    <TechIcons component={item.iconType} />
                    <span className="font-semibold">{item.title}</span>
                  </div>
                ))}
              </Fragment>
            );
          })}
        </div>
      </div>
    );
  };
  