import { useState } from "react";


export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => { //callback for useState
    const item = window.localStorage.getItem(key); //is there an existing key in localStorage?
    return item ? JSON.parse(item) : initialValue; //ternery if item : return item JSON string or initialValue
  });

  //dont use setStoredValue...use NEW setter function to create localStorage 
  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value)); // make data a JSON string
  };
  return [storedValue, setValue];
};