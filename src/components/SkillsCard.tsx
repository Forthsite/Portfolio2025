import type { SkillItem } from "./Skills";

interface SkillsCardProps {
  Heading: string;
  SkillArray: SkillItem[];
}

const SkillsCard = ({ Heading, SkillArray }: SkillsCardProps) => {
  return (
    <div className="w-full lg:w-1/4 flex flex-col items-center">
      <h2 className="text-2xl my-4 font-semibold">{Heading}</h2>
      <div className="flex justify-center gap-8 flex-wrap bg-[#e6e9ef] p-8 m-2 rounded-2xl w-full">
        {SkillArray.map((i) => (
          <div className="flex flex-col items-center text-[#209fb5]">
            <div>{i.icon}</div>
            <div>{i.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
