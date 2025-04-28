import { useEffect, useState } from 'react';

export const useDebouncedHandler = ({
  callback,
  delay = 300,
}: {
  callback: (text: string) => void;
  delay?: number;
}) => {
  const [text, setText] = useState('');

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
