import Navbar from "@/components/layout/Navbar";

export default function Home(){
  return(
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      <section className="flex h-screen items-center justify-center">
        <h1 className="text-6xl font-black text-white">
          Homepage Comming Soon 
        </h1>
      </section>
    </main>
  )
}