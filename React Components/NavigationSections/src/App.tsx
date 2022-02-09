import { NavigationSection } from "./components/NavigationSection";
import { pages } from "./data";

function App() {
  return (
    <>
      <NavigationSection pages={pages} />
    </>
  );
}

export default App;
//App -> NavigationSection -> PageList
