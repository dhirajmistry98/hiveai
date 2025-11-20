import { EmptyState } from "@/components/empty-state";

export const CancelledState = ({

}) => {
  return (
    <div className="bg-white rounded-lg px-4 py-5 flex flex-col gap-y-8 items-center justify-center">
      <EmptyState
        image="/cancelled.svg"
        title="Meeting Cancelled"
        description="This meeting has been cancelled and can no longer be accessed."
      />
      <div className="flex flex-col-reverse lg:flex-row lg-justify-center items-center gap-2 w-full">
      </div>
    </div>
  );
};
