"use client";
import { QUERY_KEY } from "@/app/constants/queryKeys";
import { fetchPeople } from "@/app/lib/fetchPeople";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import DetailCard from "../components/detail-card";
import { formatDate } from "@/app/utils/formatter";

export const PeopleDetailModule = () => {
  const params = useParams();
  const peopleId = params.peopleId as string;

  const { data: peopleDetail } = useQuery({
    queryKey: [QUERY_KEY.peopleDetail, peopleId],
    queryFn: () => fetchPeople(peopleId),
    enabled: !!peopleId,
  });

  return (
    <DetailCard
      image="/assets/images/people-detail.png"
      title={peopleDetail?.name}
      details={[
        `Gender: ${peopleDetail?.gender}`,
        `Year of Birth: ${formatDate(peopleDetail?.birth_year)}`,
        `Skin Color: ${peopleDetail?.skin_color}`,
        `Height: ${peopleDetail?.height}CM`,
      ]}
    />
  );
};
