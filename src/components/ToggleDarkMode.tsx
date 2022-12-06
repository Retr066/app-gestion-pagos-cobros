import { HStack, Switch, useColorMode } from "native-base";

export const ToggleDarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        offTrackColor="cyan.700"
        onTrackColor="orange.200"
        onThumbColor="customTertiary"
        offThumbColor="customQuaternary"
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
    </HStack>
  );
};
