import About from "./About/About";
import BestSellers from "./BestSellers/BestSellers";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import Social from "./Social/Social";

function App() {
   return (
      <div className="App">
         <Nav />
         <Header />
         <BestSellers />
         <About />
         <Social />
         <Footer />
      </div>
   );
}

export default App;
