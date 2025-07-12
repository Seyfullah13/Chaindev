import "./styles/index.css";
import GlobalNav from "./Components/layouts/GlobalNav";
import Home from "./pages/Home/Home";
import Footer from "./Components/layouts/Footer";
function App() {
  return (
    <div>
      <GlobalNav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
