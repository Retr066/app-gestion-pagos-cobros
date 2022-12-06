import { Avatar, Box, Divider, HStack, Text, VStack } from "native-base";

export const HomeScreen = () => {
  return (
    <Box
      style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
    >
      <Box borderWidth={1} borderRadius="md">
        <VStack space="4" divider={<Divider />}>
          <HStack alignItems="center" px="4" pt="4" space={2}>
            <Avatar
              size={10}
              bg="lightBlue.400"
              source={{
                uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
              }}
            >
              TS
            </Avatar>
            <Text>
              Hola, <Text bold={true}>Jherson Lopez Perez</Text>
            </Text>
          </HStack>
          <Box px="4">
            Aca podras revisar los ultimos pagos que se hacen diariamente y
            podras consultar cualquier incoveniente que pueda tener tu cuenta.
          </Box>
          <Box px="4" pb="4">
            Ver detalles de mis pagos
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};
