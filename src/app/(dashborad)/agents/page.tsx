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


  await queryClient.prefetchQuery({
    queryKey: [["agents", "getMany"]],
    queryFn: () => trpc.agents.getMany.query(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ErrorBoundary fallback={<AgentsViewError />}>
        <Suspense fallback={<AgentsViewLoading />}>
          <AgentsViews />
        </Suspense>
      </ErrorBoundary>
    </HydrationBoundary>
  );
};

export default Page;
