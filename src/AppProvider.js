import { createContext } from "preact-context";
import { Component } from "preact";

const AppContext = createContext();

const reducer = (state, action) => {
  if (action.type === "TOGGLE") {
    return { ...state, isCole: !state.isADuck };
  }

  if (action.type === "CHANGE_VIEW") {
    return { ...state, view: action.value };
  }

  if (action.type === "FETCH_DATA") {
    return { ...state, view: action.value };
  }
};

export class AppProvider extends Component {
  methods = {
    dispatch: action => {
      this.setState(state => reducer(state, action));
    },
    fetchIt: () => {
      this.fetchData();
    }
  };

  fetchData() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(result => result.json())
      .then(data => {
        console.log("hey we have fetch data", data);
        this.setState({ ...this.state, tilelist: data });
      })
      .catch(error => console.error(error));
  }

  constructor(props) {
    super(props);
    this.state = { ...props.initialState, ...this.methods };
  }

  render() {
    const {
      props: { children }
    } = this;
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          fetchData: this.fetchData,
          openSnackbar: this.openSnackbar
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
}

export const AppConsumer = AppContext.Consumer;
