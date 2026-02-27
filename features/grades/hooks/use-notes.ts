import { useMemo, useState } from 'react';

export function useNotes() {
  const [noteInput, setNoteInput] = useState('');
  const [notes, setNotes] = useState<string[]>([]);
  const [showInvalidNoteModal, setShowInvalidNoteModal] = useState(false);

  const average = useMemo(() => {
    if (notes.length === 0) {
      return '0.00';
    }

    const total = notes.reduce((acc, note) => acc + Number(note), 0);
    return (total / notes.length).toFixed(2);
  }, [notes]);

  const addNote = () => {
    const normalizedInput = noteInput.trim().replace(',', '.');

    if (!normalizedInput) {
      setShowInvalidNoteModal(true);
      return;
    }

    const parsedNote = Number(normalizedInput);
    if (Number.isNaN(parsedNote) || parsedNote < 0 || parsedNote > 5) {
      setShowInvalidNoteModal(true);
      return;
    }

    setNotes((prevNotes) => [...prevNotes, parsedNote.toFixed(2)]);
    setNoteInput('');
  };

  const clearNotes = () => {
    setNotes([]);
    setNoteInput('');
  };

  const closeInvalidNoteModal = () => setShowInvalidNoteModal(false);

  return {
    noteInput,
    notes,
    average,
    showInvalidNoteModal,
    setNoteInput,
    addNote,
    clearNotes,
    closeInvalidNoteModal,
  };
}
