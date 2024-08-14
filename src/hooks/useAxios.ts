import { useEffect, useState } from 'react';
import { SearchManga } from '../service/api/Mangadex/MangaFetch';

export const useAxios = ({ title, includedTagNames, excludedTagNames, filters, order }: SearchOptions) => {
  const [manga, setManga] = useState<Manga[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const mangaData = await SearchManga({ title, includedTagNames, excludedTagNames, filters, order });
        setManga(mangaData);
      } catch (error) {
        setError("Failed to fetch manga data");
      }
    }; fetch();
  }, [title, includedTagNames, excludedTagNames, filters, order]);
  return {manga, error}
}