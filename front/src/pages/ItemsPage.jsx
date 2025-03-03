import Card from "../components/ItemCard";
import { useItemContext } from "../context/ItemContext";

function ItemsPage() {
  const { items, loading, error } = useItemContext();

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
        {!error && items.map((item) => <Card item={item} key={item.id} />)}
        {error && <div className="pt-5 text-[2rem] text-center">error</div>}
        {loading && (
          <div className="pt-5 text-[2rem] text-center">loading ...</div>
        )}
      </div>
    </>
  );
}

export default ItemsPage;
