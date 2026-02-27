import React from 'react';
import { Text, TextInput, View } from 'react-native';

import { styles } from '@/features/home/styles';
import { AppButton } from '@/features/shared/components/app-button';

type LoginCardProps = {
  maskedPassword: string;
  onPasswordKeyPress: (event: { nativeEvent: { key: string } }) => void;
  onLogin: () => void;
};

export function LoginCard({ maskedPassword, onPasswordKeyPress, onLogin }: LoginCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Clave</Text>
      <Text style={styles.subtitle}>Ingresa tu clave para continuar</Text>
      <TextInput
        value={maskedPassword}
        onKeyPress={onPasswordKeyPress}
        style={styles.input}
        placeholder="Ingresa la contraseña"
        placeholderTextColor="#7a7f8f"
        keyboardType="number-pad"
        contextMenuHidden
      />
      <AppButton title="Ingresar" onPress={onLogin} />
    </View>
  );
}
