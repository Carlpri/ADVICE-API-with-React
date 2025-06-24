
import {  useState } from 'react';

import { FadeLoader } from 'react-spinners';

import './App.css'

function App() {
 
const [advice, setAdvice] = useState(null)
const[loading, setLoading] = useState(false)
const [error, setError] = useState(null)

 async function handleGetAdvice(){
  setLoading(true)
   try {
      const response = await fetch (`https://api.adviceslip.com/advice`)
      const advice = await response.json();
      setAdvice(advice.slip.advice);
   } catch  {
     setError("Something went wrong")
   } finally{
   setLoading(false);
  }
}
  return (
    <div>
      <h1>Welcome to my Advice API</h1>
      {advice &&  <h3>{advice}</h3>}
      {error && <h3>{error}</h3>}
      <button onClick={handleGetAdvice} disabled = {loading}>
        {loading ? "Please wait..." : "Get Advice"}
      </button>
      {loading && <FadeLoader className='loader' color='black' size={150} loading={loading} />}
    </div>
  )
  
}

export default App



//   function App() {
//    const [advice, setAdvice] = useState (null);
//     useEffect(() =>{})
//       async function fetchAdvice() {
//         const response = await fetch(`https://api.adviceslip.com/advice`)
//         const data = await response.json();
//         setAdvice(data.slip.advice);
//         console.log(advice);
//       }
    
//   return (
//     <div>
//       <h1>Welcome to my ADVICE API</h1>
//        <h3>{advice && advice}</h3>
//       <button onClick={fetchAdvice}>GET ADVICE</button>
//     </div>
//   )
// }


