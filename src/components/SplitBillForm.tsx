// component file responsible for spliting the bill

import { useContext } from "react";
import Button from "./Button";
import { BillContext } from "../contexts/BillContext";

export default function SplitBillForm() {
  const {
    bill,
    setBill,
    paidByUser,
    whoIsPaying,
    setWhoisPaying,
    paidByFriend,
    selectedFriend,
    handleChangePaidByUser,
    handleSubmit,
  } = useContext(BillContext);

  return (
    <form className="form split-bill-form" onSubmit={handleSubmit}>
      <h2>SPLIT A BILL WITH {selectedFriend?.name}</h2>
      <label className="label">💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(event) => setBill(Number(event.target.value))}
      />

      <label className="label">🧍‍♂️ Your expense</label>
      <input type="text" value={paidByUser} onChange={handleChangePaidByUser} />

      <label className="label">👩🏻‍🤝‍🧑🏼 {selectedFriend?.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>🤑 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(event) => setWhoisPaying(event.target.value)}
      >
        <option value="user">you</option>
        <option value="friend">{selectedFriend?.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
