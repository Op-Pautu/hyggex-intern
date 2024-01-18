import BreadCrumbs from "@/components/BreadCrumps";
import Categories from "@/components/Categories";
import Header from "@/components/Header";
import Title from "@/components/Title";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen px-[104px] py-[32px]">
      <Header />
      <BreadCrumbs />
      <Title />
      <Categories />
    </main>
  );
}
