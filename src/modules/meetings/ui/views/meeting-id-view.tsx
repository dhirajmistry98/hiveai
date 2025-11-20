"use client"

import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { useTRPC } from "@/trpc/client";
import {  useMutation, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { MeetingIdViewHeader } from "../components/meeting-Id-view-header";
import { useRouter } from "next/navigation";
import { useConfirm } from "@/modules/agents/hooks/use.confirm";
import { useState } from "react";
import { UpdateMeetingDialog } from "../components/update-meetings-dialog";

interface Props {
  meetingId: string;
}

export const MeetingIdView = ({meetingId}:Props) => {
   const trpc = useTRPC();
   const router = useRouter()
   const queryClient = useQueryClient()

   const [updateMeetingDialogOpen,setUpdateMeetingDialogOpen] = useState(false)
 
   const [RemoveConfirmation, confirmRemove] = useConfirm(
    "Are you Sure",
    "The following action will remove this meeting"
   )

   const data = useSuspenseQuery(
    trpc.meetings.getOne.queryOptions({id: meetingId})
   )

   const removeMeeting = useMutation(
    trpc.meetings.remove.mutationOptions({
      onSuccess:()=>{
        queryClient.invalidateQueries(trpc.meetings.getMany.queryOptions({}))

        router.push("/meetings")
      },
    })
   )

   const handleRemoveMeeting = async () => {
    const ok = await confirmRemove();
    if(!ok) return ;

    await removeMeeting.mutateAsync({id:meetingId})
   }

 return (
  <>
  <RemoveConfirmation/>
 <UpdateMeetingDialog 
  open={updateMeetingDialogOpen}
  onOpenChange={setUpdateMeetingDialogOpen}
  initialValues={data.data}
/>

  <div className="flex-1 px-4 py-4 md:px-8 flex-col  gap-y-4">
    <MeetingIdViewHeader 
    meetingId={meetingId}
      meetingName={data.data.name}
      onEdit={()=>setUpdateMeetingDialogOpen(true)}
       onRemove={handleRemoveMeeting}
    />
        {JSON.stringify(data.data, null, 2)}
  </div>
  </>
 )
}


export const MeetingIdViewLoading = () => {
  return (
    <LoadingState
      title="Loading Meeting"
      description="This may take a few seconds"
    />
  );
};
export const MeetingIdViewError = () => {
  return (
    <ErrorState
      title="Error Loading Meeting"
      description="Some thing want wrong"
    />
  );
};