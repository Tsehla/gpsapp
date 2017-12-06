

//Dom innerhtml
function innerhtml(id, result){

return document.getElementById(id).innerHTML=result;

}
//Dom style border
function styleborder(id, result){

return document.getElementById(id).style.borderColor=result;

}
//Dom baground color
function backgroundcolor(id, result){

return document.getElementById(id).style.backgroundColor=result;

}
//-------

//geolocation finder

if(navigator.geolocation){
navigator.geolocation.watchPosition(myPosition, error, gpsOptions)
}
else{
  alert("GPS signal not available, please enable gps and restart browser");
  
}

function myPosition(position,latitudeStorage, longitudeStorage ){

 var longitude = position.coords.longitude;
 var latitude = position.coords.latitude;
  
  if(longitude!==longitudeStorage && latitude!==latitudeStorage){
        //timer 
    setTimeout(contentsChanger,3000);
        
    longitude!==longitudeStorage;
    latitude!==latitudeStorage;
   

  }
  
  
  return ;
  
}

function error(){

return alert("theres an error with gps connection, please check your phone settings or use different browser");

}

function gpsOptions(){

enableHighAccuracy : true;

}




//contents funxtion


function contentsChanger(){
//header array
var image1="http://www.corporateimage.co.za/wp-content/uploads/2015/10/Pick-n-Pay-logo.png";
var image2="http://transformsa.co.za/wp-content/uploads/2015/10/shoprite-300x105.jpg";
var image3="http://logo-load.com/uploads/posts/2016-08/medium/edgars-logo.png" ;

//body images
var body1="https://www.dropbox.com/s/erhge71328yxrfu/pnp1.jpg?raw=1";
var body1a="https://www.dropbox.com/s/za1mybfvf8nd2pt/pnp2.jpg?raw=1";
var body2="https://www.dropbox.com/s/lgdnfgqn7ymyekh/shoprite1.jpg?raw=1";
var body2a="https://www.dropbox.com/s/9d163sbnlru3fas/shoprite2.jpg?raw=1";
var body3="https://www.dropbox.com/s/fqu4ptc7qboym8d/edgars1.jpg?raw=1";
var body3a="https://www.dropbox.com/s/ryyihi0io38fjao/edgars2.jpg?raw=1";


//logo content array
var logoArr=[image1, image2, image3]

var logoRandom=Math.round(Math.random()*(logoArr.length-0)+0);

var logoFinder=logoArr[logoRandom];

//body content  array

var bodyArr=[[body1,body1a] ,[body2, body2a] ,[body3, body3a]];



//header content
document.getElementById("headerLogo").innerHTML='<img src="'+logoFinder+'">';

//body content
document.getElementById("bodyContent").innerHTML='<img src="'+bodyArr[logoArr.indexOf(logoFinder)][0]+'">';

 //footer content
document.getElementById("footerLeftContent").innerHTML='<img  src="'+bodyArr[logoArr.indexOf(logoFinder)][1]+'">';
document.getElementById("footerRightContent").innerHTML='<img src="'+bodyArr[logoArr.indexOf(logoFinder)][0]+'">';
           
//footer click capture
document.getElementById("footerLeft").onclick=function(){
                   
         document.getElementById("bodyContent").innerHTML='<img src="'+bodyArr[logoArr.indexOf(logoFinder)][1]+'">';
                              
           }
           
document.getElementById("footerRight").onclick=function(){
                   
         document.getElementById("bodyContent").innerHTML='<img src="'+bodyArr[logoArr.indexOf(logoFinder)][0]+'">';
                              
           }    
           
    }
    
 



