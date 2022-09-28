import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { colors } from '../theme';

interface RoundedButtonProps<T> {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  size?: number;
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

export const RoundedButton = <T extends unknown>({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}: RoundedButtonProps<T>) => {
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={props.onPress}>
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size: number) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: colors.white,
      borderWidth: 2,
    },
    text: { color: colors.white, fontSize: size / 3 },
  });
