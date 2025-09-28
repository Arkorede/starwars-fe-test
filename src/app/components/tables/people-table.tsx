"use client";
import { useQuery } from "@tanstack/react-query";
import { DataTable, type Column } from "../components/data-table";
import { QUERY_KEY } from "@/app/constants/queryKeys";
import { fetchPeople } from "@/app/lib/fetchPeople";
import { useRouter } from "next/navigation";
import { extractId, formatDate } from "@/app/utils/formatter";

interface People {
  name: string;
  birth_year: string;
  hair_color: string;
  gender: string;
  height: string;
  created: string;
  url: string;
  [key: string]: unknown;
}

const PeopleColumns: Column<People>[] = [
  { key: "name", header: "Name" },
  {
    key: "birth_year",
    header: "Birth year",
  },
  { key: "hair_color", header: "Gender" },
  { key: "gender", header: "Hair Color" },
  { key: "height", header: "Height" },
  {
    key: "created",
    header: "Created",
    render: (value: unknown) => formatDate(String(value), "short"),
  },
];

export default function PeopleTable() {
  const router = useRouter();

  const handleViewPeople = (people: People) => {
    const peopleId = extractId(people.url);
    router.push(`people/${peopleId}`);
  };

  const { data: people } = useQuery({
    queryKey: [QUERY_KEY.people],
    queryFn: () => fetchPeople(),
  });

  return (
    <>
      <DataTable<People>
        title="People"
        data={people?.results || []}
        columns={PeopleColumns}
        onRowClick={handleViewPeople}
      />
    </>
  );
}
