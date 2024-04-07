let cities = ["Faisalabad" , "Lahore" , "Gojra" , "Okara" , "Sheikhupur" , "Multan"  , "Sialkot"];
let origstring = "I love my country Pakistan. <br> I like my city Faisalabad. <br> I love my Homeland."
// to lowerCase
function lowerCase(){
    let lowerCase = origstring.toLowerCase();
document.getElementById("output").innerHTML = lowerCase;
}
// to upperCase
function upperCase(){
    let upperCase = origstring.toUpperCase();
    document.getElementById("output").innerHTML = upperCase;
}
// to capitalize
function capitalize (){
    let capitalize = `<span class='text-capitalize'>  ${origstring}  </span>`
    document.getElementById("output").innerHTML = capitalize;
}
// for better formating
function formatText()
{
    let text=document.getElementById('input').value;
    if(text!="")
        {
            text=text.toLowerCase();
            document.getElementById("output").style.textTransform = 'capitalize'
            document.getElementById( 'output' ).innerText = text ;
        }
    else
        {
            alert("Please enter some Text");return;
        }         
    // clear input field after adding city
    document.getElementById("input").value="";  
}

// for print city
function printCity()
{
    document.getElementById("output").innerHTML="";
    for (i = 0 ; i<cities.length ;i++){
        document.getElementById("output").innerHTML += i + 1 + ") " + cities[i] + "<br>"; 
    }
}
// addCity
function addCity()
{
    let city = document.getElementById("input").value
    if(!city)
    {
       alert('Please enter a valid City Name');
       return; 
    }
    else
    {
        city = city.charAt(0).toUpperCase()+city.slice(1).toLowerCase();

            // check if the city is already in the list or not
           if(cities.indexOf(city)== -1 ) 
           {
               cities.push(city);
               document.getElementById("output").innerHTML = "Your city "+`<span class='text-capitalize' style='color:black;'>  '${city}'  </span>`+"  has been added successfully"; 
           }
           else
           {
             alert(`${city} is already added`);    
           }  
    }                     
    // clear input field after adding city
    document.getElementById("input").value="";
}

// check city
function checkCity()
{
    city = document.getElementById("input").value;
    if(!city)
    {
       alert('Please enter a valid City Name');
       return; 
    }
    city = city.charAt(0).toUpperCase()+city.slice(1).toLowerCase();
    // check if the city is already in the list or not
   if(cities.indexOf(city)!= -1 ) 
   {
       document.getElementById("output").innerHTML = "Your city "+`<span class='text-capitalize' style='color:black;'>  '${city}'  </span>`+"  is already in our list"; 
   }
   else
   {
     alert(`'${city}' doesn't exist in our list. You can add your city by clicking Add City Button.`);    
   }  
    // clear input field after adding city
    document.getElementById("input").value="";
}

// find word
function findWord()
{
    let text = document.getElementById('input').value;
    let origstr =  document.getElementById("origstring").innerText;
    let match = origstr.match(text);
    if(!match)
    {
      alert(`The string "${text}" does not exist in the original string`);
    }else{
      alert(`"${text}" exists in the original string.`);
    }  
    // clear input field after adding city
    document.getElementById("input").value="";
}

// Replace word
function replaceWord(){
  let input = document.getElementById('input').value;
     let input2 = prompt("enter word to replace")
         let replacetext = document.getElementById('origstring').innerText;
           let newStr = replacetext.replaceAll(input,input2);
               document.getElementById('output').innerHTML = newStr;
  // clear input field after adding city
  document.getElementById("input").value="";
}

// clear input 
function clearInput(){
    document.getElementById("input").value = "";
}

// clear output 
function clearoutput() {
    document.getElementById("output").innerHTML = "";
}