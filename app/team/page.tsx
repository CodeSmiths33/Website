import Link from "@/components/ui/Link";
import ConnectLinks from "@/components/ConnectLinks";
import avatar2 from "@/public/avatars/nishant-avatar.jpg";
import avatar6 from "@/public/avatars/dhiraj-avatar.jpg";
import avatar3 from "@/public/avatars/dipak-avatar.jpg";
import avatar4 from "@/public/avatars/ishita-avatar.jpg";
import avatar5 from "@/public/avatars/karmanya-avatar.jpg";
import avatar from "@/public/avatars/bishal-avatar.png";
import Avatar from "@/components/Avatar";

export default function Links() {
  return (
    <>
      <div className="flex flex-col gap-16 md:gap-24 pt-3">
        <div className="flex animate-in flex-col gap-8">
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
            <Avatar src={avatar} alt="avatar" />
            <Avatar src={avatar2} alt="avatar" />
            <Avatar src={avatar3} alt="avatar" />
            <Avatar src={avatar4} alt="avatar" />
            <Avatar src={avatar5} alt="avatar" />
            <Avatar src={avatar6} alt="avatar" />
          </div>
          <div
            className="animate-in space-y-1 text-center"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            <h1 className="text-3xl font-bold tracking-tight">Our Team</h1>
            <p className="mx-auto max-w-sm text-secondary">
              We are students of Siliguri Institute of Technology trying to make
              impact on the world with the use of our technical prowess. We
              specialize in, AI/ML technology, web development, databases,
              networking and python. We present a robust AI powered solution for
              the concerned safety of women&apos;s in india.
            </p>
          </div>
        </div>

        <div className="flex animate-in flex-col justify-center items-center gap-8">
          <div>
            <Avatar src={avatar4} alt="avatar" />
            <Avatar src={avatar2} alt="avatar" />
          </div>
          <div
            className="animate-in space-y-1 text-center"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            <h1 className="text-3xl font-bold tracking-tight">Our Mentors</h1>
            <p className="mx-auto max-w-sm text-secondary">
              With professional mentors excelling in the field of technology
              guiding us only sky is our limit.
            </p>
          </div>
        </div>

        <ul
          className="animated-list grid flex-grow animate-in grid-cols-1 gap-3"
          style={{ "--index": 3 } as React.CSSProperties}
        >
          {ConnectLinks.map((link) => (
            <li className="col-span-1 transition-opacity" key={link.label}>
              <Link
                href={link.href}
                className="inline-grid w-full rounded-lg bg-tertiary p-4 no-underline transition-opacity"
              >
                <div className="flex items-center gap-3 text-white bg-zinc-500 p-3 rounded-lg">
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
      </div>
    </>
  );
}
