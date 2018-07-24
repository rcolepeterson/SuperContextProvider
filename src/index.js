import "./style";
import { render, Component } from "preact";
import { AppProvider, AppConsumer } from "./AppProvider";
import Main from "./Main";

const fakeData = {
  title: "LOADING ..."
};

const initialState = {
  isCole: true,
  view: "frontpage",
  tilelist: [fakeData, fakeData, fakeData, fakeData],
  articleDetail: {},
  data: {}
};
const App = class extends Component {
  constructor(props) {
    super(props);
    this.toggleTheme = () => {
      console.log("ok3");
      this.setState(state => ({
        medata: "cole"
      }));
    };
    initialState.fetchIt = this.toggleTheme;
    this.state = initialState;
  }

  render() {
    return (
      <AppProvider
        value={{
          state: this.state,
          updateInitialData: this.updateInitialData
        }}
        initialState={this.state}
      >
        <Main data={this.props} />
      </AppProvider>
    );
  }
};

if (typeof window !== "undefined") {
  render(<App />, document.getElementById("root"));
}
