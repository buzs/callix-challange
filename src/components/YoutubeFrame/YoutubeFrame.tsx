"use client";

import { Box, Heading, Flex } from "@chakra-ui/react";

export default function YoutubeEmbed({ embedId }: { embedId?: string | null }) {
  return (
    <div className="aspect-w-16 aspect-h-9 h-full">
      {embedId ? (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${embedId}`}
          frameBorder="0"
          allowFullScreen
          title="Embedded youtube"
        />
      ) : (
        <Box
          as={Flex}
          align="center"
          justify="center"
          w="100%"
          h="100%"
          className="bg-neutral-900"
        >
          <Heading size="sm">No video</Heading>
        </Box>
      )}
    </div>
  );
}
