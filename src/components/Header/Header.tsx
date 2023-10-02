"use client";

import { useExperiment } from "@/hooks/Experiment";
import { Link } from "@chakra-ui/next-js";
import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const variant = useExperiment("KNWAnsYWTGCaEOYfOSEg2A"); // Menu Style (Uppercase or not)

  return (
    <header>
      <Flex as="nav" justify="space-between" align="center" py="5" px="10">
        <Link href="/">
          <Image
            src="/spacex_logo.svg"
            alt="SpaceX Logo"
            className="dark:invert"
            width={200}
            height={24}
            priority
          />
        </Link>

        <Flex
          fontSize="sm"
          gap="5"
          className={variant === "1" ? "uppercase" : "normal-case"}
        >
          <Link href="/" className={pathname === "/" ? "font-bold" : ""}>
            Home
          </Link>
          <Link
            href="/launches/past"
            className={pathname === "/launches/past" ? "font-bold" : ""}
          >
            Past Launches
          </Link>
          <Link
            href="/launches/upcoming"
            className={pathname === "/launches/upcoming" ? "font-bold" : ""}
          >
            Upcoming Launches
          </Link>
        </Flex>
      </Flex>
    </header>
  );
}
