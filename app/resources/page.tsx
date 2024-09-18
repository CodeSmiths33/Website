import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Codesmiths",
  description: "Join the community and share your thoughts.",
  openGraph: {
    title: "Community | All eyes on streets",
    description: "Join the community and share your thoughts.",
    type: "website",
  },
};

export default function Resources() {
  return (
    <div className="flex flex-col gap-6 md:gap-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Research & References
        </h1>
        <p className="text-secondary">
          Let&apos;s have a look on our research and resources.
        </p>
      </div>
      <div className="research-section flex flex-col gap-4">
        <h3 className="text-xl font-bold tracking-tight">Research Papers:</h3>
        <ul>
          <li className="text-blue-500 underline">
            <a
              href="https://www.researchgate.net/publication/379013463_A_Conceptual_Study_On_Women_Safety_Application_In_Digital_Era"
              target="_blank"
            >
              A Conceptual Study On Women Safety Application In Digital Era
            </a>
          </li>
          <li className="text-blue-500 underline">
            <a
              href="https://www.researchgate.net/publication/323527436_Gender_classification_of_full_body_images_based_on_the_convolutional_neural_network"
              target="_blank"
            >
              Gender Classification of Full Body Images Based on the
              Convolutional Neural Network
            </a>
          </li>
        </ul>

        <h3 className="text-xl font-bold tracking-tight">References:</h3>
        <ul>
          <li>
            <a
              href="https://economictimes.indiatimes.com/topic/women-safety"
              target="_blank"
            >
              <strong className="text-white">News & Facts:</strong> <span className="text-blue-500 underline">Women Safety</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.kaggle.com/datasets/zalando-research/fashionmnist"
              target="_blank"
            >
              <strong className="text-white">Dataset:</strong> <span className="text-blue-500 underline">Fashion MNIST</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ultralytics/ultralytics"
              target="_blank"
            >
              <strong className="text-white">Model:</strong> <span className="text-blue-500 underline">Ultralytics Repository</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
