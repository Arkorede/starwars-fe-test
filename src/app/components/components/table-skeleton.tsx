import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function TableSkeleton() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Skeleton className="h-6 w-32 bg-gray-100" />
      </div>

      <div className="rounded-sm border border-[#A4A7B766]">
        <Table>
          <TableHeader>
            <TableRow className="h-18.5 border-b-[#A4A7B766] hover:bg-transparent">
              <TableHead className="w-12">
                <Skeleton className="h-4 w-4 rounded bg-gray-100" />
              </TableHead>
              {[...Array(6)].map((_, index) => (
                <TableHead key={index} className="">
                  <Skeleton className="h-4 w-20 bg-gray-100" />
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...Array(6)].map((_, index) => (
              <TableRow key={index} className="h-18.5 border-b-[#A4A7B766]">
                <TableCell>
                  <Skeleton className="h-4 w-4 rounded bg-gray-100" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-32 bg-gray-100" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-16 bg-gray-100" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-24 bg-gray-100" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-40 bg-gray-100" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-8 bg-gray-100" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-20 bg-gray-100" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
