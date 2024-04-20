// component file responsible for adding new friends to the list

import { useContext } from "react";
import Button from "./Button";
import { AddFriendContext } from "../contexts/AddFriendContext";
import { FriendsContext } from "../contexts/FriendsContext";

/**
 * AddFriendForm component
 * @prop {function} onAddfirend - function that add friends to list on form submit
 */
export default function AddFriendForm() {
  const { name, setName, image, setImage, handleSubmit } =
    useContext(AddFriendContext);

  const { isLoading } = useContext(FriendsContext);

  return (
    <form
      className=" form add-friend-form"
      onSubmit={handleSubmit}
      name="add friend"
    >
      <label className="label">👩🏻‍🤝‍🧑🏼 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label className="label">📸 Image</label>
      <input
        type="text"
        value={image}
        onChange={(event) => setImage(event.target.value)}
        disabled
      />
      <Button disabled={isLoading}>Add</Button>
    </form>
  );
}
