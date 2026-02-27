import React from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';

import { styles } from '@/features/home/styles';
import { AppButton } from '@/features/shared/components/app-button';

type NotesCardProps = {
  noteInput: string;
  notes: string[];
  average: string;
  onNoteInputChange: (value: string) => void;
  onAddNote: () => void;
  onClearNotes: () => void;
  onLogout: () => void;
};

export function NotesCard({
  noteInput,
  notes,
  average,
  onNoteInputChange,
  onAddNote,
  onClearNotes,
  onLogout,
}: NotesCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Nota</Text>
      <Text style={styles.subtitle}>Registra cada nota con formato decimal</Text>

      <TextInput
        value={noteInput}
        onChangeText={onNoteInputChange}
        style={styles.input}
        placeholder="Ejemplo: 4.50"
        placeholderTextColor="#7a7f8f"
        keyboardType="default"
      />

      <AppButton title="Agregar nota" onPress={onAddNote} />

      <View style={styles.averageCard}>
        <Text style={styles.averageLabel}>Promedio total</Text>
        <Text style={styles.averageValue}>{average}</Text>
      </View>

      <Text style={styles.listTitle}>Listado de notas</Text>
      <FlatList
        data={notes}
        keyExtractor={(_, index) => `${index}`}
        renderItem={({ item, index }) => (
          <View style={styles.noteRow}>
            <Text style={styles.noteLabel}>nota_{index + 1}</Text>
            <Text style={styles.noteValue}>{item}</Text>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyCard}>
            <Text style={styles.empty}>Aun no hay notas registradas.</Text>
          </View>
        }
        style={styles.list}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.actionsRow}>
        <View style={styles.actionButton}>
          <AppButton title="Borrar" onPress={onClearNotes} variant="danger" />
        </View>
        <View style={styles.actionButton}>
          <AppButton title="Salir" onPress={onLogout} variant="secondary" />
        </View>
      </View>
    </View>
  );
}
