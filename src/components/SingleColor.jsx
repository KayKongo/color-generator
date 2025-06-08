import { useState } from "react";
import { toast } from "react-toastify";

const SingleColor = ({ index, color }) => {
  const { hex, weight } = color;

  const [highlightedText, setHighlightedTeset] = useState(
    "Masa! You no select anything oh... Shun Dey Fool"
  );

  const highlightText = () => {
    // Grab the selection
    const selection = window.getSelection();

    // Convert the selection to a string
    const selectedText = selection.toString();

    if (selectedText) {
      setHighlightedTeset(selectedText);
    }

    // input selection string into copy to clipboard function
    handleSelectToCopy(highlightedText);
  };

  // This function copies the highlight selection to the user's clipboard
  const handleSelectToCopy = async (selected) => {
    // Check to see if the clipboard is accessible by the client
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`${selected}`); // This function pushes the selected text into the clipboard
        toast.success("Color copied to clipboard!");
      } catch (error) {
        toast.error("Failed to copy to clipboard");
      }
    } else {
      toast.error("Clipboard not accessible!");
    }
    setIsSelected(false);
  };

  // This function copies the hexadecimal color code to the user's clipboard when they click on a tint/shade variant
  const handleClickToCopy = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Color copied to clipboard!");
      } catch (error) {
        toast.error("Failed to copy to clipboard");
      }
    } else {
      toast.error("Clipboard not accessible!");
    }
    setIsClicked(false);
  };

  return (
    <article
      className={index >= 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
      // For highlighting to copy to clipboard
      onMouseUp={highlightText}
      // For clicking to copy to clipboard
      onClick={handleClickToCopy}
    >
      <p className="percent-value">{weight == 0 ? `Base` : `${weight}%`}</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};
export default SingleColor;
