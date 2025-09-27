import { MetricCardsList } from "../components/metric-cards-list";
import FilmTable from "../tables/film-table";

export const OverviewModule = () => {
  return (
    <div className="space-y-19">
      <MetricCardsList />
      <FilmTable />
    </div>
  );
};
