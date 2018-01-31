

function mypos(){
    if(navigator && navigator.geolocation){
    navigator.geolocation.getCurrentPosition(success, error);
    
    }
    else{
    alert("your browser is too old to support GPS, please update");
    
    }

}

function success(){
      alert("GPS working");
}

function error(){
  alert("GPS no signal");
}

mypos();