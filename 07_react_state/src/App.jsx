import CounterUseState from "./components/CounterUseState";
import Profile from "./components/Profile";
import TodoList from "./components/TodoList";
import UserProvider from "./components/UserProvider";
import UpdateUser from "./components/UpdateUser";
import UserProfile from "./components/UserProfile";
import CounterZustand from "./components/CounterZustand";
function App() {
  return (
    <div>
      <CounterUseState />
      <Profile />
      <TodoList />

      <UserProvider>
        <UpdateUser />
        <UserProfile />
      </UserProvider>

      <CounterZustand />
    </div>
  );
}

export default App;
