import { ReactNode } from "react";
import Navigation from "@/app/ui/navigation/nav";
import SideLinks from "@/app/ui/navigation/sideLinks";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Navigation />
      <div className="flex justify-center p-32">{children}</div>
      <SideLinks
        linkData={{
          linkedIn: "https://www.linkedin.com/in/chemauer/",
          github: "https://github.com/G0nkly",
        }}
      />
    </main>
  );
}
