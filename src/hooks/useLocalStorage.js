import { useState, useEffect } from 'react';

function useLocalStorage(key, defaultValue = []) {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorage;
