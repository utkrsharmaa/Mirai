// import { Manga } from "../Manga";
// import { useAxios } from "../../hooks/useAxios";

export const ExploreSidebar = (/*params: SearchOptions*/) => {
  // const { manga, error } = useAxios(params);
  // manga ? console.log(manga) : console.log(error);
  return (
    <div>
      <div className="sticky top-0 left-0 w-full h-[6rem] flex p-5 text-center bg-secondary">
        <p className="font-bold text-xl select-none">Explore</p>
      </div>
      <div className="search flex flex-col h-[calc(100vh-100px)] items-center flex-1 overflow-y-auto p-5">
        {/* make whatever div that's supposed to house Managa's scrollable within it's parent */}
        {/* <Manga /> */}
      </div>
    </div>
  );
};
