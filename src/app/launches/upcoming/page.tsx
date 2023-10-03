import { getUpcomingLaunches } from "@/service/spacex";
import { Flex } from "@chakra-ui/react";

import LaunchBox from "@/components/LaunchBox/LaunchBox";

export default async function Upcoming() {
  const launches = await getUpcomingLaunches();

  return (
    <main>
      <Flex gap="4" p="8" wrap="wrap" justify="space-between">
        {launches.map((launch) => (
          <LaunchBox
            key={launch.id}
            {...launch}
            badge={launch.links.patch.small}
          />
        ))}
      </Flex>
    </main>
  );
}
