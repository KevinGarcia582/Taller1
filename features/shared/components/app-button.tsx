import React from 'react';
import { Pressable, Text } from 'react-native';

import { styles } from '@/features/home/styles';

type AppButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
};

export function AppButton({ title, onPress, variant = 'primary' }: AppButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.buttonBase, styles[`${variant}Button`], pressed && styles.buttonPressed]}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}
