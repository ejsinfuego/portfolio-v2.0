import React from "react";
import Tag from "./Tag/Tag";
interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  tags: string[];
  dateFrom: string;
  dateTo: string;

}


export default function ProjectCard({ title, description, link, tags, dateFrom, dateTo }: ProjectCardProps) {
  return (
    <div
    onClick={() => window.open(`https://${link}`, "_blank")}
    className="flex cursor-pointer flex-col md:flex-row w-full gap-0 md:gap-10 sm:px-8 md:py-12 py-2 min-w-40 rounded-xl shadow-none font-sans hover:bg-slate-800/50 border-t-[1px] border-slate-100/0 hover:border-t-[1px] hover:border-slate-100/5 hover:shadow-lg">
     <div
     className="w-auto sm:border-t-[1px] antialiased border-[#eaeaea9d] m-0 p-0 md:mt-2 text-nowrap"
     > <span className="text-sm sm:text-md font-normal">{dateFrom} - {dateTo}</span>

     </div>
     <div className="flex flex-col gap-2 items-start justify-start w-100 rounded-lg w-auto sub" >
     <h2 className="text-xl font-semibold text-[#eaeaea9d]"><a className="" href={`https://${link}`}>{title}</a></h2>
     <p className="text-[0.9rem] font-normal antialiased leading-6 font-sans">{description}</p>
     
      <div className="flex flex-auto justify-start flex-row gap-2 pt-4 w-auto flex-wrap">
        {tags.map((tag, index) => (
          <Tag key={index} tag={tag} />
        ))}
      </div>
      
     </div>
    </div>
  );
}