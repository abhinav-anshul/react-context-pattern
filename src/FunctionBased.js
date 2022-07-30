import {
  useTheme,
  useThemeUpdate
} from "./ThemeContext";

function FunctionBased() {
  const darkTheme = useTheme();
  const handleToggle = useThemeUpdate();

  const themeStyle = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "333"
  };

  return (
    <>
      <button onClick={handleToggle}>
        Toggle Theme
      </button>
      <p style={themeStyle}>function based</p>
    </>
  );
}

export default FunctionBased;
