import React from 'react';
import { Skeleton } from './ui/skeleton';

export default function CardSkeleton() {
  return(
    <div className="mx-auto w-[92vw] lg:w-[70vw] p-0 rounded-[30px] md:rounded-[50px] overflow-hidden border border-black bg-white">
      <div className="relative w-full overflow-hidden">
        <Skeleton className="w-full aspect-video"/>
      </div>
      
      <div className="flex flex-col px-4 pt-4 pb-6 md:px-8 lg:pb-10 max-w-full border-t border-black">

        <div className="flex flex-col md:flex-row flex-nowrap justify-between">

          <Skeleton className="h-8 mb-3 md:mb-0 md:w-3/5"/>  

          <div className="flex flex-col gap-3 md:gap-4 md:w-3/5 md:items-end">
            <Skeleton className="h-4 w-2/5"/>
            <Skeleton className="h-4 w-3/5"/>
          </div>
        </div>
      </div>
    </div>
  )
}