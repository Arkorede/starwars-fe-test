"use client";
import { useQuery } from "@tanstack/react-query";
import { DataTable, type Column } from "../components/data-table";
import { QUERY_KEY } from "@/app/constants/queryKeys";
import { fetchSpecies } from "@/app/lib/fetchSpecies";
import { useRouter } from "next/navigation";
import { extractId, formatDate } from "@/app/utils/formatter";
import { TableSkeleton } from "../components/table-skeleton";

interface Specie {
  name: string;
  classification: string;
  hair_color: string;
  eye_colors: string;
  height: string;
  created: string;
  url: string;
  [key: string]: unknown;
}

const SpeciesColumns: Column<Specie>[] = [
  { key: "name", header: "Name" },
  { key: "classification", header: "Classification" },
  { key: "eye_colors", header: "Eye colors" },
  { key: "hair_colors", header: "Hair Color" },
  { key: "average_height", header: "Height" },
  {
    key: "created",
    header: "Created",
    render: (value: unknown) => formatDate(String(value), "short"),
  },
];

export default function SpeciesTable() {
  const router = useRouter();

  const handleViewSpecies = (specie: Specie) => {
    const specieId = extractId(specie.url);
    router.push(`species/${specieId}`);
  };

  const { data: species, isLoading } = useQuery({
    queryKey: [QUERY_KEY.species],
    queryFn: () => fetchSpecies(),
  });

  return (
    <>
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <DataTable<Specie>
          title="Species"
          data={species?.results || []}
          columns={SpeciesColumns}
          onRowClick={handleViewSpecies}
        />
      )}
    </>
  );
}
