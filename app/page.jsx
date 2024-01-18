import BreadCrumbs from "@/components/BreadCrumps";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen px-[104px] py-[32px]">
      <Header />
      <BreadCrumbs />
    </main>
  );
}
