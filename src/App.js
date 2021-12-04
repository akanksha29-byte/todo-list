import "./styles.scss";
import Content from "./components/Content";
import Header from "./components/Header";
import { TaskProvider } from "./context";

export default function App() {
  return (
    <TaskProvider>
      <div className="App">
        <Header />
        <Content />
      </div>
    </TaskProvider>
  );
}
