import { Header } from "./components/Header";
import { Categories } from "./components/Categories";
// import { Movies } from "./components/Movies";
function App() {
  return (
    <div className="App  flex flex-col items-center  max-w-[100vw] min-h-[100vh] ">
      <Header />
      <Categories />
    </div>
  );
}

export default App;
