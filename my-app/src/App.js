import { GreetingParent } from "./components/GreetingParent";
import { UserProfileParent } from "./components/UserProfileParent";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <GreetingParent />
      <UserProfileParent />
    </div>
  );
}

export default App;
