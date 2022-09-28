import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar as RNStatusBar,
} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Focus } from './src/features/Focus';
import { FocusHistory } from './src/features/FocusHistory';
import { Timer } from './src/features/Timer';
import { colors } from './src/theme';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  const onTimerEnd = (subject: string | null) => {
    setHistory([...history, subject as string]);
  };

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        {!currentSubject ? (
          <>
            <Focus addSubject={setCurrentSubject} />
            <FocusHistory history={history} />
          </>
        ) : (
          <Timer
            focusSubject={currentSubject}
            onTimerEnd={onTimerEnd}
            clearSubject={() => setCurrentSubject(null)}
          />
        )}
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
