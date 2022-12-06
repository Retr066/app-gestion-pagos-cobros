import { Center, Heading, Spinner } from "native-base";

export const Loading = () => {
  return (
    <Center flex={1}>
      <Spinner accessibilityLabel="Loading posts" />
      <Heading color="whiteBlue" fontSize="md">
        Loading
      </Heading>
    </Center>
  );
};
