import { CgGlobeAlt } from "react-icons/cg";
import { GoChevronDown } from "react-icons/go";
import { RecManga } from "../RecManga";

export const Home = () => {
  return (
    <div className="flex flex-col w-full h-full p-5 pt-0 overflow-y-auto">
      {/* section 1 */}
      <section className="rec sm:p-5">
        <div className="flex items-baseline">
          <p className="font-bold text-lg sm:text-xl pr-5">You might like</p>
          <section className="sources flex items-baseline">
            <CgGlobeAlt className="text-sm sm:text-base text-text mr-1 relative top-[2px]" />
            {/* implement dropdown for source selection, static for now */}
            <p className="font-normal text-xs">Mangadex</p>
            <GoChevronDown className="text-xs sm:text-base text-text ml-1 relative top-[3px] sm:top-[5px]" />
          </section>
        </div>
        <div className="RecMangaDisplay flex gap-10 overflow-hidden w-full pt-10">
          <RecManga />
          <RecManga />
          <RecManga />
          <RecManga />
          <RecManga />
          <RecManga />
          <RecManga />
          <RecManga />
        </div>
      </section>
      {/* section 2 */}
      <section className="rec sm:p-5">
        <div className="flex items-baseline">
          <p className="font-bold text-lg sm:text-xl pr-5">Continue Reading</p>
          <section className="sources flex items-baseline">
            <CgGlobeAlt className="text-sm sm:text-base text-text mr-1 relative top-[2px]" />
            {/* implement dropdown for source selection, static for now */}
            <p className="font-normal text-xs">Mangadex</p>
            <GoChevronDown className="text-xs sm:text-base text-text ml-1 relative top-[3px] sm:top-[5px]" />
          </section>
        </div>
        <div className="RecMangaDisplay flex gap-10 overflow-hidden w-full pt-10">
          <RecManga />
          <RecManga />
          <RecManga />
          <RecManga />
          <RecManga />
          <RecManga />
          <RecManga />
          <RecManga />
        </div>
      </section>
    </div>
  );
};
