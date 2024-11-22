import type { Route } from "./+types/home";

export default function Home() {
  return (
    <div className="h-screen font-['Lora']">
      <main className="">
        <section className="pt-32 max-w-3xl mx-auto">
          <h1 className="text-2xl flex items-center gap-3">
            <span className="w-7 h-7 rounded-md bg-gray-300/70"></span>
            <span>My Stats</span>
          </h1>
          <div className="pt-12">Showcase the stats of your everyday work.</div>
          <div className="pt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum porro,
            tenetur accusamus reiciendis.
          </div>
          <div className="pt-8 flex items-center gap-4">
            <button className="bg-blue-900/80 text-white rounded-full px-6 py-1.5">
              Get started
            </button>
            <button className="border border-gray-300 rounded-full px-6 py-1.5">
              Live Demo
              <span className="pl-2 text-sm">↗</span>
            </button>
          </div>
          <div className="pt-10 flex items-end">
            <span className="w-7 h-7 rounded-md bg-gray-300 rotate-6"></span>
            <span className="w-7 h-7 rounded-md bg-gray-300 -rotate-12"></span>
            <span className="w-7 h-7 rounded-md bg-gray-300 rotate-12"></span>
            <span className="w-7 h-7 rounded-md bg-gray-300 -rotate-6"></span>
            <span className="w-7 h-7 rounded-md bg-gray-300 -rotate-12"></span>
            <span className="w-7 h-7 rounded-md bg-gray-300 rotate-12"></span>
            <span className="w-7 h-7 rounded-md bg-gray-300 -rotate-6"></span>
            <span className="w-7 h-7 rounded-md bg-gray-300 -rotate-12"></span>
            <span className="text-sm leading-none pl-3 text-gray-400">
              ... and more
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}
