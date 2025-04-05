import React from "react";
import { Appbar } from "react-native-paper";
import { useNavigation } from "expo-router";

type HeaderProps = {
  title: string;
  showBackButton?: boolean;
};

export default function Header({ title, showBackButton = false }: HeaderProps) {
  const navigation = useNavigation();

  return (
    <Appbar.Header>
      {showBackButton && (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      )}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}
