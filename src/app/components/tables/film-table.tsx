"use client";
import { useQuery } from "@tanstack/react-query";
import { DataTable, type Column } from "../components/data-table";
import { QUERY_KEY } from "@/app/constants/queryKeys";
import { fetchFilms } from "@/app/lib/fetchFilms";

interface Film {
  filmTitle: string;
  releaseDate: string;
  director: string;
  producer: string;
  episodeId: number;
  character: string[];
  [key: string]: unknown;
}

const filmsColumns: Column<Film>[] = [
  { key: "title", header: "Film Title" },
  { key: "release_date", header: "Release Date" },
  { key: "director", header: "Director" },
  { key: "producer", header: "Producer" },
  { key: "episode_id", header: "Episode ID" },
  { key: "characters", header: "Character" },
];

export default function FilmTable() {
  const handleViewFilm = (film: Film, index: number) => {
    console.log(film, index);
  };

  const { data: films } = useQuery({
    queryKey: [QUERY_KEY.films],
    queryFn: fetchFilms,
  });

  return (
    <>
      <DataTable<Film>
        title="Films"
        data={films.results || []}
        columns={filmsColumns}
        onRowClick={handleViewFilm}
      />
    </>
  );
}
