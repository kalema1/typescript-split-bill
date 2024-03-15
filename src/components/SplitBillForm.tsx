// component file responsible for spliting the bill

import Button from "./Button";

export default function SplitBillForm() {
  return (
    <form className="form split-bill-form">
      <h2>SPLIT A BILL WITH X</h2>
      <label className="label">💰 Bill value</label>
      <input type="text" />

      <label className="label">🧍‍♂️ Your expense</label>
      <input type="text" />

      <label className="label">👩🏻‍🤝‍🧑🏼 x's expense</label>
      <input type="text" disabled />

      <label>🤑 Who is paying the bill</label>
      <select>
        <option value="user">you</option>
        <option value="friend">x</option>
      </select>

      <Button onClick={() => console.log("split bill")}>Split bill</Button>
    </form>
  );
}
