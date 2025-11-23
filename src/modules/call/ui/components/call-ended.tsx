import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export const CallEnded = () => {
  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-sidebar-accent via-sidebar to-sidebar-accent p-4">
      <div className="w-full max-w-md">
        {/* Main Card */}
        <div className="bg-background rounded-2xl p-8 shadow-2xl border border-border">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping" />
              <div className="relative bg-green-500/10 p-4 rounded-full">
                <CheckCircle2 className="w-12 h-12 text-green-500" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-2xl font-semibold">Call Ended</h2>
            <p className="text-muted-foreground">
              Your meeting has ended successfully
            </p>

            {/* Summary Info */}
            <div className="bg-muted/50 rounded-xl p-4 mt-6 space-y-3">
              <div className="flex items-center justify-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">
                  Summary will be ready in a few minutes
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3">
            <Button asChild size="lg" className="w-full group">
              <Link href="/meetings">
                <span className="flex items-center justify-center gap-2">
                  Back to Meetings
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full">
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>

        {/* Additional Info */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          Check your email for the meeting summary and recording
        </p>
      </div>
    </div>
  );
};