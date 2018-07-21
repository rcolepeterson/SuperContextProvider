import { Component, render } from "preact";
import { AppConsumer } from "./AppProvider";
//import Tile from "./Tile";
const ArticleDetail = class extends Component {
  render() {
    return (
      <AppConsumer>
        {state => {
          return (
            <div
              style={{
                padding: 20,
                margin: 20,
                background: "blue",
                color: "white",
                display: state.view === "frontpage" ? "none" : "block"
              }}
            >
              <h3> {state.view}</h3>
              <button
                onClick={e =>
                  state.dispatch({ type: "CHANGE_VIEW", value: "frontpage" })
                }
              >
                > frontpage!
              </button>
            </div>
          );
        }}
      </AppConsumer>
    );
  }
};

export default ArticleDetail;
