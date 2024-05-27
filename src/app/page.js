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
    width: "552px",
    height: "227px",
    background: "bg-gradient-to-t from-violet-300 from-30% bg-gray-50 to-45%",
    description: "Description about project",
    service: "Website design & code",
  },
  {
    title: "LOGICOM",
    imagePath: LogicomBackground,
    width: "46px",
    height: "46px",
    background: "bg-gradient-to-t from-stone-300 to-stone-100",
    description: "Description about project",
    service: "Website design & code",
  },
  {
    title: "Coral Coalition",
    imagePath: CoralBackground,
    width: "555px",
    height: "476px",
    background: "bg-fuchsia-50",
    description: "Description about project",
    service: "Website design & code",
  },
  {
    title: "GOODBODI",
    imagePath: Goodbackground,
    width: "50px",
    height: "50px",
    background: "bg-gray-50",
    description: "Description about project",
    service: "Website design & code",
  },
];

export default function Home() {
  return (
    <main>
      <div className="container mx-auto mt-32">
        {projects.map((project, index) => (
          <Block
            key={index}
            title={project.title}
            imagePath={project.imagePath}
            width={project.width}
            height={project.height}
            background={project.background}
            description={project.description}
            service={project.service}
          />
        ))}
        <ModalBlock />
      </div>
    </main>
  );
}
