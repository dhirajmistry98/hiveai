import { Loader2Icon } from "lucide-react";

interface Props {
  title: string;
  description: string;
}

export const LoadingState = ({ title, description }: Props) => {
  return (
    <div className="py-4 px-8 flex flex-1 items-center justify-center min-h-[400px]">
      <div className="relative flex flex-col items-center justify-center gap-y-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-12 shadow-xl border border-gray-200 dark:border-gray-700 max-w-md w-full">
        {/* Animated gradient background */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse opacity-50"></div>
        
        {/* Loading spinner with glow effect */}
        <div className="relative z-10">
          <div className="absolute inset-0 blur-xl bg-blue-500/30 animate-pulse"></div>
          <Loader2Icon className="relative size-12 animate-spin text-blue-600 dark:text-blue-400" strokeWidth={2.5} />
        </div>
        
        {/* Animated dots */}
        <div className="relative z-10 flex gap-2">
          <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-pink-600 dark:bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col gap-3 text-center">
          <h6 className="text-xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight">
            {title}
          </h6>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
            {description}
          </p>
        </div>
        
        {/* Progress bar */}
        <div className="relative z-10 w-full max-w-xs h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-[shimmer_2s_ease-in-out_infinite]"></div>
        </div>
      </div>
      
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

// Demo
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">
      <LoadingState 
        title="Processing your request" 
        description="This may take a few moments. Please don't close this window."
      />
    </div>
  );
}