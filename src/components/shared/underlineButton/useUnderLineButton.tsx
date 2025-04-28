import { useState } from 'react';

export function useUnderLineButton() {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };
  const handlePressOut = () => {
    setIsPressed(false);
  };

  return { isPressed, handlePressIn, handlePressOut };
}
