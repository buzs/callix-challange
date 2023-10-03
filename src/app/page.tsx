import AnimatedNumber from "@/components/AnimatedNumber/AnimatedNumber";
import LaunchBox from "@/components/LaunchBox/LaunchBox";
import {
  getLastLaunch,
  getNextLaunch,
  getPastLaunches,
  getUpcomingLaunches,
} from "@/service/spacex";
import { Heading, Box, Flex, Skeleton } from "@chakra-ui/react";
import { Suspense } from "react";

import bg from "../../public/bg.png";

export default async function Home() {
  const [pastLaunches, upcomingLaunches, lastLaunch, nextLaunch] =
    await Promise.all([
      getPastLaunches(),
      getUpcomingLaunches(),
      getLastLaunch(),
      getNextLaunch(),
    ]);

  return (
    <Flex
      as="main"
      px="20px"
      pt="55px"
      align="flex-start"
      w="100%"
      justify="space-evenly"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "contain",
        backgroundPosition: "0 520px",
        backgroundRepeat: "no-repeat",
        height: "calc(100vh - 65px)",
      }}
    >
      <Flex as={Box} direction="column" gap="20" w="100%" px="45" maxW="lg">
        <Suspense fallback="Loading">
          <Box alignSelf="flex-start">
            <Heading size="lg" color="whiteAlpha.700" textTransform="uppercase">
              Past Launches
            </Heading>
            <Heading size="2xl" color="whiteAlpha.500" pl="18px">
              <AnimatedNumber number={pastLaunches?.length} />
            </Heading>
          </Box>
          <Box alignSelf="flex-end" textAlign="right">
            <Heading size="lg" color="whiteAlpha.700" textTransform="uppercase">
              Upcoming Launches
            </Heading>
            <Heading size="2xl" color="whiteAlpha.500" pr="18px">
              <AnimatedNumber number={upcomingLaunches?.length} />
            </Heading>
          </Box>
        </Suspense>
      </Flex>

      <Flex direction="column" gap="5">
        <Box>
          <Heading size="lg" textAlign="right" pb="4">
            Next Launch
          </Heading>
          {nextLaunch ? (
            <LaunchBox {...nextLaunch} badge={nextLaunch?.links.patch.small} />
          ) : (
            <Skeleton>
              <Box minW="sm" maxW="sm">
                ...
              </Box>
            </Skeleton>
          )}
        </Box>
        <Box>
          <Heading size="lg" textAlign="right" pb="4">
            Latest Launch
          </Heading>
          {lastLaunch ? (
            <LaunchBox {...lastLaunch} badge={lastLaunch?.links.patch.small} />
          ) : (
            <Skeleton>
              <Box minW="sm" maxW="sm">
                ...
              </Box>
            </Skeleton>
          )}
        </Box>
      </Flex>
    </Flex>
  );
}
