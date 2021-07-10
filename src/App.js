import "./App.css";
import Message from "./components/Message";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Message />
      <Message />
      <Message />
    </div>
  );
}

export default App;
