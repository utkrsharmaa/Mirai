import axios from 'axios';  // search options for manga lookup
import { filterAttributes, filterRelationships } from '../../../utils/filterData';

export async function SearchManga ({title, includedTagNames, excludedTagNames, filters, order}: SearchOptions): Promise<any> {
  const baseUrl = 'https://api.mangadex.org';
  //transform Tag arrays into arrays of UUIDs using the /manga/tags resource.
  const tags = await axios(`${baseUrl}/manga/tag`);
  // fetching & cross-checking selected included/excluded tags for advanced search
  const includedTagIDs:any = tags.data.data
    .filter((tag: Tag) => includedTagNames?.includes(tag.attributes.name.en))
    .map((tag: Tag)=> tag.id)
  const excludedTagIDs:any = tags.data.data
    .filter((tag: Tag) => excludedTagNames?.includes(tag.attributes.name.en))
    .map((tag: Tag) => tag.id)
  // declaring search Parameters for fetch
   const params: any = {
    title,
    includedTags: includedTagIDs,
    excludedTags: excludedTagIDs,
    ...filters,
    order,
    includes: ['cover_art', 'artist', 'author']
  }
  // sending the request to get manga data object
  const resp = await axios ({
    method: 'GET',
    url: `${baseUrl}/manga`,
    params,
  });
  
  const rawData = resp.data.data;

  // Accumulate manga data objects
  const mangaDataArray = await Promise.all(
    rawData.map(async (item: any) => {
      const { id, attributes, relationships } = item;

      const mangaData = {
        id: id,
        attributes: filterAttributes(attributes),
        relationships: filterRelationships(id, relationships)
      };
      return mangaData;
    })
  );
  console.log(mangaDataArray);
  // Return the accumulated array
  return mangaDataArray;
};
