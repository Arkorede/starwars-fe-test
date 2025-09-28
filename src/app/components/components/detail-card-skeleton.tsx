import { Skeleton } from "@/components/ui/skeleton";

export function DetailCardSkeleton() {
  return (
    <div className="flex max-w-2xl gap-6">
      <div className="flex-shrink-0">
        <Skeleton className="h-64 w-48 rounded-lg bg-gray-100" />
      </div>

      <div className="flex-1 space-y-4">
        <Skeleton className="h-12 w-48 bg-gray-100" />

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-24 bg-gray-100" />
            <Skeleton className="h-4 w-16 bg-gray-100" />
          </div>

          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-20 bg-gray-100" />
            <Skeleton className="h-4 w-24 bg-gray-100" />
          </div>

          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-20 bg-gray-100" />
            <Skeleton className="h-4 w-64 bg-gray-100" />
          </div>

          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-28 bg-gray-100" />
            <Skeleton className="h-4 w-12 bg-gray-100" />
          </div>
        </div>
      </div>
    </div>
  );
}
