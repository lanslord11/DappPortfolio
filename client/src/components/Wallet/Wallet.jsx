import './Wallet.css';
import{useState} from "react";
import ABI from "./ABI.json";
import Web3 from "web3";

const Wallet =({saveState})=>{

      const [connected,setConnected] =useState(false);
      const isAndroid = /android/i.test(navigator.userAgent);
      const init =async()=>{
            try{
                  const web3 = new Web3(window.ethereum);
                  await window.ethereum.request({method:'eth_requestAccounts'});
                  const contract = new web3.eth.Contract(
                        ABI,
                        "0x97c95d42f4EC33c9fE41Ca8d24EDb8fF7fF60cEF"
                  );
                  setConnected(true);
                  saveState({web3:web3,contract:contract});
            }catch(err){
                  console.log(err);
                  alert("Please Install Metamask");
            }
            
      }

      return<>
      <div className="header">
      {isAndroid  && <button className="connectBTN">
         <a href="https://metamask.app.link/dapp/lanslord11.netlify.app/">Click For Mobile</a>
        </button>  } 
       <button className="connectBTN" onClick={init} disabled={connected}>{connected? "Connected":"Connect Metamask"}</button>
      </div>
      </>
}
export default Wallet;