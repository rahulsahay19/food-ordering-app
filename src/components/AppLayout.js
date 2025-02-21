import { Outlet } from "react-router-dom";
import Header from "./Header";

const AppLayout = () => {
    return (
      <div className="App">
        <Header/>
        <Outlet/> {/* Rendering Child Component */}
      </div>
    )
  };

  export default AppLayout;