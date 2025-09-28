"use client";
import { QUERY_KEY } from "@/app/constants/queryKeys";
import { fetchFilms } from "@/app/lib/fetchFilms";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import DetailCard from "../components/detail-card";
import { formatDate } from "@/app/utils/formatter";
import { DetailCardSkeleton } from "../components/detail-card-skeleton";

export const FilmDetailModule = () => {
  const params = useParams();
  const filmId = params.filmId as string;

  const { data: filmDetail, isLoading } = useQuery({
    queryKey: [QUERY_KEY.filmDetail, filmId],
    queryFn: () => fetchFilms(filmId),
    enabled: !!filmId,
  });

  return (
    <>
      {isLoading ? (
        <DetailCardSkeleton />
      ) : (
        <DetailCard
          image="/assets/images/filmcover.png"
          title={filmDetail?.title}
          details={[
            `Director: ${filmDetail?.director}`,
            `Producer: ${filmDetail?.producer}`,
            `Release Date: ${formatDate(filmDetail?.release_date)}`,
          ]}
        />
      )}
    </>
  );
};
