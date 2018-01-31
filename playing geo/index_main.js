

function mypos(){
    if(navigator && navigator.geolocation){
    navigator.geolocation.getCurrentPosition(success, error);
    
    }
    else{
    alert("your browser is too old to support GPS, please update");
    
    }

}

function success(position){
      var location= position.coords.latitude+" "+position.coords.longitude;
      
      document.getElementById('location').innerHTML=location;
}

function error(){
  alert("GPS no signal");
}

mypos();