"use client";
import { useQuery } from "@tanstack/react-query";
import { DataTable, type Column } from "../components/data-table";
import { QUERY_KEY } from "@/app/constants/queryKeys";
import { fetchFilms } from "@/app/lib/fetchFilms";
import { useRouter } from "next/navigation";
import { extractId, formatDate } from "@/app/utils/formatter";

interface Film {
  filmTitle: string;
  releaseDate: string;
  director: string;
  producer: string;
  episodeId: number;
  character: string[];
  url: string;
  [key: string]: unknown;
}

const filmsColumns: Column<Film>[] = [
  { key: "title", header: "Film Title" },
  {
    key: "release_date",
    header: "Release Date",
    render: (value: unknown) => formatDate(String(value), "short"),
  },
  { key: "director", header: "Director" },
  { key: "producer", header: "Producer" },
  { key: "episode_id", header: "Episode ID" },
  { key: "characters", header: "Character" },
];

export default function FilmTable() {
  const router = useRouter();

  const handleViewFilm = (film: Film) => {
    const filmId = extractId(film.url);
    router.push(`overview/films/${filmId}`);
  };

  const { data: films } = useQuery({
    queryKey: [QUERY_KEY.films],
    queryFn: () => fetchFilms(),
  });

  return (
    <>
      <DataTable<Film>
        title="Films"
        data={films?.results || []}
        columns={filmsColumns}
        onRowClick={handleViewFilm}
      />
    </>
  );
}
