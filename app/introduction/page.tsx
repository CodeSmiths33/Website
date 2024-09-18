import Link from "@/components/ui/Link";
import Section from "@/components/Section";
import ConnectLinks from "@/components/ConnectLinks";
import Image from "next/image";
import { CarouselDemo } from "@/components/Carousel";

export default function About() {
  return (
    <div className="flex flex-col gap-12 md:gap-16">
      <main className="container mx-auto px-4 py-8 text-white">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h1 className="text-3xl font-bold mb-4">Women's safety in India</h1>
            <p className="mb-4">
              Women's safety in India is a growing concern, and we propose a
              robust AI-powered surveillance and mobile application system to
              address this issue through constant monitoring, timely alerts, and
              real-time response.
            </p>
          </div>
          <div className="space-y-4 h-[40vh]">
            <h2 className="text-xl font-semibold">Progress</h2>
            <div className="relative">
              <Image
                src="/detection.png"
                alt="detection"
                width={600}
                height={600}
                className="w-full rounded-md"
              />
              <Image
                src="/accuracy.png"
                alt="detection"
                width={400}
                height={400}
                className="absolute -bottom-40 -right-5 bg-gray-200 rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-black p-1 bg-blue-500 w-[28%] rounded-md">What we are offering</h2>
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  AI-Driven Surveillance System
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Machine learning models detect people under CCTV
                    surveillance with over 94% accuracy
                  </li>
                  <li>
                    Real-time gender classification and counting of males and
                    females
                  </li>
                  <li>
                    Tracks lone individuals walking at night and flags potential
                    threats
                  </li>
                  <li>Recognizes distress signals and triggers SOS alerts</li>
                </ul>
              </div>
              <Image
                src="/surveiilance.webp"
                alt="AI-Driven Surveillance System"
                width={400}
                height={200}
                className="w-full rounded-md"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Mobile Application (A Virtual Companion)
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Continuously sends SOS alerts with live location</li>
                  <li>Integrates with Google Maps to suggest safer routes</li>
                  <li>Allows users to report and verify incidents</li>
                  <li>
                    Provides personalized safety tips and predicts potential
                    hotspots
                  </li>
                  <li>Supports over 15 regional languages</li>
                </ul>
              </div>
              <div className="space-y-4">
                <Image
                  src="/app.webp"
                  alt="Mobile Application Graphics"
                  width={400}
                  height={200}
                  className="w-full rounded-md"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 rounded-md w-full flex justify-center flex-col items-start">
          <h2 className="text-2xl font-bold mb-4 text-left">Graphs</h2>
          <CarouselDemo />
        </div>
        <div className="flex flex-col">
          <Section heading="Connect" headingAlignment="left">
            <ul className="animated-list grid flex-grow grid-cols-1 gap-3 md:grid-cols-2 text-black">
              {ConnectLinks.map((link) => (
                <li className="col-span-1 transition-opacity" key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-grid w-full rounded-lg bg-secondary p-4 no-underline transition-opacity "
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{link.icon}</span>
                      {link.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="ml-auto h-5 w-5 text-secondary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </main>
    </div>
  );
}
