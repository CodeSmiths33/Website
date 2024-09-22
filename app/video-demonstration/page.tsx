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
        <h1 className="animate-in text-3xl font-bold tracking-tight text-primary mb-4">
          Video demonstration
        </h1>
        <p className="text-gray-700 mb-4 mt-4">
    Team CodeSmiths presents our innovative women&apos;s safety solution. This project combines AI surveillance, a mobile app, and wearable devices to provide real-time protection and assistance.
  </p>
  <p className="text-gray-700 mb-4">
    With AI analytics, location tracking, and SOS features, we aim to create safer environments and enable quick action during emergencies.
  </p>
  <p className="text-gray-700 mb-4">
    Watch to discover how our system offers advanced monitoring, alerts, and community support to enhance public safety for women.
  </p>
  <p className="text-gray-700 mb-4">Join us in making a difference!</p>
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
