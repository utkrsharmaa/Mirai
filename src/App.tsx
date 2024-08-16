import "./App.css";
import {
  Navbar,
  Home,
  Collection,
  Settings,
  PreviewFeed,
  ExploreSidebar,
} from "./components";

const App: React.FC = () => {
  return (
    <div className="App flex w-full h-screen">
      <div className="Main w-9/12 h-full relative">
        <div className="nav fixed top-0 left-0 w-[inherit] h-[5rem] flex justify-between pt-5 pl-5 pr-5 text-center">
          <Navbar />
        </div>
        <div className="content pt-[6.25rem] h-full flex justify-center items-center border-solid border-2 border-text">
          <div className="temporarydivfortesting w-fit h-fit">
            <Home />
            <Collection />
            <Settings />
            <PreviewFeed />
          </div>
        </div>
      </div>
      <div className="Sidebar w-3/12 h-full relative">
        <ExploreSidebar />
      </div>
    </div>
  );
};

export default App;
