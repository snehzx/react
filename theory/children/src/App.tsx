import "./App.css";
import { Card } from "./Card.tsx";

function App() {
  return (
    <Card>
      <p>This paragraph is passed as a child.</p>
      <button>Click Me</button>
    </Card>
  );
}

export default App;
