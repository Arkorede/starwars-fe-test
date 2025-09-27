"use client";
import { QUERY_KEY } from "@/app/constants/queryKeys";
import { fetchFilmbyId } from "@/app/lib/fetchFilmbyId";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import DetailCard from "../components/detail-card";

export const FilmDetailModule = () => {
  const params = useParams();
  const filmId = params.filmId as string;

  const { data: filmDetail } = useQuery({
    queryKey: [QUERY_KEY.filmDetail, filmId],
    queryFn: () => fetchFilmbyId(filmId),
    enabled: !!filmId,
  });

  return (
    <DetailCard
      image="/assets/images/filmcover.png"
      title={filmDetail?.title}
      details={[
        `Director: ${filmDetail?.director}`,
        `Producer: ${filmDetail?.producer}`,
        `Release Date: ${filmDetail?.release_date}`,
      ]}
    />
  );
};
