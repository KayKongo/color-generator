import { useState } from "react";

const Form = () => {
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //   #ffeeaa, #ac7aff

  const handleChange = (hex) => {
    setColor(hex);
  };

  return (
    <section className="container">
      <h4>Color Generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          name="color"
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f15025"
        />

        <button className="btn" style={{ background: color }} type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};
export default Form;
