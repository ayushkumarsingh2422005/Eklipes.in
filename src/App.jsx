import { useEffect, useState } from 'react'
import './App.css'
import { Home, Loader } from './Pages'

function App() {
  const [loaderState, setLoaderState] = useState(true);
  const [pageState, setPageState] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      document.querySelector('.loader > div').style.transform = 'scale(10)';
      document.querySelector('.loader').style.opacity = '0';
      setPageState(true);
    },5000);
    setTimeout(()=>{
      document.querySelector('.loader').style.display = 'none';
      setLoaderState(false);
    },6000);
  },[]);
  return (
    <>
      {loaderState && <Loader />}
      {pageState && <Home />}
      
    </>
  )
}

export default App
