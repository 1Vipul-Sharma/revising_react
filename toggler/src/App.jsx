import { useContext } from 'react';
import { PreferencesContext } from './PreferencesContext';
import './style.css'
function App() {
  const { values, setValues } = useContext(PreferencesContext);
  // console.log(values);

  const handleTheme = () => {
    setValues(prev => ({
      ...prev,
      theme: prev.theme === 'light' ? 'dark' : 'light'
    }));
  };
  const handleSize = (e) => {
    setValues(prev => ({
      ...prev,
      fontSize: e.target.value
    }));
  };
  const handleLanguage = (e) => {
    setValues(prev => ({
      ...prev,
      language: e.target.value
    }));
  };
  
  const themeClass = values.theme === 'dark' ? 'dark-theme' : 'light-theme';

  // font size class mapping
  const fontClass = {
    sm: 'font-small',
    md: 'font-md',
    lg: 'font-large',
  }[values.fontSize] || 'font-md';

  // Language greetings
  const greetings = {
    en: 'Hello!',
    hi: 'नमस्ते!',
    es: '¡Hola!',
  }[values.language] || 'hi';

  console.log(themeClass,fontClass,greetings)
  return (
    <>
      <div className={`${themeClass} ${fontClass}`} style={{ minHeight: '20vh', padding: '20px' }}>
        <h1>{greetings}</h1>
        <p>This app uses your preferences for theme, font size, and language.</p>
      </div>
      <button onClick={handleTheme}>Toggle Theme</button>
      <br />
      <label htmlFor="size">Choose Size:</label>
      <select id="size" value={values.fontSize} onChange={handleSize}>
        <option value="sm">Small</option>
        <option value="md">Medium</option>
        <option value="lg">Large</option>
      </select>
      <br />
      <label htmlFor="language">Choose Language:</label>
      <select id="language" value={values.language} onChange={handleLanguage}>
      <option value="en">English</option>
      <option value="es">Germany</option>
      <option value="hi">Hindi</option>
      </select>
    </>
  );
}

export default App;
