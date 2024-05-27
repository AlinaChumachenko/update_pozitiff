"use client";
import { useParams } from "next/navigation";

const projects = {
  logicom: {
    title: "LOGIKOM",
  },
  goodbodi: {
    title: "GOODBODI",
  },
  coral: {
    title: "CoralCoalition",
  },
  vocalip: {
    title: "VOCALIP",
  },
};

export default function About() {
  const params = useParams();
  const { slug } = params;
  console.log(slug);

  return (
    <main>
      <h1>{projects[slug].title}</h1>
    </main>
  );
}
