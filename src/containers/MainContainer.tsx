// import Navbar here
// import Home feed here
// import Explore feed here
// import Settings here
import { Collection, Home, Navbar, Settings, PreviewFeed } from "../components";

export const MainContainer = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Collection/>
      <Settings/>
      <PreviewFeed/>
    </div>
  )
}