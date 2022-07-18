import { useState, useEffect } from "react";

export function useLocalStorage(key, defaultValue) {
  const [message, setMessage] = useState(defaultValue);
  // 每次更新message， 自动同步到localStorage
  useEffect(() => {
    window.localStorage.setItem(key, message);
  }, [message, key]);
  return [message, setMessage];
}
