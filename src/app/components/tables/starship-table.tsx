"use client";
import { useQuery } from "@tanstack/react-query";
import { DataTable, type Column } from "../components/data-table";
import { QUERY_KEY } from "@/app/constants/queryKeys";
import { useRouter } from "next/navigation";
import { extractId } from "@/app/utils/formatter";
import { fetchStarships } from "@/app/lib/fetchStarships";

interface Starship {
  name: string;
  model: string;
  starship_class: string;
  passengers: string;
  length: string;
  character: string[];
  url: string;
  [key: string]: unknown;
}

const StarshipColumns: Column<Starship>[] = [
  { key: "name", header: "Film Title" },
  { key: "model", header: "Release Date" },
  { key: "starship_class", header: "Director" },
  { key: "passengers", header: "Producer" },
  { key: "length", header: "Episode ID" },
  { key: "characters", header: "Character" },
];

export default function StarshipTable() {
  const router = useRouter();

  const handleViewShip = (ship: Starship) => {
    const starshipId = extractId(ship.url);
    router.push(`/starships/${starshipId}`);
  };

  const { data: starships } = useQuery({
    queryKey: [QUERY_KEY.starships],
    queryFn: () => fetchStarships(),
  });

  return (
    <>
      <DataTable<Starship>
        title="Starships"
        data={starships?.results || []}
        columns={StarshipColumns}
        onRowClick={handleViewShip}
      />
    </>
  );
}
