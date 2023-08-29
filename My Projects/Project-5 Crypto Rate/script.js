const AccessKey = "";

const BitcoinEl=document.getElementById("RateBitcoin");
const EtheruemEl=document.getElementById("RateEtheruem");
const DogeCoinEl=document.getElementById("RateDogecoin");

async function GetPrices(){

    const url="https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=inr";
    const response = await fetch(url);
    const data = await response.json();

    
    console.log(data)

   const bit=data.bitcoin.inr;
   const eth=data.ethereum.inr;
   const doge=data.dogecoin.inr;

   BitcoinEl.innerHTML=`Rs.${bit}`;
   EtheruemEl.innerHTML=`Rs.${eth}`;
   DogeCoinEl.innerHTML=`Rs.${doge}`;

   console.log(bit);
   console.log(eth);
   console.log(doge);

    
}

GetPrices();