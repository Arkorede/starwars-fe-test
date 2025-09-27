import { SideNav } from "../components/side-nav";
import { links } from "@/app/constants/links";
import { TopNav } from "../components/top-nav";

export const DashboardModule = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex min-h-screen">
      <SideNav
        sideNavProps={{
          linksProps: {
            navLinksProps: links,
          },
        }}
      />
      <div className="ml-68 flex flex-1 flex-col">
        <TopNav />
        <main className="flex-1 overflow-auto bg-white px-11 py-16">
          {children}
        </main>
      </div>
    </div>
  );
};
