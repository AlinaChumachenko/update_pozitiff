"use client";
import { ModalBlock } from "@/components/Block/ModalBlock.js";
import Block from "@/components/Block/Block.js";
import VocalipBackground from "@/images/ill_hero.png";
import LogicomBackground from "@/images/group.png";
import CoralBackground from "@/images/Screen_Shot.png";
import Goodbackground from "@/images/asset.png";

const projects = [
  {
    title: "VOCALIP",
    imagePath: VocalipBackground,
    width: "552",
    height: "227",
    background: "bg-gradient-to-t from-violet-300 from-30% bg-gray-50 to-45%",
    padding: "py-28",
    description: "Description about project",
    service: "Website design & code",
  },
  {
    title: "LOGICOM",
    imagePath: LogicomBackground,
    width: "267",
    height: "217",
    background: "bg-gradient-to-t from-stone-300 to-stone-100",
    padding: "py-28",
    description: "Description about project",
    service: "Website design & code",
  },
  {
    title: "Coral Coalition",
    imagePath: CoralBackground,
    width: "555",
    height: "476",
    background:
      "bg-gradient-to-t from-rose-200 from-30% bg-gray-50 to-45% flex flex-col justify-end",
    padding: "pt-28",
    description: "Description about project",
    service: "Website design & code",
  },
  {
    title: "GOODBODI",
    imagePath: Goodbackground,
    width: "250",
    height: "251",
    background: "bg-gray-50",
    padding: "py-28",
    description: "Description about project",
    service: "Website design & code",
  },
];

export default function Home() {
  return (
    <main>
      <div className="container mx-auto mt-32" style={{ width: "fit-content" }}>
        <div className="grid-cols-1 lg:grid lg:grid-cols-2">
          {projects.map((project, index) => (
            <Block
              key={index}
              title={project.title}
              imagePath={project.imagePath}
              width={project.width}
              height={project.height}
              background={project.background}
              padding={project.padding}
              description={project.description}
              service={project.service}
            />
          ))}
        </div>
        <ModalBlock />
      </div>
    </main>
  );
}
