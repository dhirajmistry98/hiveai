"use client";
import { trpc } from "@/trpc/client";

export const HomeView = () => {
 
  const { data, isLoading, error } = trpc.hello.useQuery({ text: "Dhiraj" });

  if (isLoading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error.message}</div>;

  return (
    <div className="flex flex-col p-4 gap-y-4">
      <p>{data?.greeting}</p>
    </div>
  );
};
