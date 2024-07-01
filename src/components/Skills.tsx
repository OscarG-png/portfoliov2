import {
  frontendSkills,
  backendSkills,
  programingLanguages,
  currentlyLearning,
} from "~/data/SkillsData";
import { Separator } from "~/components/ui/separator";

export default function Skills() {
  return (
    <>
      <div className="flex flex-col gap-1">
        <h1 className="text-xl">Frontend Skills</h1>
        <Separator />
        {frontendSkills.map((skill) => (
          <div key={skill.id}>{skill.name}</div>
        ))}
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-xl">Backend Skills</h1>
        <Separator />
        {backendSkills.map((skill) => (
          <div key={skill.id}>{skill.name}</div>
        ))}
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-xl">Programming Languages</h1>
        <Separator />
        {programingLanguages.map((skill) => (
          <div key={skill.id}>{skill.name}</div>
        ))}
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-xl">Currently Learning</h1>
        <Separator />
        {currentlyLearning.map((skill) => (
          <div key={skill.id}>{skill.name}</div>
        ))}
      </div>
    </>
  );
}
