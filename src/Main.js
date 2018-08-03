import { Component } from "preact";
import { AppConsumer } from "./AppProvider";
import FrontPage from "./FrontPage";
import ArticleDetail from "./ArticleDetail";
import Footer from "./Footer";
//import { startListener } from "./listener";

// https://stackoverflow.com/questions/50493447/how-to-update-the-state-of-new-context-provider-after-ajax-success

const WithContext = TheComponent => {
  return class App extends Component {
    render() {
      return (
        <AppConsumer>
          {context => <TheComponent {...this.props} context={context} />}
        </AppConsumer>
      );
    }
  };
};

const Main = class extends Component {
  componentDidMount() {
    //fake loading ...
    setTimeout(this.fetchData.bind(this), 1000);
  }

  handleErrors(response) {
    if (!response.ok) {
      console.log("error");
      throw Error(response.statusText);
    }
    return response;
  }

  fetchData() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(this.handleErrors)
      .then(result => result.json())
      .then(data => {
        this.props.context.dispatch({ type: "FETCH_DATA", value: data });
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div>
        <FrontPage />
        <ArticleDetail />
        <Footer />
      </div>
    );
  }
};

export default WithContext(Main);
