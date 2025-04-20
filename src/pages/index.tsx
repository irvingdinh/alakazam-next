import { Flex, Stack } from "@chakra-ui/react";
import Head from "next/head";
import { Fragment, useState } from "react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ImprovementForm } from "../components/ImprovementForm";
import { ImprovementResult } from "../components/ImprovementResult";
import { ImproveResult } from "../libs/type";

export default function Page() {
  const [result, setResult] = useState<ImproveResult>(undefined);

  const onClear = () => {
    setResult(undefined);
  };

  return (
    <Fragment>
      <Head>
        <title>Edita: AI Writing Assistant</title>
      </Head>

      <Stack gap="4" minHeight="100vh">
        <Header />

        <Flex flex="1" alignItems={{ md: "center" }}>
          {result === undefined ? (
            <ImprovementForm setResult={setResult} />
          ) : (
            <ImprovementResult result={result} onClear={onClear} />
          )}
        </Flex>

        <Footer />
      </Stack>
    </Fragment>
  );
}
