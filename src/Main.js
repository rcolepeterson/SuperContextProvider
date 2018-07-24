import { Component } from "preact";
import { AppConsumer } from "./AppProvider";
import FrontPage from "./FrontPage";
import ArticleDetail from "./ArticleDetail";
import Footer from "./Footer";

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
    //fake load ...
    setTimeout(this.getTiles.bind(this), 1000);
  }

  getTiles() {
    if (this.props.context) {
      this.props.context.fetchIt(this.props.data);
    }
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
