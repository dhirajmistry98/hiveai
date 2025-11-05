"use client";

import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { DataTable } from "../components/data-table";
import { columns } from "../components/columns";
import { EmptyState } from "@/components/empty-state";


export const AgentsViews = () => {

  const trpc = useTRPC();
  const  { data } = useSuspenseQuery(trpc.agents.getMany.queryOptions());

  return (
    <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
     <DataTable data={data} columns={columns}/>
     {data.length === 0 &&(
      <EmptyState title="create your first agent" description="create a agent to join your meetings. Each agents will follow your instructions and can interact with participants during the call"/>
     )}
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