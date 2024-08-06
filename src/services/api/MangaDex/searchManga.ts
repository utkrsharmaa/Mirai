import axios from "axios";

// search options for manga lookup
interface SearchOptions {
  title: "Jujutsu Kaisen";
  includedTagNames?: string[],
  excludedTagNames?: string[],

}

export default async function searchManga ({title, includedTagNames, excludedTagNames}: SearchOptions): Promise<any> {
  const baseUrl = 'https://api.mangadex.org';
  //transform Tag arrays into arrays of UUIDs using the /manga/tags resource.
  const tags = await axios(`${baseUrl}/manga/tag`);
  // fetching & cross-checking selected included/excluded tags for advanced search
  const includedTagIDs:any = tags.data.data
    .filter((tag: { attributes: { name: { en: string; }; }; }) => includedTagNames?.includes(tag.attributes.name.en))
    .map((tag: {attributes: {names: {en: string;};};}) => includedTagNames?.includes(tag.attributes.names.en))
  const excludedTagIDs:any = tags.data.data
    .filter((tag: { attributes: { name: { en: string; }; }; }) => excludedTagNames?.includes(tag.attributes.name.en))
    .map((tag: {attributes: {names: {en: string;};};}) => excludedTagNames?.includes(tag.attributes.names.en))
  // declaring search Parameters for fetch
  const params: any = {title, includedTagIDs, excludedTagIDs}
  // sending the request
  const resp = await axios ({
    method: 'GET',
    url: `${baseUrl}/manga`,
    params,
  });

  console.log((resp.data.data.manga));
}