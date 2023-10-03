"use client";

import CountUp from "react-countup";

export default function AnimatedNumber({ number }: { number: number }) {
  return <CountUp end={number} />;
}
