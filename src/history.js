//import createHistory from "history/lib/createBrowserHistory";
import createHistory from "history/createBrowserHistory";
export default () => {
  const history = createHistory();
  // Get the current location.
  const location = history.location;
  // Listen for changes to the current location.
  const unlisten = history.listen((location, action) => {
    // location is an object like window.location
    console.log(action, location.pathname, location.state);
  });
};
