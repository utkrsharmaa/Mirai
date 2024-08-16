import { Manga } from "../Manga";
import { useAxios } from "../../hooks/useAxios";

export const ExploreSidebar = (params: SearchOptions) => {
  const { manga, error } = useAxios(params);
  manga ? console.log(manga) : console.log(error);
  return (
    <div>
      <div className="flex w-[inherit] fixed top-0 pt-5 pl-5">
        <a>Explore</a>
      </div>
      <div className="results p-[6.25rem] h-full flex justify-center items-center">
        <Manga></Manga>
      </div>
    </div>
  );
};
