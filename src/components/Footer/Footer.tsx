import { Center, Container, Flex, Group, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

export const Footer = () => {
  return (
    <Flex alignItems="center" height="16">
      <Container>
        <Center>
          <Stack alignItems="center">
            <Group>
              <Link href="/privacy-policy">
                <Text textStyle="xs">Privacy Policy</Text>
              </Link>
            </Group>

            <Group>
              <Link href="https://linkedin.com/in/irvingdinh" target="_blank">
                <Text textStyle="xs">Built with ♥ by Irving Dinh.</Text>
              </Link>
            </Group>
          </Stack>
        </Center>
      </Container>
    </Flex>
  );
};
