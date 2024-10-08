import "./assets/sass/app.sass"
import Footer from './Layouts/Footer';
import Header from './Layouts/Header';
import Main from './Layouts/Main';
// import QuickView from "./pages/home/QuickView";

function App() {
  return (
    <div>
      {/* <QuickView /> */}
      <Header />
      <Main />
      <Footer />
    </div >
  );
}

export default App;