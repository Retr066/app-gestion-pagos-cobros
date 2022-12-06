import { Animated, FlatList, ViewToken, StyleSheet, View } from "react-native";
import React, { useRef, useState } from "react";
import { carruselData } from "../data";
import { CarruselItem } from "./CarruselItem";
import { Box } from "native-base";
import { Paginator } from "./Paginator";
import { NextButton } from "./NextButton";
import { useNavigation } from "@react-navigation/native";
import { RootStackScreenProps } from "../../../interfaces/routes.interface";

export const Carrusel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const slidesRef = useRef<FlatList>(null);
  const navigation =
    useNavigation<RootStackScreenProps<"Presentation">["navigation"]>();

  const scrollX = useRef(new Animated.Value(0)).current;
  const viewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
      setCurrentIndex(viewableItems[0].index ?? 0);
    }
  ).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const scrollTo = () => {
    if (currentIndex < carruselData.length - 1) {
      slidesRef.current?.scrollToIndex({
        index: currentIndex + 1,
      });
    } else {
      //mover a Home screen y limpiar el stack
      navigation.navigate("Welcome");
      // navigation.reset({
      //   index: 0,
      //   routes: [{ name: "Welcome" }],
      // });
    }
  };

  return (
    <Box
      _dark={{
        backgroundColor: "customPrimary",
        color: "white",
      }}
      _light={{
        backgroundColor: "white",
      }}
      style={styles.container}
    >
      <View style={{ flex: 3 }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal={true}
          bounces={false}
          keyExtractor={(item) => item.id.toString()}
          data={carruselData}
          renderItem={({ item }) => <CarruselItem key={item.id} {...item} />}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <Paginator data={carruselData} scrollX={scrollX} />
      <NextButton
        scrollTo={scrollTo}
        percentage={(currentIndex + 1) * (100 / carruselData.length)}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
