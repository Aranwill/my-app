// import './App.css';
// import Contador from './components/contador';
// import Blog from './components/Blog';
// import RelojEffect from './components/reloj';
// import {useState, useEffect} from "react";
// import Loader from "./components/Loader";
// import Quote from "./components/Quote";
// import axios from "axios";
import ShoppingCart from "./components/cart/ShoppingCart";

// const initialQuote = {
//   text: 'Cita',
//   author: 'Autor'
// }

const App = () => {

  // const [quote, setQuote] = useState(initialQuote)
  // const [loading, setLoading] = useState(false)

  // const updateQuote = async () => {

  //   setLoading(true)

  //   const url = "https://www.breakingbadapi.com/api/quote/random"


  //   //const res = await fetch(url)
  //   const res = await axios.get(url);

  //   //const [newQuote] = await res.json()
  //   const [newQuote] = await res.data;

  //   const {quote: text, author} = newQuote;

  //   setQuote({
  //     text,
  //     author
  //   })

  //   setLoading(false)
  // }

  // useEffect(() => {
  //   updateQuote()
  // }, [])
  
  

  return (
    <>
      <ShoppingCart />
      {/* <Lista/>
      <Contador/>
      <Blog/>
      <RelojEffect/> */}
        {/* <div style={{display: "flex", flexDirection: "column", width: 300}}>
          <img
            src="https://logospng.org/download/breaking-bad/logo-breaking-bad-2048.png"
            alt="breaking-bad" width="300"/>
          <button onClick={() => updateQuote()}>Obtener otra cita</button>

          { loading ? <Loader/> : <Quote quote={quote}/>}

        </div> */}
      
    </>
  );
}

export default App;
