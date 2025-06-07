import { useState } from "react";

const Form = () => {
  const [color, setColor] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //   #ffeeaa, #ac7aff

  const handleChange = (hex) => {
    setColor(hex);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", maxWidth: "8rem" }}
      >
        <div>
          <label htmlFor="color">Color</label>
          <input
            type="text"
            name="color"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div
        style={{
          width: "5rem",
          height: "5rem",
          backgroundColor: `${color}`,
          margin: "2rem 0",
          border: "solid 1px",
        }}
      ></div>
    </div>
  );
};
export default Form;
