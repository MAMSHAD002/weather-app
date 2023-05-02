let search= "";
async function fetchData(city){
    const apiKey = "519fcca42d573027b800505d42cd4b55";
    try{
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='
        + city 
        + "&units=metric&appid=" 
        + apiKey);
        const data = await response.json();
        displayWeather(data);
        console.log(data);


        function displayWeather(data){
            const {name} = data;
            const {  icon , description } = data.weather[0];
            const { temp , humidity } = data.main;
            const{ speed } = data.wind;
            document.getElementById("city").innerHTML = "Weather in " + name;
            document.getElementById('icon').src = 
            "https://openweathermap.org/img/wn/" + icon + ".png";
            document.getElementById('description').innerHTML = description;
            document.getElementById('temp').innerHTML = temp + "°C";
            document.getElementById('humidity').innerHTML =" humidity :"+ humidity + "%";
            document.getElementById('wind').innerHTML ="Wind speed:"+ speed + "km/h";
            console.log(name , icon, description , temp ,humidity , speed);

        }
    
       

   
    } catch(err){
        // console.log(err)
    
    
    }

    
  
}

document.querySelector('.search button')
        .addEventListener("click", function(){
            fetchData(document.querySelector(".search-bar").value) ;
        });

        document.querySelector('.search-bar').addEventListener("keypress", function(){
           if(event.key === 'Enter'){
            fetchData(document.querySelector(".search-bar").value) ;
           }
        } )


// fetchData('dhaka');


