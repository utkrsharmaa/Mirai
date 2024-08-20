import { useAreaContext } from "../hooks/activeAreaContext";

// Single manga listing for the Search
export const Manga = () => {
  const { setArea } = useAreaContext();
  return (
    <div
      className="select-none cursor-pointer"
      onClick={() => setArea("Preview")}
    >
      <p>Manga</p>
    </div>
  );
};
