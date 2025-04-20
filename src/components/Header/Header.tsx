import {
  Badge,
  Container,
  Flex,
  Group,
  Heading,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";

export const Header = () => {
  return (
    <Flex alignItems="center" height="16">
      <Container>
        <Stack direction="row">
          <Group>
            <Link href="/">
              <Heading>Edita</Heading>
            </Link>

            <Badge>PREVIEW</Badge>
          </Group>
        </Stack>
      </Container>
    </Flex>
  );
};
