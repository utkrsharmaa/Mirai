import { useAreaContext } from "../hooks/activeAreaContext";

// Single manga listing for the Search
export const Manga = () => {
  const { setArea } = useAreaContext();
  return (
    <div onClick={() => setArea("Preview")}>
      <p>Manga</p>
    </div>
  );
};
