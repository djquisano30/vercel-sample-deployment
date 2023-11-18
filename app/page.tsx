"use client";
import { Button } from "@nextui-org/button";
import { title } from "@/components/primitives";
import { useState } from "react";

export default function Home() {
  const [clickCount, setClickCount] = useState(0);
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>The button has been clicked&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>{clickCount}&nbsp;</h1>
        <br />
        <h1 className={title()}>times</h1>
      </div>
      <Button
        size="lg"
        color="primary"
        onClick={() => {
          setClickCount(clickCount + 1);
        }}
      >
        Click Me
      </Button>
    </section>
  );
}
