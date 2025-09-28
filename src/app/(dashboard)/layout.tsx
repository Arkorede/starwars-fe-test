import { DashboardModule } from "../components/modules/main-dashboard-module";
import { QUERY_KEY } from "../constants/queryKeys";
import { fetchFilms } from "../lib/fetchFilms";
import { fetchPeople } from "../lib/fetchPeople";
import { fetchSpecies } from "../lib/fetchSpecies";
import { fetchStarships } from "../lib/fetchStarships";
import { getQueryClient } from "../lib/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = getQueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: [QUERY_KEY.species],
      queryFn: () => fetchSpecies(),
    }),
    queryClient.prefetchQuery({
      queryKey: [QUERY_KEY.films],
      queryFn: () => fetchFilms(),
    }),
    queryClient.prefetchQuery({
      queryKey: [QUERY_KEY.people],
      queryFn: () => fetchPeople(),
    }),
    queryClient.prefetchQuery({
      queryKey: [QUERY_KEY.starships],
      queryFn: () => fetchStarships(),
    }),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DashboardModule>{children}</DashboardModule>
    </HydrationBoundary>
  );
}
