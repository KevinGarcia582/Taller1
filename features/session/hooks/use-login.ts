import { useState } from 'react';
import { TextInputKeyPressEventData } from 'react-native';

export function useLogin() {
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showInvalidPasswordModal, setShowInvalidPasswordModal] = useState(false);

  const maskedPassword = '*'.repeat(password.length);

  const handlePasswordKeyPress = ({ nativeEvent }: { nativeEvent: TextInputKeyPressEventData }) => {
    if (nativeEvent.key === 'Backspace') {
      setPassword((prev) => prev.slice(0, -1));
      return;
    }

    if (/^\d$/.test(nativeEvent.key)) {
      setPassword((prev) => prev + nativeEvent.key);
    }
  };

  //Ingeniero aquí esta la contraseña correcta

  const handleLogin = () => {
    if (password === '0000') {
      setIsLoggedIn(true);
      return;
    }

    setShowInvalidPasswordModal(true);
  };

  const closeInvalidPasswordModal = () => setShowInvalidPasswordModal(false);

  const logout = () => {
    setIsLoggedIn(false);
    setPassword('');
  };

  return {
    isLoggedIn,
    maskedPassword,
    showInvalidPasswordModal,
    handlePasswordKeyPress,
    handleLogin,
    closeInvalidPasswordModal,
    logout,
  };
}
