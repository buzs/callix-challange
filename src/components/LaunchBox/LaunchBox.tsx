"use client";

import {
  LinkBox,
  Box,
  Heading,
  LinkOverlay,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";

import NextLink from "next/link";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function LaunchBox({
  id,
  name,
  details,
  date_utc,
  badge,
}: {
  id: string;
  name: string;
  details: string;
  date_utc: string;
  badge: string;
}) {
  return (
    <LinkBox
      role="launch-box"
      key={id}
      as={Flex}
      gap="4"
      minW="sm"
      maxW="sm"
      p="5"
      align="center"
      borderWidth="1px"
      rounded="md"
    >
      <Box w="100px">
        <Image
          boxSize="100px"
          fallbackSrc="https://via.placeholder.com/100"
          src={badge}
          alt={`Mission Badge`}
        />
      </Box>
      <Box flex="1">
        <Box as="time" dateTime={date_utc}>
          {dayjs(date_utc).fromNow()}
        </Box>
        <Heading size="sm" my="2">
          <LinkOverlay as={NextLink} href={`/launch/${id}`}>
            {name}
          </LinkOverlay>
        </Heading>
        <Box>
          <Text noOfLines={2}>{details}</Text>
        </Box>
      </Box>
    </LinkBox>
  );
}
