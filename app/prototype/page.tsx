import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Codesmiths",
  openGraph: {
    title: "Product demonstration",
    description: "A demonstration on the product.",
    type: "website",
  },
};

export default function CraftPage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="animate-in text-3xl font-bold tracking-tight">
            Prototype demonstration
          </h1>
          <p
            className="animate-in"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            A detailed demonstration on the product.
          </p>
          <div className="flex flex-col gap-10 mt-12">
            <div className="flex flex-col">
              <h1 className="animate-in text-2xl font-bold tracking-tight">
                Our gender classification model
              </h1>
              <div
                className="relative w-full overflow-hidden mt-4"
              >
               <iframe className="w-full h-full" allowFullScreen src="https://www.youtube.com/embed/31LngYcwMmk">
               </iframe>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="animate-in text-2xl font-bold tracking-tight">
                Our hand SOS sign recognition model
              </h1>
              <div
                className="relative w-full overflow-hidden mt-4"
              >
                <iframe className="w-full h-full" allowFullScreen src="https://www.youtube.com/embed/hK4zDQcZbAg">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
