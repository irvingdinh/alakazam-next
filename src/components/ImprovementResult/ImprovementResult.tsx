import {
  Box,
  Button,
  Clipboard,
  Container,
  Mark,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Fragment } from "react";

import { useColorModeValue } from "../../libs/color-mode";
import { ImproveResult } from "../../libs/type";

type ImprovementResultProps = {
  result: ImproveResult;
  onClear: () => void;
};

export const ImprovementResult = ({
  result,
  onClear,
}: ImprovementResultProps) => {
  const addedHighlightColor = useColorModeValue("green.200", "green.800");
  const addedBgColor = useColorModeValue("green.50", "green.950");
  const removedHighlightColor = useColorModeValue("red.200", "red.800");
  const removedBgColor = useColorModeValue("red.50", "red.950");

  return (
    <Container>
      <Stack gap={4}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} width="100%">
          <Stack display={["none", "none", "block"]}>
            <HighlightedTextRenderer
              changes={result.changes}
              highlightType="removed"
              highlightColor={removedHighlightColor}
              bgColor={removedBgColor}
            />
          </Stack>

          <Stack gap={4}>
            <HighlightedTextRenderer
              changes={result.changes}
              highlightType="added"
              highlightColor={addedHighlightColor}
              bgColor={addedBgColor}
            />
          </Stack>
        </SimpleGrid>

        <Stack direction="row" justify="flex-end">
          <Button variant="ghost" onClick={onClear}>
            Clear
          </Button>

          <Clipboard.Root value={result.improvedText} timeout={5000}>
            <Clipboard.Trigger asChild>
              <Button variant="subtle">
                <Clipboard.Indicator aria-live="polite" />
                <Clipboard.CopyText />
              </Button>
            </Clipboard.Trigger>
          </Clipboard.Root>
        </Stack>
      </Stack>
    </Container>
  );
};

type HighlightedTextRendererProps = {
  changes: ImproveResult["changes"];
  highlightType: "added" | "removed";
  highlightColor: string;
  bgColor: string;
};

const HighlightedTextRenderer = ({
  changes,
  highlightType,
  highlightColor,
  bgColor,
}: HighlightedTextRendererProps) => {
  return (
    <Box bg={bgColor} rounded="md" p={4} height="100%">
      {changes.map((change, index) => {
        if (
          (highlightType === "added" && change.removed) ||
          (highlightType === "removed" && change.added)
        ) {
          return null;
        }

        const content = renderTextWithLineBreaks(change.value);

        if (
          (highlightType === "added" && change.added) ||
          (highlightType === "removed" && change.removed)
        ) {
          return (
            <Mark as="span" key={index} bg={highlightColor}>
              {content}
            </Mark>
          );
        }

        return (
          <Text as="span" key={index}>
            {content}
          </Text>
        );
      })}
    </Box>
  );
};

const renderTextWithLineBreaks = (text: string) => {
  return text.split("\n").map((line, i, arr) => (
    <Fragment key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </Fragment>
  ));
};
