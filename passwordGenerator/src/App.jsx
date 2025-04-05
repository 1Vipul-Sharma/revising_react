import { useState, useEffect, useCallback } from 'react';
import './App.css';

function App() {
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(12);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSpecial, setIncludeSpecial] = useState(false);

    // ✅ useCallback: Memoize the function
    const generatePassword = useCallback(() => {
        let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (includeNumbers) chars += "0123456789";
        if (includeSpecial) chars += "!@#$%^&*()_+[]{}|;:,.<>?/";

        let newPassword = "";
        for (let i = 0; i < length; i++) {
            newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        setPassword(newPassword);
    }, [length, includeNumbers, includeSpecial]); // 🔥 Only re-create when inputs change

    // 🔁 Auto-generate when options change
    useEffect(() => {
        generatePassword(); // ✅ This won’t trigger unnecessarily now
    }, [generatePassword]);

    const copyPassword = () => {
        navigator.clipboard.writeText(password);
        alert("Password copied!");
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
            <h2 className="text-xl font-bold mb-4">Password Generator</h2>

            <div className="flex items-center border rounded-lg overflow-hidden mb-4">
                <input 
                    type="text" 
                    value={password} 
                    className="flex-grow p-2 outline-none" 
                    readOnly
                />
                <button onClick={copyPassword} className="bg-blue-500 text-white px-4 py-2">Copy</button>
            </div>

            <label className="block mb-2">Password Length: {length}</label>
            <input 
              type="range" 
              min="6" 
              max="20" 
              value={length} 
              className="w-full mb-4" 
              onChange={(e) => setLength(Number(e.target.value))}
            />

            <div className="flex justify-between mb-4">
                <label className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      checked={includeNumbers} 
                      onChange={() => setIncludeNumbers(!includeNumbers)} 
                      className="mr-2"
                    /> Include Numbers
                </label>
                <label className="flex items-center space-x-2">
                    <input 
                        type="checkbox" 
                        checked={includeSpecial} 
                        onChange={() => setIncludeSpecial(!includeSpecial)} 
                        className="mr-2"
                    /> Include Special Characters
                </label>
            </div>
        </div>
    );
}

export default App;
