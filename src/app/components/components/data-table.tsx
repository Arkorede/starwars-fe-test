"use client";

import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

export interface Column<T> {
  key: keyof T;
  header: string;
  render?: (value: unknown, row: T) => React.ReactNode;
}

export interface DataTableProps<T> {
  title?: string;
  data: T[];
  columns: Column<T>[];
  onRowClick?: (row: T, index: number) => void;
  className?: string;
}

export function DataTable<T extends Record<string, unknown>>({
  title,
  data,
  columns,
  onRowClick,
  className = "",
}: DataTableProps<T>) {
  const renderCellContent = (value: unknown, row: T, column: Column<T>) => {
    if (column.render) {
      return column.render(value, row);
    }

    if (Array.isArray(value)) {
      const displayText = `${value.length} character${value.length !== 1 ? "s" : ""}`;
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="cursor-help underline decoration-dotted underline-offset-4">
                {displayText}
              </span>
            </TooltipTrigger>
            <TooltipContent
              side="top"
              className="max-w-xs bg-white shadow-[0_0_30px_0_rgba(13,47,161,0.07)]"
            >
              <div className="space-y-1">
                {value.map((item, index) => (
                  <div key={index} className="text-xs">
                    {String(item)}
                  </div>
                ))}
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }

    return String(value || "");
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {title && (
        <h2 className="text-base/6 font-normal text-gray-200">{title}</h2>
      )}

      <div className="rounded-sm border border-[#A4A7B766]">
        <Table>
          <TableHeader>
            <TableRow className="h-18.5 border-b-[#A4A7B766] hover:bg-transparent">
              <TableHead className="pl-8">
                <Checkbox className="border-[#A4A7B766]" />
              </TableHead>
              {columns.map((column) => (
                <TableHead
                  key={String(column.key)}
                  className="text-base/6 font-medium text-gray-200"
                >
                  {column.header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow
                key={index}
                className="h-18.5 cursor-pointer border-b-[#A4A7B766] transition-colors hover:shadow-[0_0_30px_0_rgba(13,47,161,0.07)]"
                onClick={() => onRowClick?.(row, index)}
              >
                <TableCell className="pl-8">
                  <Checkbox className="border-[#A4A7B766]" />
                </TableCell>
                {columns.map((column) => (
                  <TableCell
                    key={String(column.key)}
                    className="text-base/6 font-medium text-gray-500"
                  >
                    {renderCellContent(row[column.key], row, column)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
