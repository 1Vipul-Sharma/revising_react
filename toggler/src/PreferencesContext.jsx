import { useEffect, useState, createContext } from 'react';

export const PreferencesContext = createContext();

export const PreferencesProvider = ({ children }) => {
  const [values, setValues] = useState({
    theme: 'light',
    fontSize: 'md',
    language: 'en'
  });

  // Load preferences from localStorage on first mount
  useEffect(() => {
    const stored = localStorage.getItem('user-preferences');
    if (stored) {
      setValues(JSON.parse(stored));
    }
  }, []);

  // Save preferences to localStorage whenever values change
  useEffect(() => {
    localStorage.setItem('user-preferences', JSON.stringify(values));
  }, [values]);

  return (
    <PreferencesContext.Provider value={{ values, setValues }}>
      {children}
    </PreferencesContext.Provider>
  );
};
