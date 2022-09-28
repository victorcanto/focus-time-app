import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import { colors, spacing } from '../theme';

interface FocusProps {
  addSubject: React.Dispatch<React.SetStateAction<string | null>>;
}

export const Focus = ({ addSubject }: FocusProps) => {
  const [subject, setSubject] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label='What would you like to focus on?'
        />
        <View style={styles.button}>
          <RoundedButton
            title='+'
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  button: {
    justifyContent: 'center',
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  text: {
    color: colors.white,
  },
});
