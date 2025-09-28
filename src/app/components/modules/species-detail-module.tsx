"use client";
import { QUERY_KEY } from "@/app/constants/queryKeys";
import { fetchSpecies } from "@/app/lib/fetchSpecies";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import DetailCard from "../components/detail-card";
import { DetailCardSkeleton } from "../components/detail-card-skeleton";

export const SpeciesDetailModule = () => {
  const params = useParams();
  const specieId = params.specieId as string;

  const { data: specieDetail, isLoading } = useQuery({
    queryKey: [QUERY_KEY.specieDetail, specieId],
    queryFn: () => fetchSpecies(specieId),
    enabled: !!specieId,
  });

  return (
    <>
      {isLoading ? (
        <DetailCardSkeleton />
      ) : (
        <DetailCard
          image="/assets/images/specie-detail.png"
          title={specieDetail?.name}
          details={[
            `Designation: ${specieDetail?.designation}`,
            `Language: ${specieDetail?.language}`,
            `Eye Colors: ${specieDetail?.eye_colors}`,
            `Average Lifespan: ${specieDetail?.average_lifespan}`,
          ]}
        />
      )}
    </>
  );
};
