import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Codesmiths",
  openGraph: {
    title: "Product demonstration",
    description:
      "A demonstration on the product.",
    type: "website",
  },
};

export default function CraftPage() {

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="animate-in text-3xl font-bold tracking-tight">
            Product demonstration
          </h1>
          <p
            className="animate-in text-secondary"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            A detailed demonstration on the product.
          </p>

        </div>
      </div>
    </div>
  );
}
