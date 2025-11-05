import { AgentsListHeader } from "@/modules/agents/ui/components/agents-list-header";
import {
  AgentsViewError,
  AgentsViewLoading,
  AgentsViews,
} from "@/modules/agents/ui/views/agents-view";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Page = async () => {
  
const queryClient = getQueryClient();

void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions());
  return (
    <>
    <AgentsListHeader/>
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ErrorBoundary fallback={<AgentsViewError />}>
        <Suspense fallback={<AgentsViewLoading />}>
          <AgentsViews />
        </Suspense>
      </ErrorBoundary>
    </HydrationBoundary>
    </>
  );
};

export default Page;
