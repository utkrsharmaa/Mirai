import "./App.css";
import {
  Navbar,
  Home,
  Collection,
  Settings,
  PreviewFeed,
  ExploreSidebar,
} from "./components";

import { useAreaContext } from "./hooks/activeAreaContext";
import useKeyPress from "./hooks/useKeyPress";

const App: React.FC = () => {
  useKeyPress();
  const { area } = useAreaContext();
  return (
    <div className="App flex w-full h-screen overflow-hidden min-w-[360px]">
      <div className="Main w-full lg:w-8/12 h-full relative">
        <div className="nav sticky top-0 left-0 w-full h-[8rem] flex justify-between p-5 text-center">
          <Navbar />
        </div>
        <div className="content flex h-[calc(100vh-100px)] justify-center items-center box-border flex-1">
          {area === "Home" && <Home />}
          {area === "Collection" && <Collection />}
          {area === "Settings" && <Settings />}
          {area === "Preview" && <PreviewFeed />}
        </div>
      </div>
      <div className="Sidebar hidden lg:block w-4/12 h-full relative bg-secondary">
        <ExploreSidebar />
      </div>
    </div>
  );
};

export default App;
