import { auth } from "@/lib/auth";
import { loadSearchParams } from "@/modules/agents/params";
import { AgentsListHeader } from "@/modules/agents/ui/components/agents-list-header";
import {
  AgentsViewError,
  AgentsViewLoading,
  AgentsViews,
} from "@/modules/agents/ui/views/agents-view";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import { SearchParams } from "nuqs";
import {headers} from "next/headers";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface Props {
  searchParams: Promise<SearchParams>;
}

const Page = async ({searchParams}:Props) => {

const filters = await loadSearchParams(searchParams);

const session =  await auth.api.getSession({
 headers: await headers(),
});

if (!session) {
  redirect("/sign-in");
}
  
const queryClient = getQueryClient();

void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions({
  ...filters,
}));
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
