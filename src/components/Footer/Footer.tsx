import { Center, Container, Flex, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

export const Footer = () => {
  return (
    <Flex alignItems="center" height="16">
      <Container>
        <Center>
          <Stack>
            <Link href="https://linkedin.com/in/irvingdinh" target="_blank">
              <Text textStyle="xs">Built with ♥ by Irving Dinh.</Text>
            </Link>
          </Stack>
        </Center>
      </Container>
    </Flex>
  );
};
