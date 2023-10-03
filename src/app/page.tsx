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
      px="20"
      pt="45px"
      align="center"
      w="100%"
      justify="space-evenly"
    >
      <Flex
        as={Box}
        align="center"
        direction="column"
        gap="20"
        w="100%"
        px="45"
        maxW="lg"
      >
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
