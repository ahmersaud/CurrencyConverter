import "./ToUSD.css"
const ToUSD=(props)=>{
return(
    <div className="USD grow br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
    <p>Enter Pakistan Rupees</p>    
    <input className="ba b--black-20  mb2"
            type="number" name="Input1" defaultValue="0" onChange={props.OnInput2Change}/>
            
            <button className="white b pv2 ph3 bg-gray hover-bg-silver bt-0 br-0 bl-0 bb bw2 b--mid-gray br2"
            onClick={props.OnButton2Click} 
            name="Button1"> Convert to USD </button>
    <h2>${props.result}</h2>
    </div>
);
}
export default ToUSD;