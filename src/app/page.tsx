import Hero from "@/components/Hero";
import Encaje from "@/components/Encaje";
import Problema from "@/components/Problema";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Encaje />
      <Problema />
    </main>
  );
}
