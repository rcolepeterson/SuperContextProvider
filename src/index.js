import "./style";
import { render } from "preact";
import { AppProvider } from "./AppProvider";
import FrontPage from "./FrontPage";
import ArticleDetail from "./ArticleDetail";

const initialState = {
  isCole: true,
  view: "frontpage",
  tilelist: [1, 2, 3, 5],
  articleDetail: {}
};

const App = () => (
  <AppProvider initialState={initialState}>
    <FrontPage />
    <ArticleDetail />
  </AppProvider>
);

if (typeof window !== "undefined") {
  render(<App />, document.getElementById("root"));
}
