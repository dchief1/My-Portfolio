"use client";

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import DatabaseIcon from "@/assets/icons/database.svg";
import AwsIcon from "@/assets/icons/aws.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import NodeIcon from "@/assets/icons/nodejs.svg";
import TsIcon from "@/assets/icons/typescript.svg";
import NextJsIcon from "@/assets/icons/nextjs.svg";
import GolangIcon from "@/assets/icons/golang.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "Golang",
    iconType: GolangIcon,
  },
  {
    title: "TypeScript",
    iconType: TsIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Node.js",
    iconType: NodeIcon,
  },
  {
    title: "Databases",
    iconType: DatabaseIcon,
  },
  { title: "AWS", iconType: AwsIcon },
  {
    title: "Next.js",
    iconType: NextJsIcon,
  },

  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Gaming",
    emoji: "🎮",
    left: "5%",
    top: "5%",
  },

  {
    title: "Watching football",
    emoji: "⚽",
    left: "10%",
    top: "70%",
  },

  {
    title: "Jogging",
    emoji: "🏃‍♂️",
    left: "35%",
    top: "40%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "45%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "10%",
    top: "35%",
  },
  {
    title: "Painting",
    emoji: "🎨",
    left: "50%",
    top: "5%",
  },
];

const services = [
  { title: "Frontend Development" },
  { title: "Backend Development" },
  { title: "Fullstack Development" },
  { title: "Project Management" },
  { title: "Team Lead" },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div id="about" className="py-20 lg:py-28 scroll-mt-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Lean more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 ">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />

              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book Cover" />
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools used to craft exceptional digital
                experiences."
                className=""
              />

              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:30s]"
              />
            </Card>
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px]  flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />

              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-6 md:py-8 md:px-4 flex flex-col md:col-span-2 lg:col-span-1 md:gap-2">
              <div className="flex items-start justify-between mb-4 gap-4">
                <div className="flex-1">
                  <CardHeader
                    title="Services"
                    description="Services and expertise I bring to the table."
                    className="p-0 md:px-4 md:py-0"
                  />
                </div>
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 rounded-lg px-3 py-2  text-center flex-shrink-0 md:hidden">
                  <p className="text-sm font-bold text-gray-950">5</p>
                  <p className="text-xs font-semibold text-gray-950">Years</p>
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-2 md:gap-3 mt-4 md:mt-0 px-3">
                {services.map((service, index) => (
                  <div key={service.title} className="flex items-center gap-2 md:gap-3 min-w-0">
                    <div
                      className={`w-2 h-2 flex-shrink-0 rounded-full ${
                        index % 2 === 0 ? "bg-emerald-400" : "bg-sky-400"
                      }`}
                    ></div>
                    <span className="text-gray-300 text-xs md:text-sm truncate">
                      {service.title}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
