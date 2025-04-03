import { Metadata } from "next";

export const revalidate = 0;
export const runtime = "edge";

export const metadata = {
  title: "Static Things",
  description: "A list of static things (shuffled on every page load)",
} satisfies Metadata;

const staticThings = [
  "Static Thing 1",
  "Static Thing 2",
  "Static Thing 3",
  "Static Thing 4",
  "Static Thing 5",
  "Static Thing 6",
  "Static Thing 7",
  "Static Thing 8",
  "Static Thing 9",
  "Static Thing 10",
];

export default function Home() {
  const shuffledStaticThings = staticThings.sort(() => Math.random() - 0.5);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <p>Here are some statically known things:</p>
        <ul className="list-disc list-inside">
          {shuffledStaticThings.map((thing) => (
            <li key={thing}>{thing}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
