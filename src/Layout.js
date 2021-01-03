import Nav from "./components/Nav";
import App from "./App";
import { useState } from "react";
const Layout = ({ language }) => {
  const [isEn, setIsEn] = useState(true);
  return (
    <language.Provider value={isEn}>
      <Nav setIsEn={setIsEn} />
      <App />
    </language.Provider>
  );
};
export default Layout;
