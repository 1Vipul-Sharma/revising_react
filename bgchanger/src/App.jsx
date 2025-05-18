import { useState, useEffect } from "react";

function App() {
  const [color, setColor] = useState("");

  // Update the background color when 'color' changes
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h3 className="text-xl font-semibold mb-3">Select a Color:</h3>
      <select
        id="colorPicker"
        className="p-0.5 border rounded-md"
        onChange={(e) => setColor(e.target.value)} // React event handler
      >
        <option value="">Choose a color</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="purple">Purple</option>
        <option value="black">Black</option>
        <option value="white">White</option>
      </select>
    </div>
  );
}

export default App;


//Dropdown select nd then options tag in html
