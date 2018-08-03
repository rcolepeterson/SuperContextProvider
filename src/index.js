import "./style";
import { render, Component } from "preact";
import { createContext } from "preact-context";
import { AppProvider, AppConsumer } from "./AppProvider";
import Main from "./Main";
//onst AppContext = createContext();

class App extends Component {
  render() {
    return (
      <AppProvider>
        <Main />
      </AppProvider>
    );
  }
}

if (typeof window !== "undefined") {
  render(<App />, document.getElementById("root"));
}
