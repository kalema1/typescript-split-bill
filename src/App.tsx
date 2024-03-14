import AddFriendForm from "./components/AddFriendForm";
import FriendsList from "./components/FriendsList";
import SplitBillForm from "./components/SplitBillForm";

export default function App() {
  return (
    <div className="app-container">
      <div className="sidebar">
        <FriendsList />
        <AddFriendForm />
      </div>
      <SplitBillForm />
    </div>
  );
}
