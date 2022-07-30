import FunctionBased from "./FunctionBased";
import ThemeProvider from "./ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <FunctionBased />
    </ThemeProvider>
  );
}
