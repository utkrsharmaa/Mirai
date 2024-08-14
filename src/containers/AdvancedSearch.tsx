import { useAxios } from "../hooks/useAxios";

export const AdvancedSearch = (params: SearchOptions) => {

  const {manga, error} = useAxios(params);

  return (
    <div>
      <h1>Search Results</h1>
      {error && <p>{error}</p>}
      {manga ? (
        <ul>
          {manga.map((item, index) => (
            <div key={index}>
              <li className="font-semibold">{item.attributes.title}</li>            
              <img className="justify-center w-48 h-64 object-contain" src={item.relationships.cover_art.attributes.coverUrl} alt="" />
            </div>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};