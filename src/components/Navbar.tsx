// Logo
import { useAreaContext } from "../hooks/activeAreaContext";
import { twMerge } from "tailwind-merge";

// Buttons to navigate to Home, Collection & Settings
export const Navbar = () => {
  const { area, setArea } = useAreaContext();
  const getLinkClasses = (linkArea: string) => {
    return twMerge(
      "cursor-pointer transition-all duration-130", // Adding smooth transitions
      area === linkArea
        ? "ease-in-cubic text-primary max-[440px]:text-base text-lg sm:text-xl drop-shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]"
        : "ease-out-sine text-sm sm:text-base  text-gray-500 hover:text-base hover:text-accent"
    );
  };
  const scrollToArea: any = () => {};
  return (
    <>
      <p className="text-primary font-bold text-2xl select-none">Mirai</p>
      <section
        className="flex flex-col w-full sm:w-[20rem] lg:block select-none"
        onScroll={scrollToArea()}
      >
        <div className="gap-4 flex items-baseline justify-end">
          <a
            className={getLinkClasses("Home")}
            onClick={() => {
              setArea("Home");
            }}
          >
            Home
          </a>
          <a
            className={getLinkClasses("Collection")}
            onClick={() => {
              setArea("Collection");
            }}
          >
            Your Collection
          </a>
        </div>
        <p className="flex justify-end">
          <a
            className={getLinkClasses("Settings")}
            onClick={() => {
              setArea("Settings");
            }}
          >
            Settings
          </a>
        </p>
      </section>
    </>
  );
};
