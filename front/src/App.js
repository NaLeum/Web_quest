import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/common/Layout";
import GlobalStyles from "./libs/GlobalStyles";
import CreatePostPage from "./pages/CreatePostPage";
import MainPage from "./pages/MainPage";
import PostDetailPage from "./pages/PostDetailPage";

function App() {
  return (
    <>
      <GlobalStyles/>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/postDetail/:postIdx" component={PostDetailPage} />
            <Route exact path="/createPost" component={CreatePostPage} />
            <Route path="/*">404 Not Found</Route>
          </Switch>
        </Router>
      </Layout>
    </>
  );
}

export default App;
