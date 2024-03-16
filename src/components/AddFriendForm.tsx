// component file responsible for adding new friends to the list

import { useState } from "react";
import Button from "./Button";

export default function AddFriendForm({ onAddfriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const id = crypto.randomUUID();

  /**
   *
   * handles the submit of the name and image
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
    <form className=" form add-friend-form" onSubmit={handleSubmit}>
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
      />
      <Button onClick={() => console.log("add friend")}>Add</Button>
    </form>
  );
}
