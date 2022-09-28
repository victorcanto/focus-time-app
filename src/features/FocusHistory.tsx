import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { colors, fontSizes, spacing } from '../theme';

interface FocusHistoryProps {
  history?: string[];
}

export const FocusHistory = ({ history }: FocusHistoryProps) => {
  if (!history || !history.length) return null;

  const renderItem = ({ item }: { item: string }) => (
    <Text style={styles.item}>- {item}</Text>
  );

  return (
    <View>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
  },
  item: {
    color: colors.white,
    fontSize: fontSizes.md,
    paddingTop: spacing.sm,
    paddingLeft: spacing.md,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    padding: spacing.md,
    fontWeight: 'bold',
  },
});
