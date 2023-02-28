
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import {decAmountbyfive,decAmountbyten} from "./actions/index";

function App() {
  const myState=useSelector((state)=>
    state.decreaseTheNumber);
    console.log(myState)
  
  const dispatch=useDispatch();
  return (
    <>
    <div className='namebox'>
      <img src='./images/vijay.jpg' alt=""/>
      <h1>Hello, Saurabh</h1>
      </div>

      <div className='inputbox'>
      <input type="text" className="quantity_input" value={myState}/><span><p>Total amount</p></span>
      </div>
      <div className='box'>
      <button className='minus1' title='decrement1' onClick={()=>dispatch(decAmountbyfive(5000))}><span className='five'>Withdraw $5000</span></button>
      
      <button className='minus2' onClick={()=>dispatch(decAmountbyten(10000))}><span className='ten'>Withdraw $10000</span></button>
      </div>
    
    </>
  );
}

export default App;
