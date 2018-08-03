import { createContext } from "preact-context";
import { Component } from "preact";

const AppContext = createContext();

const reducer = (state, action) => {
  if (action.type === "CHANGE_VIEW") {
    return { ...state, view: action.value };
  }

  if (action.type === "FETCH_DATA") {
    return { ...state, tilelist: action.value };
  }

  if (action.type === "CHANGE_SEL_ID") {
    return { ...state, selid: action.value };
  }
};

export class AppProvider extends Component {
  methods = {
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  constructor(props) {
    super(props);
    this.state = { ...props.initialState, ...this.methods };
  }

  render() {
    const {
      props: { children }
    } = this;
    return (
      <AppContext.Provider value={this.state}>{children}</AppContext.Provider>
    );
  }
}

export const AppConsumer = AppContext.Consumer;
