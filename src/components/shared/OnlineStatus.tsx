import { cn } from "@/lib/utils";

export default function OnlineStatus({
  isOnline = false,
  timeOffline,
  isAbsolute = false,
}: {
  isOnline?: boolean;
  timeOffline?: any;
  isAbsolute?: boolean;
}) {
  return (
    <div
      className={cn(
        isAbsolute ? "absolute right-0 bottom-0" : "flex items-center gap-1.5"
      )}
    >
      <div
        className={cn(
          "h-2 w-2 rounded-full",
          isOnline ? "bg-green-500" : "bg-slate-500"
        )}
      ></div>
      {!isAbsolute && (
        <div className="text-xs text-muted-foreground">
          {isOnline ? "Online" : "Offline"} {!isOnline && timeOffline}
        </div>
      )}
    </div>
  );
}
