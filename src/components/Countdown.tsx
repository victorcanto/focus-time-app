import React, { useState, useEffect, useRef } from 'react';
import { Text, StyleSheet } from 'react-native';

import { colors, fontSizes, spacing } from '../theme';

const minutesToMillis = (min: number): number => min * 1000 * 60;
const formatTime = (time: number): string | number =>
  time < 10 ? `0${time}` : time;

interface CountdownProps {
  minutes?: number;
  isPaused: boolean;
  onProgress: (value: number) => void;
  onEnd: (reset: () => void) => void;
}

export const Countdown = ({
  minutes = 0.1,
  isPaused,
  onProgress,
  onEnd,
}: CountdownProps) => {
  const interval = useRef<NodeJS.Timer | null>(null);

  const [millis, setMillis] = useState<number | null>(null);

  const resetMillis = () => setMillis(minutesToMillis(minutes));

  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        clearInterval(interval.current as NodeJS.Timer);
        onEnd(resetMillis);
        return time;
      }
      const timeLeft = (time as number) - 1000;
      return timeLeft;
    });
  };

  useEffect(() => {
    setMillis(minutesToMillis(minutes));
  }, [minutes]);

  useEffect(() => {
    if (millis) {
      onProgress(millis / minutesToMillis(minutes));
    }
  }, [millis]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }

    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current as NodeJS.Timer);
  }, [isPaused]);

  const minute = Math.floor((millis as number) / 1000 / 60) % 60;
  const seconds = Math.floor((millis as number) / 1000) % 60;

  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: 'bold',
    color: colors.white,
    padding: spacing.lg,
    backgroundColor: 'rgba(94, 132, 226, 0.3)',
  },
});
