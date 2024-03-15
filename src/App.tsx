import AddFriendForm from "./components/AddFriendForm";
import Button from "./components/Button";
import FriendsList from "./components/FriendsList";
import SplitBillForm from "./components/SplitBillForm";

export default function App() {
  return (
    <div className="app-container">
      <div className="sidebar">
        <FriendsList />
        <AddFriendForm />
        <Button onClick={() => console.log("add friend")}>Add friend</Button>
      </div>
      <SplitBillForm />
    </div>
  );
}
