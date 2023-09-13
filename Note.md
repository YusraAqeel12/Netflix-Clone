Use State is an hook that stores a value.
It takes an initial state as input and return an updated state value when it is called
Initial value jo hai wo movies ki hai aur updated waali Setmovies ki 

//hum nai sab api request di in request.js ki file mai 
//axious ki file banai hai jis mai baseurl daala hai
//app.js ki file banao wahaan row ko import karo and fetch karo url
//row kai andar props paas karo title and fetch url ka  and use State define ki and useeffect use kiya  fetch url aap nai liya hai request.js sai
//use effect takes on two arguments , first a function and an array 
//jab bracket daalogay tabh aik dafa run karay ga and phir nahi load hoga
//you cant run async function in a useeffect , you can do it in a special way 
//agar koi varaible hai jo aap nai baahir declare kiya hai ussay useeffct mai use karna imp hai jaisay fetchurl jo app nai bahir declare kiya because useeffect is dependent on that variable 

//npm i react-youtube
//npm i movie trailer 

const[value , setvalue] = useState("ajay)
ajay is input value
