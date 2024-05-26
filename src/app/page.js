"use client";

import { VocalipBlock } from "@/components/Block/VocalipBlock.js";
import { LogicomBlock } from "@/components/Block/LogicomBlock.js";
import { CoralBlock } from "@/components/Block/CoralBlock.js";
import { GoodbodiBlock } from "@/components/Block/GoodbodiBlock.js";
import { ModalBlock } from "@/components/Block/ModalBlock.js";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto mt-32">
        <div className="grid-cols-1 lg:grid lg:grid-cols-2">
          <VocalipBlock />
          <LogicomBlock />
          <CoralBlock />
          <GoodbodiBlock />
        </div>
        <ModalBlock />
      </div>
    </main>
  );
}
