import React, { useRef, useState } from "react";
import { Appbar } from "react-native-paper";
import { useNavigation } from "expo-router";
import { Image, StyleSheet, View, Animated, TextInput } from "react-native";

type HeaderProps = {
  showBackButton?: boolean;
  showSearch?: boolean;
  searchText?: string;
  handleSearch?: (term: string) => void;
};

export default function Header({
  showBackButton = false,
  showSearch = false,

  handleSearch,
}: HeaderProps) {
  const navigation = useNavigation();
  const [isSearching, setIsSearching] = useState(false);

  const animation = useRef(new Animated.Value(0)).current;
  const toggleSearch = () => {
    if (isSearching) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => setIsSearching(false));
    } else {
      setIsSearching(true);
      Animated.timing(animation, {
        toValue: 55,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <>
      <Appbar.Header style={[styles.header]}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {showBackButton && (
            <Appbar.BackAction
              onPress={() => navigation.goBack()}
              color="#ffffff"
            />
          )}
          <Image
            source={require("../../assets/images/logo.webp")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
      </Appbar.Header>
      {isSearching && (
        <Animated.View
          style={[styles.animatedContainer, { height: animation }]}
        >
          <View style={[styles.inputContainer]}>
            <TextInput
              placeholder="Search..."
              autoFocus
              onChangeText={handleSearch}
              style={styles.searchInput}
              onBlur={toggleSearch}
            />
          </View>
        </Animated.View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#2c2d3f",
    height: 70,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  expandedHeader: {
    height: 120,
  },
  searchIconContainer: {
    paddingTop: 10,
  },
  animatedContainer: {
    backgroundColor: "#2c2d3f",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    height: 40,
    width: "90%",
    justifyContent: "center",
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    height: 40,
    paddingHorizontal: 10,
  },
  logo: {
    width: 200,
    height: 70,
    marginRight: 10,
  },
});
