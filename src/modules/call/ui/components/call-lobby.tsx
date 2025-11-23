import "@stream-io/video-react-sdk/dist/css/styles.css";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { generateAvatarUri } from "@/lib/avatar";
import {
  DefaultVideoPlaceholder,
  StreamVideoParticipant,
  ToggleAudioPreviewButton,
  ToggleVideoPreviewButton,
  useCallStateHooks,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import { LogInIcon } from "lucide-react";
import Link from "next/link";

interface Props {
  onJoin: () => void;
}

const DisableVideoPreview = () => {
  const { data } = authClient.useSession();

  return (
    <DefaultVideoPlaceholder
      participant={
        {
          name: data?.user.name ?? "",
          image:
            data?.user.image ??
            generateAvatarUri({
              seed: data?.user.name ?? "",
              variant: "initials",
            }),
        } as StreamVideoParticipant
      }
    />
  );
};

const AllowBrowserPermissions = () => {
  return (
    <div className="text-sm text-muted-foreground">
      Please grant your browser a permission to access your camera and
      microphone.
    </div>
  );
};

export const CallLobby = ({ onJoin }: Props) => {
  const { useCameraState, useMicrophoneState } = useCallStateHooks();
  const { hasBrowserPermission: hasMicPermission } = useMicrophoneState();
  const { hasBrowserPermission: hasCameraPermission } = useCameraState();

  const hasBrowserMediaPermission = hasCameraPermission && hasMicPermission;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-radial from-sidebar-accent w-full">
      <div className="py-4 px-8 flex flex-1 items-center justify-center">
        <div className="flex flex-col items-center  justify-center gap-y-6 bg-background rounded-lg p-4 shadow-sm">
          {/* Header */}
          <div className="flex flex-col gap-y-2 text-center">
            <h2 className="text-lg font-medium text-gray-800">Ready to join?</h2>
            <p className="text-sm text-gray-600">Set up your call before joining</p>
          </div>

          {/* Video Preview Container */}
          <div>
            <VideoPreview
              DisabledVideoPreview={
                hasBrowserMediaPermission
                  ? DisableVideoPreview
                  : AllowBrowserPermissions
              }
            />
          </div>

          {/* Audio/Video Toggle Buttons */}
          <div className="flex gap-3">
            <ToggleAudioPreviewButton />
            <ToggleVideoPreviewButton />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-between w-full mt-2">
            <Button asChild variant="ghost" className="text-gray-700 hover:text-gray-900 hover:bg-gray-100">
              <Link href="/meetings">Cancel</Link>
            </Button>
            <Button 
              onClick={onJoin}
              className="bg-green-600 hover:bg-green-700 text-white px-6"
            >
              <span className="flex items-center gap-2">
                <LogInIcon className="w-4 h-4" /> 
                Join Call 
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};