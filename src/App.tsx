import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieSection from "./components/MovieSection";
import Newsletter from "./components/Newsletter";

function App() { 
   return (
    <>
    <Header/>
    <Banner src="/Banner Desktop.png" alt="Banner"/>
    <MovieSection></MovieSection>
    <Banner src={"./combo.png"} alt={"Combo"}></Banner>
    <Newsletter></Newsletter>
    <Footer></Footer>
    </>
   );
}

export default App;
