
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header'
import Main from './Components/Main'
import { HashRouter } from 'react-router-dom';
import SpinnerLoad  from './Components/SpinnerLoad';
// import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
// import "./Assets/js/main.js"





function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = './Assets/js/main.js'; // Replace with the actual script URL
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
        {/* <Helmet>
    <script src="./Assets/js/main.js" async />
  </Helmet> */}
 <div className="container-xxl bg-white p-0">

        <HashRouter>
          <SpinnerLoad />
          <Header />
          <Main />
          <Footer />
       

        </HashRouter>
      </div>
    </>
  );
}

export default App;
