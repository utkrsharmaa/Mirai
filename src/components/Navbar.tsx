// Logo
import { Collection } from "./Collection/Collection"
import { Home } from "./Home/Home"
import { Settings } from "./Settings/Settings"

// Buttons to navigate to Home, Collection & Settings
export const Navbar = () => {
  return (
    <>
      <p className="text-primary font-bold text-5xl">Mirai</p>
      <div className="flex gap-6">
        <a ref={Home}>Home</a>
        <a ref={Collection}>Your Collection</a>
      </div>
      <a ref={Settings}>Settings</a>
    </>
  )
}