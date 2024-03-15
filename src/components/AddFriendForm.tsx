// component file responsible for adding new friends to the list

import Button from "./Button";

export default function AddFriendForm() {
  return (
    <form className=" form add-friend-form">
      <label className="label">👩🏻‍🤝‍🧑🏼 Friend name</label>
      <input type="text" />

      <label className="label">📸 Image</label>
      <input type="text" />
      <Button onClick={() => console.log("add friend")}>Add Friend</Button>
    </form>
  );
}
