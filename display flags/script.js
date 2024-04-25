const API_URL = "https://restcountries.com/v3.1/all"
function reqListener() {
    const countries = JSON.parse(this.responseText)
    console.log(countries) 
    for(let ind=0;ind<countries.length;ind++){
        console.log(countries[ind].name.common)
    }
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", API_URL);
  req.send();
  