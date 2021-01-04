import { useState } from "react";
import { Switch, Route } from "react-router-dom";
/**
 * pages
 */
import App from "./route/App";
import Admin from "./route/Admin";
/** components */
import Nav from "./components/Nav";
const Layout = ({ language }) => {
  const [isEn, setIsEn] = useState(true);
  return (
    <language.Provider value={isEn}>
      <Nav setIsEn={setIsEn} />

      <Switch>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </language.Provider>
  );
};
export default Layout;
