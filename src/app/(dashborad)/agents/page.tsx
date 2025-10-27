
import { AgentsViewError, AgentsViewLoading, AgentsViews } from "@/modules/agents/ui/views/agents-view"
import { getQueryClient, trpc } from "@/trpc/server"
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import {ErrorBoundary} from "react-error-boundary"


const Page = async  () => {
  const queryClient = getQueryClient();
  void queryClient.refetchQueries(trpc.agents.getMany.queryOptions());
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<AgentsViewLoading/>}>
      <AgentsViews/>
      <ErrorBoundary fallback={<AgentsViewError/>}>
      </ErrorBoundary>
      </Suspense>
    </HydrationBoundary>
)
}

export default Page