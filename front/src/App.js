import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Wapper from "./components/common/Wapper";
import GlobalStyles from "./libs/GlobalStyles";
import MainPage from "./pages/MainPage";
import PostDetailPage from "./pages/PostDetailPage";

function App() {
  return (
    <>
      <GlobalStyles/>
      <Wapper>
        <Router>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/postDetail/:postIdx" component={PostDetailPage} />
            <Route path="/*">404 Not Found</Route>
          </Switch>
        </Router>
      </Wapper>
    </>
  );
}

export default App;
