"use client";
import { QUERY_KEY } from "@/app/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import DetailCard from "../components/detail-card";
import { fetchStarships } from "@/app/lib/fetchStarships";
import { DetailCardSkeleton } from "../components/detail-card-skeleton";

export const StarshipDetailModule = () => {
  const params = useParams();
  const starshipId = params.starshipId as string;

  const { data: starshipDetail, isLoading } = useQuery({
    queryKey: [QUERY_KEY.starshipDetail, starshipId],
    queryFn: () => fetchStarships(starshipId),
    enabled: !!starshipId,
  });

  return (
    <>
      {isLoading ? (
        <DetailCardSkeleton />
      ) : (
        <DetailCard
          image="/assets/images/starship-detail.png"
          title={starshipDetail?.name}
          details={[
            `Model: ${starshipDetail?.model}`,
            `Passenger: ${starshipDetail?.passengers}`,
            `Pilots: Dior, Kingley, Jamal`,
          ]}
        />
      )}
    </>
  );
};
