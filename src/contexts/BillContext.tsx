import { createContext, useContext, useState } from "react";
import { FriendsContext } from "./FriendsContext";
import { ChildrenProp } from "../types/App.type";
import { billProp } from "../types/bill.type";

export const BillContext = createContext({} as billProp);

export function BillProvider({ children }: ChildrenProp) {
  const [bill, setBill] = useState<number | string>("");
  const [paidByUser, setPaidByUser] = useState<number | string>("");
  const [whoIsPaying, setWhoisPaying] = useState("user");

  const billValue = isNaN(Number(bill)) ? "" : bill;
  const paidByUserValue = isNaN(Number(paidByUser)) ? "" : paidByUser;

  const paidByFriend = bill
    ? paidByUser
      ? Number(bill) - Number(paidByUser)
      : ""
    : "";

  const { selectedFriend, onSplitBill, setIsLoading } =
    useContext(FriendsContext);

  /**
   * handle the change of expense value
   * @param {object} event - react change event on input element
   */
  function handleChangePaidByUser(event: React.ChangeEvent<HTMLInputElement>) {
    // check if value is greater than the bill
    const IsGreaterThanBill = Number(event.target.value) > Number(bill);
    const value = IsGreaterThanBill ? paidByUser : Number(event.target.value);

    setPaidByUser(value);
  }
  /**
   *
   * handles the submit of the form
   * @param {object} event - form event on the form element
   */
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isNaN(Number(bill)) || isNaN(Number(paidByUser))) {
      setBill("");
      setPaidByUser("");
    }

    if (!bill || !paidByUser) {
      return;
    }

    setIsLoading(true);

    const value = whoIsPaying === "user" ? paidByFriend : -paidByUser;

    onSplitBill(Number(value));

    setBill("");
    setPaidByUser("");
    setWhoisPaying("user");
    setIsLoading(false);
  }

  return (
    <BillContext.Provider
      value={{
        billValue,
        setBill,
        paidByUserValue,
        whoIsPaying,
        setWhoisPaying,
        paidByFriend,
        selectedFriend,
        handleChangePaidByUser,
        handleSubmit,
      }}
    >
      {children}
    </BillContext.Provider>
  );
}
