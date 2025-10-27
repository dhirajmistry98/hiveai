"use client";

import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { trpc } from "@/trpc/client";


export const AgentsViews = () => {
  const [ data ] = trpc.agents.getMany.useSuspenseQuery();

  return (
    <div className="p-4">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export const AgentsViewLoading = () => {
  return (
    <LoadingState title="Loading Agents" description="This may take a few seconds"/>
  )
}
export const AgentsViewError = () => {
  return (
    <ErrorState title="Error Loading Agents" description="Some thing want wrong"/>
  )
}