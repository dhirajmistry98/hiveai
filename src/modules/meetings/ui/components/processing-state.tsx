import { EmptyState } from "@/components/empty-state";

export const ProcessingState = ({

}) => {
  return (
    <div className="bg-white rounded-lg px-4 py-4 flex flex-col gap-y-8 items-center justify-center">
      <EmptyState
       image="/processing.svg"
title="Processing Meeting"
description="We are finalizing your meeting details. This may take a few moments."

      />
      <div className="flex flex-col-reverse lg:flex-row lg-justify-center items-center gap-2 w-full">
      </div>
    </div>
  );
};
