import React, { SetStateAction } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';

interface TimingProps {
  onChangeTime: React.Dispatch<React.SetStateAction<number>>;
}

export const Timing = ({ onChangeTime }: TimingProps) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title='10' onPress={() => onChangeTime(10)} />
      </View>

      <View style={styles.timingButton}>
        <RoundedButton size={75} title='15' onPress={() => onChangeTime(15)} />
      </View>

      <View style={styles.timingButton}>
        <RoundedButton size={75} title='20' onPress={() => onChangeTime(20)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});
