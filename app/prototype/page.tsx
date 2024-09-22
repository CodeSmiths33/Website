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
            A detailed demonstration on the overall progress of the product.
          </p>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mt-4 md:mt-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Smart India Hackathon 2024: Gender Classifier for Women's
                  Safety
                </h2>
                <p className="text-gray-700 mb-4">
                  Our gender classifier model enhances women's safety. Designed
                  for surveillance integration, it detects gender in real-time
                  to help reduce threats.
                </p>
                <p className="text-gray-700 mb-4">
                  Watch as we showcase its functionality, real-world uses, and
                  potential to create safer environments.
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Key Features:
                </h3>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>94% accuracy in gender classification</li>
                  <li>Real-time detection for security and surveillance</li>
                  <li>Focused on reducing threats to women</li>
                  <li>Powered by advanced machine learning algorithms</li>
                </ul>

                <div className="relative w-full overflow-hidden mt-4">
                  <iframe
                    className="w-full h-full"
                    allowFullScreen
                    src="https://www.youtube.com/embed/31LngYcwMmk"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mt-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Smart India Hackathon 2024: Hand SOS Sign Recognition System
                </h2>
                <p className="text-gray-700 mb-4">
                  In this video, we showcase our SOS hand sign recognition
                  system for SIH 2024, designed to enhance women's safety. Using
                  real-time gesture detection, it recognizes emergency signals
                  like the SOS sign, aiding in alerting authorities or nearby
                  individuals.
                </p>
                <p className="text-gray-700 mb-4">
                  The model detects key gestures, including Palm Out (Help
                  Sign), Closed Fist, Open Palm, and the S Sign (SOS signal).
                </p>
                <p className="text-gray-700 mb-4">
                  Leveraging AI and computer vision, this tool offers swift,
                  reliable safety measures, ideal for integration into security
                  systems or mobile apps.
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Key Features:
                </h3>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Real-time SOS hand sign detection</li>
                  <li>Focus on women’s safety</li>
                  <li>Recognition of multiple emergency gestures</li>
                  <li>High accuracy with MediaPipe and OpenCV</li>
                  <li>Potential for integration with surveillance systems</li>
                </ul>

                <div className="relative w-full overflow-hidden mt-4">
                  <iframe
                    className="w-full h-full"
                    allowFullScreen
                    src="https://www.youtube.com/embed/hK4zDQcZbAg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
