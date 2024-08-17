import { Manga } from "../Manga";
// import { useAxios } from "../../hooks/useAxios";
import { useAreaContext } from "../../hooks/activeAreaContext";

export const ExploreSidebar = (/*params: SearchOptions*/) => {
  // const { manga, error } = useAxios(params);
  // manga ? console.log(manga) : console.log(error);
  const { setArea } = useAreaContext();
  return (
    <div>
      <div className="flex w-[inherit] fixed top-0 pt-5 pl-5">
        <a onClick={() => setArea("Preview")}>Explore</a>
      </div>
      <div className="results p-[6.25rem] h-full flex justify-center items-center">
        <Manga />
      </div>
    </div>
  );
};
