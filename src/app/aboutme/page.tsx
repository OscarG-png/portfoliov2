import { aboutMe } from "~/data/AboutMe";

export default function AboutMe() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5">
      <h1 className="text-4xl">About me</h1>
      <p>{aboutMe}</p>
    </div>
  );
}
