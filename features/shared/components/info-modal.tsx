import React from 'react';
import { Modal, Pressable, Text, View } from 'react-native';

import { styles } from '@/features/home/styles';

type InfoModalProps = {
  visible: boolean;
  text: string;
  onClose: () => void;
};

export function InfoModal({ visible, text, onClose }: InfoModalProps) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.modalBackdrop}>
        <View style={styles.modalCard}>
          <Text style={styles.modalText}>{text}</Text>
          <Pressable style={styles.modalButton} onPress={onClose}>
            <Text style={styles.modalButtonText}>Aceptar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
