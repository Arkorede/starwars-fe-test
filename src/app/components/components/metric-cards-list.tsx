"use client";
import { QUERY_KEY } from "@/app/constants/queryKeys";
import { MetricCard } from "../atoms/metrics-card";
import { useQueries } from "@tanstack/react-query";
import { fetchSpecies } from "@/app/lib/fetchSpecies";
import { fetchFilms } from "@/app/lib/fetchFilms";
import { fetchStarships } from "@/app/lib/fetchStarships";
import { fetchPeople } from "@/app/lib/fetchPeople";

export const MetricCardsList = () => {
  const queries = useQueries({
    queries: [
      {
        queryKey: [QUERY_KEY.species],
        queryFn: fetchSpecies,
      },
      {
        queryKey: [QUERY_KEY.people],
        queryFn: fetchPeople,
      },
      {
        queryKey: [QUERY_KEY.starships],
        queryFn: fetchStarships,
      },
      {
        queryKey: [QUERY_KEY.films],
        queryFn: fetchFilms,
      },
    ],
  });

  const [speciesQuery, peopleQuery, filmsQuery, starshipsQuery] = queries;

  return (
    <div className="grid grid-cols-1 space-x-4 sm:grid-cols-4">
      <MetricCard
        title="Films"
        value={filmsQuery.data?.count}
        subtitle="20 More than than yesterday"
        indicatorColor="#A9FFE0"
      />
      <MetricCard
        title="Starship"
        value={starshipsQuery.data?.count}
        subtitle="20 More than than yesterday"
        indicatorColor="#A9C1FF"
      />
      <MetricCard
        title="People"
        value={peopleQuery.data?.count}
        subtitle="20 More than than yesterday"
        indicatorColor="#FFA9EC"
      />
      <MetricCard
        title="Species"
        value={speciesQuery.data?.count}
        subtitle="20 More than than yesterday"
        indicatorColor="#FDFFA9"
      />
    </div>
  );
};
