"use client";
import Image from "next/image";
import { ModalBlock } from "@/components/Block/ModalBlock.js";
import Block from "@/components/Block/Block.js";
import VocalipBackground from "@/images/ill_hero.png";
import LogicomBackground from "@/images/group.png";
import CoralBackground from "@/images/coral.png";
import Goodbackground from "@/images/asset.png";

const projects = [
  {
    title: "VOCALIP",
    imagePath: VocalipBackground,
    width: "555px",
    height: "256px",
    description: "Description about project",
    service: "Website design & code",
  },
  {
    title: "LOGICOM",
    imagePath: LogicomBackground,
    width: "267px",
    height: "215px",
    description: "Description about project",
    service: "Website design & code",
  },
  {
    title: "Coral Coalition",
    imagePath: CoralBackground,
    width: "555px",
    height: "476px",
    description: "Description about project",
    service: "Website design & code",
  },
  {
    title: "GOODBODI",
    imagePath: Goodbackground,
    width: "250px",
    height: "250px",
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
            description={project.description}
            service={project.service}
          />
        ))}
        <ModalBlock />
      </div>
    </main>
  );
}
