// component file responsible for spliting the bill

import { useState } from "react";
import Button from "./Button";

export default function SplitBillForm({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState<number | string>("");
  const [paidByUser, setPaidByUser] = useState<number | string>("");
  const [whoIsPaying, setWhoisPaying] = useState("user");

  const paidByFriend = bill ? bill - paidByUser : "";

  /**
   * handle the change of expense value
   * @param {object} event - react change event on input element
   */
  function handleChangePaidByUser(event: React.ChangeEvent<HTMLInputElement>) {
    const IsGreaterThanBill = Number(event.target.value) > bill;
    const value = IsGreaterThanBill ? paidByUser : Number(event.target.value);

    setPaidByUser(value);
  }
  /**
   *
   * handles the submit of the form
   */
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!bill || !paidByUser) {
      return;
    }

    const value = whoIsPaying === "user" ? paidByFriend : -paidByUser;

    onSplitBill(value);

    setBill("");
    setPaidByUser("");
    setWhoisPaying("user");
  }

  return (
    <form className="form split-bill-form" onSubmit={handleSubmit}>
      <h2>SPLIT A BILL WITH {selectedFriend.name}</h2>
      <label className="label">💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(event) => setBill(Number(event.target.value))}
      />

      <label className="label">🧍‍♂️ Your expense</label>
      <input type="text" value={paidByUser} onChange={handleChangePaidByUser} />

      <label className="label">👩🏻‍🤝‍🧑🏼 {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>🤑 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(event) => setWhoisPaying(event.target.value)}
      >
        <option value="user">you</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button onClick={() => console.log("split bill")}>Split bill</Button>
    </form>
  );
}
