import { useState, useEffect } from "react";

/**
 * useLocalStorage hook
 * @param {string} key - the localStorage key
 * @param {any} initialValue - default value if nothing is stored
 */
const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage key:", key, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error writing localStorage key:", key, error);
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
