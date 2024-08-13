import axios from 'axios';  // search options for manga lookup
import { filterAttributes, filterRelationships } from '../../../utils/filterData';
  type SearchOptions = {
    title: string;
    includedTagNames?: string[],
    excludedTagNames?: string[],
  }
  // Define the type for the tag
  type Tag = {
    id: string;
    attributes: {
      name: {
        en: string;
      };
    };
  };

  export default async function SearchManga ({title, includedTagNames, excludedTagNames}: SearchOptions): Promise<any> {
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
    const params: any = {title, includedTags: includedTagIDs, excludedTags: excludedTagIDs, includes: ['cover_art', 'artist', 'author']}
    // sending the request to get manga data object
    const resp = await axios ({
      method: 'GET',
      url: `${baseUrl}/manga`,
      params,
    });
    
    const rawData = resp.data.data;

    rawData.forEach(async (item: any) => {
      // Destructure id, attributes, and relationships from each item in the array
      const { id, attributes, relationships } = item;
      const mangaData = {
        id: id,
        attributes: filterAttributes(attributes),
        relationships: filterRelationships(id, relationships)
      };
      console.log(mangaData);
    });
};
