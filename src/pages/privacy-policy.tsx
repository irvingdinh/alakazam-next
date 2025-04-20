import {
  Box,
  Container,
  Flex,
  Heading,
  List,
  Stack,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import { Fragment } from "react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function Page() {
  return (
    <Fragment>
      <Head>
        <title>Privacy Policy - Edita: AI Writing Assistant</title>
      </Head>

      <Stack gap="8" minHeight="100vh">
        <Header />

        <Flex flex="1">
          <Container maxWidth="4xl">
            <Stack>
              <Heading as="h1" size="5xl" fontWeight="bold">
                Privacy Policy
              </Heading>

              <Text textStyle="sm">Last updated at Apr 20th, 2025.</Text>
            </Stack>

            <Stack gap="2" mt="8">
              <Text>
                I made this tool to help myself and others write better. I want
                to be clear about your privacy when you use it:
              </Text>

              <Box pl="4">
                <List.Root my="2">
                  <List.Item>
                    The tool <strong>DOES NOT</strong> save the text you provide
                    it for improvement.
                  </List.Item>

                  <List.Item mt="2">
                    You will be assigned a temporary anonymous ID to prevent
                    spamming. This ID <strong>DOES NOT</strong> link to your
                    identity.
                  </List.Item>

                  <List.Item mt="2">
                    I use Google&#39;s Gemini API (paid tier) to improve your
                    text. Google states they <strong>DO NOT</strong> use your
                    text for AI training or retain it long-term.
                  </List.Item>
                </List.Root>
              </Box>

              <Text>
                This tool remains a personal project and is under heavy
                development. I&#39;ve aimed for clarity in this policy regarding
                the current handling of data. Given the evolving nature of this
                project, please use it with consideration for your own privacy.
              </Text>
            </Stack>
          </Container>
        </Flex>

        <Footer />
      </Stack>
    </Fragment>
  );
}
