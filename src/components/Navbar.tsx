// Logo
import { useAreaContext } from "../hooks/activeAreaContext";

// Buttons to navigate to Home, Collection & Settings
export const Navbar = () => {
  const { setArea } = useAreaContext();
  return (
    <>
      <p className="text-primary font-bold text-5xl">Mirai</p>
      <div className="flex gap-6">
        <a
          onClick={() => {
            setArea("Home");
          }}
        >
          Home
        </a>
        <a
          onClick={() => {
            setArea("Collection");
          }}
        >
          Your Collection
        </a>
      </div>
      <a
        onClick={() => {
          setArea("Settings");
        }}
      >
        Settings
      </a>
    </>
  );
};
