import { useEffect, useState } from 'react';
import { SearchManga } from '../service/api/Mangadex/MangaFetch';

export const AdvancedSearch = ({ title, includedTagNames, excludedTagNames, filters, order }: SearchOptions) => {
  const [manga, setManga] = useState<Manga[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchManga = async () => {
      try {
        const mangaData = await SearchManga({ title, includedTagNames, excludedTagNames, filters, order });
        setManga(mangaData);
      } catch (error) {
        setError("Failed to fetch manga data");
      }
    };

    fetchManga();
  }, [title, includedTagNames, excludedTagNames, filters, order]);

  return (
    <div>
      <h1>Search Results</h1>
      {error && <p>{error}</p>}
      {manga ? (
        <ul>
          {manga.map((item, index) => (
            <div key={index}>
              <li>{item.attributes.title}</li>            
              <img src={item.relationships.cover_art.attributes.coverUrl} alt="" />
            </div>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};