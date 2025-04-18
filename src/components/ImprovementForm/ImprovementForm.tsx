import {
  Alert,
  Button,
  Container,
  Field,
  Fieldset,
  Group,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { getAuth, signInAnonymously } from "@firebase/auth";
import * as Diff from "diff";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { getApp } from "../../libs/firebase";
import { ImproveResult } from "../../libs/type";

type ImprovementFormInputs = {
  text: string;
};

type ImprovementFormProps = {
  setResult: (arg0: ImproveResult) => void;
};

export const ImprovementForm = ({ setResult }: ImprovementFormProps) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ImprovementFormInputs>();

  const [loading, setLoading] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true);

      const auth = getAuth(getApp());
      if (!auth.currentUser) {
        await signInAnonymously(auth);
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/improve`,
        {
          method: "POST",
          headers: {
            Authorization: await auth.currentUser.getIdToken(),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: data.text }),
        },
      );

      const payload: { text: string } = await res.json();

      setResult({
        originalText: data.text,
        improvedText: payload.text,
        changes: Diff.diffWords(data.text, payload.text),
      });
    } catch (error) {
      setError("root", {
        message: error.message,
      });
    } finally {
      setLoading(false);
    }
  });

  return (
    <Container maxWidth="4xl">
      <form onSubmit={onSubmit}>
        <Fieldset.Root>
          <Fieldset.Content>
            <Stack gap="4">
              {errors.root !== undefined && (
                <Alert.Root status="error">
                  <Alert.Indicator />
                  <Alert.Content>
                    <Alert.Title>Oops! Something went wrong.</Alert.Title>
                    <Alert.Description>{errors.root.message}</Alert.Description>
                  </Alert.Content>
                </Alert.Root>
              )}

              <Field.Root invalid={!!errors.text}>
                <Field.Label>Original Text</Field.Label>
                <Textarea
                  name="text"
                  placeholder="Start typing..."
                  variant="subtle"
                  resize="none"
                  autoresize
                  minH="16lh"
                  maxH="16lh"
                  {...register("text")}
                />
                <Field.ErrorText>{errors.text?.message}</Field.ErrorText>
              </Field.Root>

              <Stack direction="column">
                <Group ml="auto">
                  <Stack gap={4}>
                    <Button type="submit" loading={loading}>
                      Improve
                    </Button>
                  </Stack>
                </Group>
              </Stack>
            </Stack>
          </Fieldset.Content>
        </Fieldset.Root>
      </form>
    </Container>
  );
};
