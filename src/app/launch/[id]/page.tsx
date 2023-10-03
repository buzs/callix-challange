import { Suspense } from "react";
import {
  AbsoluteCenter,
  Badge,
  Box,
  Divider,
  Flex,
  Heading,
  Link,
  Spacer,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

// import { ExternalLinkIcon } from "@chakra-ui/icons";
import { getLaunchById } from "@/service/spacex";
import { Metadata } from "next";
import YoutubeEmbed from "@/components/YoutubeFrame/YoutubeFrame";

import dayjs from "dayjs";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const launch = await getLaunchById(params.id);

  return {
    title: launch.name,
  };
}
export default async function Launch({ params }: { params: { id: string } }) {
  const launch = await getLaunchById(params.id);

  return (
    <main className="h-full pt-10">
      <Suspense fallback={<div>Loading...</div>}>
        <Flex minH="md" justify="space-between">
          <Stack maxW="sm" minW="sm" px="8" spacing={3}>
            <Heading>{launch.name}</Heading>
            <Text fontSize="xs">
              {dayjs(launch.date_utc).format("DD MMMM YYYY HH:mm")}
            </Text>
            <Stack direction="row" align="center">
              {!launch.success && !launch.upcoming && (
                <Badge colorScheme="red">Failed</Badge>
              )}
              {launch.fairings?.reused && (
                <Badge colorScheme="purple">Reused</Badge>
              )}
              {launch.fairings?.recovered && (
                <Badge colorScheme="green">Recovered</Badge>
              )}
            </Stack>
            <Text as="p">{launch.details || "No Details"}</Text>
            <Divider />
            <Stack direction="row" align="center">
              <Stat>
                <StatLabel>Flight Number</StatLabel>
                <StatNumber>{launch.flight_number}</StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Cores</StatLabel>
                <StatNumber>{launch.cores.length}</StatNumber>
              </Stat>
              {launch.crew.length > 0 && (
                <Stat>
                  <StatLabel>Crew Size</StatLabel>
                  <StatNumber>{launch.crew.length}</StatNumber>
                </Stat>
              )}
            </Stack>
          </Stack>
          {/* <Spacer /> */}
          <Box flex="1" px="4" maxW="960px">
            <Box h="100%">
              <YoutubeEmbed embedId={launch.links.youtube_id} />
            </Box>
          </Box>
        </Flex>
        <Divider py="2" />

        <Box position="relative" h="60px">
          <AbsoluteCenter axis="both">
            <Stack direction="row" align="center">
              {launch.links.wikipedia && (
                <Link href={launch.links.wikipedia} isExternal>
                  Wikipedia
                </Link>
              )}
              {launch.links.presskit && (
                <Link href={launch.links.presskit} isExternal>
                  Presskit
                </Link>
              )}
              {launch.links.article && (
                <Link href={launch.links.article} isExternal>
                  Article
                </Link>
              )}
              {launch.links.reddit.campaign && (
                <Link href={launch.links.reddit.campaign} isExternal>
                  Reddit Campaign
                </Link>
              )}
              {launch.links.reddit.launch && (
                <Link href={launch.links.reddit.launch} isExternal>
                  Reddit Launch
                </Link>
              )}
              {launch.links.reddit.media && (
                <Link href={launch.links.reddit.media} isExternal>
                  Reddit Media
                </Link>
              )}
              {launch.links.reddit.recovery && (
                <Link href={launch.links.reddit.recovery} isExternal>
                  Reddit Recovery
                </Link>
              )}
            </Stack>
          </AbsoluteCenter>
        </Box>
      </Suspense>
    </main>
  );
}
