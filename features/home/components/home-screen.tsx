import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { NotesCard } from '@/features/grades/components/notes-card';
import { INVALID_NOTE_MESSAGE } from '@/features/grades/constants/messages';
import { useNotes } from '@/features/grades/hooks/use-notes';
import { LoginCard } from '@/features/session/components/login-card';
import { INVALID_PASSWORD_MESSAGE } from '@/features/session/constants/messages';
import { useLogin } from '@/features/session/hooks/use-login';
import { styles } from '@/features/home/styles';
import { InfoModal } from '@/features/shared/components/info-modal';

export function HomeScreen() {
  const {
    isLoggedIn,
    maskedPassword,
    showInvalidPasswordModal,
    handlePasswordKeyPress,
    handleLogin,
    closeInvalidPasswordModal,
    logout,
  } = useLogin();

  const {
    noteInput,
    notes,
    average,
    showInvalidNoteModal,
    setNoteInput,
    addNote,
    clearNotes,
    closeInvalidNoteModal,
  } = useNotes();

  const handleLogout = () => {
    clearNotes();
    logout();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {!isLoggedIn ? (
          <LoginCard
            maskedPassword={maskedPassword}
            onPasswordKeyPress={handlePasswordKeyPress}
            onLogin={handleLogin}
          />
        ) : (
          <NotesCard
            noteInput={noteInput}
            notes={notes}
            average={average}
            onNoteInputChange={setNoteInput}
            onAddNote={addNote}
            onClearNotes={clearNotes}
            onLogout={handleLogout}
          />
        )}
      </View>

      <InfoModal
        visible={showInvalidPasswordModal}
        text={INVALID_PASSWORD_MESSAGE}
        onClose={closeInvalidPasswordModal}
      />
      <InfoModal
        visible={showInvalidNoteModal}
        text={INVALID_NOTE_MESSAGE}
        onClose={closeInvalidNoteModal}
      />
    </SafeAreaView>
  );
}
