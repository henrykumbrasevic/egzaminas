import Button from "./Button";
import { useAuth } from "../context/AuthContext";
import { deleteItem } from "../helpers/delete";

function Card({ item }) {
  const { user } = useAuth();

  const deleteItemHandler = () => {
    const deleteConfirmation = window.confirm("Are you sure you want to delete this ad?");

    if (deleteConfirmation) {
      try {
        deleteItem(item.id);
        console.log("deleted");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <div
        key={item.id}
        className="m-3 p-2 rounded flex flex-col justify-center items-center bg-[#DEB887] shadow-2xs "
      >
        <p className="font-bold">title: {item.title}</p>
        <p className="font-bold">description: {item.description}</p>
        <p className="font-bold">city: {item.city}</p>
        <p className="font-bold">price: {item.price}</p>
        <p className="font-bold">category: {item.categories.name}</p>
        {user
          ? user.roles?.includes("ROLE_ADMIN") && (
              <div className="flex">
                <Button buttonType={"registration"}>Edit</Button>
                <Button buttonType={"registration"} onClick={deleteItemHandler}>
                  Delete
                </Button>
              </div>
            )
          : ""}
      </div>
    </>
  );
}

export default Card;
