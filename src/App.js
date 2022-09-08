
// import './App.css';
import '../src/css/Responsive.css';
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Product from "./component/Product";
import Title from "./component/Title";

function App() {
  return (
    <div className="container-all">

      <header className="header">
        <Header />
      </header>

      {/* <section className="section-main container">
        <Banner />
        <Title />
        <Product />
      </section>
      <footer className="footer">
        <Footer />
      </footer> */}


    </div>
  );
}

export default App;