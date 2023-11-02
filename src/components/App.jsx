import FriendsList from "./FriendsList";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";
import FormAddFriend from "./FormAddFriend";
import { useFriend } from "../context/FriendContext";

export default function App() {
  const { showAddFriend, handleAddFriend, selectedFriend, toggleFriendForm } =
    useFriend();

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {showAddFriend && <FormAddFriend onAddFriends={handleAddFriend} />}

        <Button onClick={toggleFriendForm}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>

      {selectedFriend && <FormSplitBill key={selectedFriend.id} />}
    </div>
  );
}
