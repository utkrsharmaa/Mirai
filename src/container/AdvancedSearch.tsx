
import { useEffect, useState } from 'react';
import fetchIdByName from '../service/api/Mangadex/MangaFetch';

type SearchQueryProps = {
  title: string;
  includedTagNames?: string[];
  excludedTagNames?: string[];
}

const AdvancedSearch = ({ title, includedTagNames, excludedTagNames }: SearchQueryProps) => {
  const [manga, setManga] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchManga = async () => {
      try {
        const mangaData = await fetchIdByName({ title, includedTagNames, excludedTagNames });
        setManga(mangaData);
      } catch (error) {
        setError("Failed to fetch manga data");
      }
    };

    fetchManga();
  }, [title, includedTagNames, excludedTagNames]);

  return (
    <div>
      <h1>Search Results</h1>
      {error && <p>{error}</p>}
      {manga ? (
        <ul>
          {manga.map((item, index) => (
            <li key={index}>{item.attributes.title.en}</li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default AdvancedSearch;