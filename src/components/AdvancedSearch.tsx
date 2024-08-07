import { useEffect, useState } from 'react';
import SearchManga from '../services/api/MangaDex/searchManga'; // Adjust the path as needed

interface SearchQueryProps {
  title: string;
  includedTagNames?: string[];
  excludedTagNames?: string[];
}

const AdvancedSearch = ({ title, includedTagNames, excludedTagNames }: SearchQueryProps) => {
  const [manga, setManga] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchManga = async () => {
      setLoading(true);
      setError(null);
      try {
        const mangaData = await SearchManga({ title, includedTagNames, excludedTagNames });
        setManga(mangaData);
      } catch (error) {
        setError('Error fetching manga');
        console.error(error);
      }
      setLoading(false);
    };

    fetchManga();
  }, [title, includedTagNames, excludedTagNames]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Search Results</h1>
      <ul>
        {manga.map((mangaData) => (
          <li key={mangaData.id}>{mangaData.attributes.title.en}</li>
        ))}
      </ul>
    </div>
  );
};


export default AdvancedSearch;