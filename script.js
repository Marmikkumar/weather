
        const apikey = "aa6156f7f3e60ddad72911a94219413d";
        const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=matric&q=";
        const city= document.querySelector(".search");
        const image= document.querySelector(".cloud");
        
        // const url="https://api.openweathermap.org/data/2.5/weather?q=London&appid=29c90b9891964fa5d51ceebd08ff0d78&unit=matrix";

        async function checkweather(cityname){
            const response= await fetch(apiurl+cityname +`&apikey=${apikey}`);
            

            if(response.status=="404"){
                document.querySelector(".error").style.display="block";
                document.querySelector(".no-error").style.display="none";
            }
            else{
                document.querySelector(".error").style.display="none";
                document.querySelector(".no-error").style.display="block";
                var data= await response.json();

                const cel=data.main.temp-273;
    
                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temp").innerHTML=Math.round(cel)+"°c";
                document.querySelector(".speed").innerHTML=data.wind.speed+"km/hr";
                document.querySelector(".humidity-per").innerHTML=data.main.humidity+"%";
                

                if(data.weather[0].main == "Clouds"){
                    image.src="images/clouds.png";
                }
                else if(data.weather[0].main == "Rain"){
                    image.src="./images/rain.png";

                }
                else if(data.weather[0].main == "Drizzle"){
                    image.src="./images/drizzle.png";

                }
                else if(data.weather[0].main == "Mist"){
                    image.src="./images/mist.png";
                    
                }
                else if(data.weather[0].main == "Snow"){
                    image.src="./images/snow.png";
                }
                else{
                    image.src="./images/clear.png";
                }
            
            
                
            }
        }

        const handleclick=()=>{
            checkweather(city.value);
        }
        
