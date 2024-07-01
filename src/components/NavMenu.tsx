import Contact from "~/components/Contact";
import Link from "next/link";

export default function NavMenu() {
  return (
    <nav>
      <div className="flex flex-row gap-5 overflow-x-auto whitespace-nowrap sm:overflow-x-visible">
        <Link href="/">Home</Link>
        <Link href="/aboutme">About Me</Link>
        <Link href="/projects">Projects</Link>
        <Contact />
      </div>
    </nav>
  );
}
