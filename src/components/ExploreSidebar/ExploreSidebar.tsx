import { Manga } from "../Manga"
import { useAxios } from "../../hooks/useAxios"

export const ExploreSidebar = (params: SearchOptions) => {
  const {manga, error} = useAxios(params);
  manga? console.log(manga) : console.log(error)
  return (
    <div>
      <Manga></Manga>
    </div>
  )
}