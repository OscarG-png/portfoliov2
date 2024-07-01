import { Button } from "~/components/ui/button";
import { Github } from "../components/icons/Github";
import { Gitlab } from "../components/icons/Gitlab";
import { Linkedin } from "../components/icons/Linkedin";
import { Leetcode } from "../components/icons/Leetcode";
import Skills from "../components/Skills";
import Image from "next/image";

export default function HomePage() {
  const resumeURL =
    "https://drive.google.com/file/d/1rSLPJtaiFng3bLktbIf4GT7x5kLRMg_6/view?usp=sharing";
  return (
    <main className="mt-20 flex h-screen flex-col items-center gap-10">
      <div className="gap2">
        <h1 className="justify-center text-4xl" aria-label="name">
          Oscar Gamez
        </h1>
        <p className="text-center">Fullstack Developer</p>
      </div>
      <Image
        alt="profile"
        src="https://i.imgur.com/zRkIc9y.jpeg"
        width={200}
        height={200}
        className="w-30 h-30 justify-center rounded-full"
        aria-label="profile picture"
      />
      <div className="flex flex-row gap-4">
        <a href="https://www.linkedin.com/in/oscarrgamez/">
          <Linkedin aria-label="Linkedin link" />
        </a>
        <a href="https://www.github.com/OscarG-PNG">
          <Github aria-label="github link" />
        </a>
        <a href="https://www.gitlab.com/OscarG">
          <Gitlab aria-label="gitlab link" />
        </a>
        <a href="https://leetcode.com/OscarGamez/">
          <Leetcode aria-label="leetcode link" />
        </a>
      </div>
      <a href={resumeURL}>
        <Button>Download Resume</Button>
      </a>
      <div className="flex flex-col gap-10 sm:flex-row">
        <Skills />
      </div>
    </main>
  );
}
