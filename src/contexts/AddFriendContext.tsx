import { createContext, useContext, useState } from "react";
import { ChildrenProp } from "../types/App.type";
import { FriendsContext } from "./FriendsContext";
import { addFriendProp } from "../types/addFriend.type";

export const AddFriendContext = createContext({} as addFriendProp);

export function AddFriendProvider({ children }: ChildrenProp) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const id = crypto.randomUUID();

  const { onAddfriend } = useContext(FriendsContext);

  /**
   *
   * handles the submit of the name and image
   * @param {object} event - form event on the form element
   */
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name || !image) {
      return;
    }

    //create new friend object
    const newfriend = { name, image: `${image}?=${id}`, balance: 0, id };
    onAddfriend(newfriend);

    //set the form back to default
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <AddFriendContext.Provider
      value={{ name, setName, image, setImage, handleSubmit }}
    >
      {children}
    </AddFriendContext.Provider>
  );
}
