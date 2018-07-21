import { Component, render } from "preact";
import { AppConsumer } from "./AppProvider";
import Tile from "./Tile";
const Tiles = class extends Component {
  createTileList(state) {
    var handler = () => {
      state.dispatch({ type: "CHANGE_VIEW", value: "articleDetail" });
    };
    var tiles = state.tilelist.map(item => {
      return <Tile handler={handler} label={item} />;
    });
    return tiles;
  }
  render() {
    return (
      <AppConsumer>
        {state => {
          console.log("AppConsumer has updated the state:", state);
          return (
            <div
              style={{
                display: state.view === "articleDetail" ? "none" : "block"
              }}
            >
              {this.createTileList(state)}
            </div>
          );
        }}
      </AppConsumer>
    );
  }
};

export default Tiles;
