
import './App.css';
import { Component } from 'react';
import ToPKR from "./Components/ToPKR/ToPKR";
import ToUSD from "./Components/ToUSD/ToUSD"

class App extends Component {
  constructor(){
    super();
    this.state={
      USDrate:0,
      PKRrate:0,
      Input1:0,
      Input2:0,
      Result1:0,
      Result2:0
    }
  }

  componentDidMount(){
    
    fetch('http://api.currencylayer.com/live?access_key=181e0897415e07bc16a76047722def70&format=1')
    .then(response=>{
       return response.json();
    }).then(Rates=>{
         let DollarRate=Rates.quotes.USDPKR;
         let rupeerate=1/DollarRate;
         console.log(DollarRate);
         console.log(rupeerate);
         this.setState({USDrate:DollarRate});
         this.setState({PKRrate:rupeerate});
         console.log(this);
    });
    
    
    
  }



  OnInput1Change=(event)=>{
    this.setState({Input1:event.target.value})
  }
  OnInput2Change=(event)=>{
    this.setState({Input2:event.target.value})
  }

  OnButton1Click=()=>{
    let input=Number(this.state.Input1);
    let result=input*this.state.USDrate;
    this.setState({Result1:result});
  
  }
  OnButton2Click=()=>{
    let input=Number(this.state.Input2);
    let result=input*this.state.PKRrate;
    this.setState({Result2:result});
   
  }


  render(){
  return (
    <div className="App" style={{justifyContent:'center'}}>
      <h1>Currency converter</h1>
      <h2>PKR🔄USD</h2>
      <ToPKR OnInput1Change={this.OnInput1Change} OnButton1Click={this.OnButton1Click} result={this.state.Result1}/>
      <ToUSD OnInput2Change={this.OnInput2Change} OnButton2Click={this.OnButton2Click} result={this.state.Result2}/>
      <p>Made with 🧡</p>
    </div>
  );}
}

export default App;
