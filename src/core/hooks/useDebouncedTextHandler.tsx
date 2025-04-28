import { useEffect, useState } from 'react';

export const useDebouncedHandler = ({
  callback,
  delay = 300,
  initialText = '',
}: {
  callback: (text: string) => void;
  delay?: number;
  initialText?: string;
}) => {
  const [text, setText] = useState(initialText);

  useEffect(() => {
    const handler = setTimeout(() => {
      callback(text);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [text, callback, delay]);

  return setText;
};
