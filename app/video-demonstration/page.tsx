import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Codesmiths",
  description: "AI-driven solution for safety of women",
  openGraph: {
    title: "Video Demo",
    description: "AI-driven solution for safety of women",
    type: "website",
  },
};

export default function Video() {
  return (
    <div>
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
          Video demonstration
        </h1>
        <p
          className="animate-in text-secondary"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          Dive into the in-depth presentation and discussion on the idea.
        </p>
      </div>
      <div
        className="relative w-full overflow-hidden mt-10"
        style={{ paddingTop: "56.25%" }}
      >
        <iframe
          className="absolute left-0 top-0 h-full w-full"
          src="https://www.youtube.com/embed/fMeaiTkCg2E?enablejsapi=1&origin=https%3A%2F%2Fmdbootstrap.com"
          allowFullScreen
          id="240632615"
        />
      </div>
    </div>
  );
}
