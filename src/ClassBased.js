import React from "react";
import { ThemeContext } from "./App";

class ClassBased extends React.Component {
  themeStyles(dark) {
    return {
      backgroundColor: dark ? "#333" : "#CCC",
      color: dark ? "pink" : "333"
    };
  }
  render() {
    return (
      <ThemeContext.Consumer>
        {(darkTheme) => {
          return (
            <>
              <div style={this.themeStyles(darkTheme)}>Class Based</div>
            </>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default ClassBased;
