


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8d69dd3d51msh729a340c67dab6ep1f4c2ajsn453b53fccd60',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather=(city)=>{
    cityName.innerHTML=city;
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
	.then(response => response.json())
	.then((response) => {

         
        temp.innerHTML = response.temp
    
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        
    
    
    
    })
	.catch(err => console.error(err));

    
}



submit.addEventListener('click', (e)=>{
    e.preventDefault();
    getWeather(city.value);

})

getWeather("Indore");


async function indore(){

    let res = await(
            fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi',options).then(response => response.json()).then(function(items){
                

                humidity1.innerHTML = items.temp;
                cloud_pct1.innerHTML = items.cloud_pct;
                temp1.innerHTML = items.temp
                feels_like1.innerHTML = items.feels_like
                min_temp1.innerHTML = items.min_temp
                max_temp1.innerHTML = items.max_temp
                wind_speed1.innerHTML = items.wind_speed
                // wind_degrees1.innerHTML = items.wind_degrees
                // sunrise1.innerHTML = items.sunrise
                // sunset1.innerHTML = items.sunset


                
            })
            )
        return res;
}

async function boston(){

    let res = await(
            fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=boston',options).then(response => response.json()).then(function(items){
              

                humidity2.innerHTML = items.temp;
                cloud_pct2.innerHTML = items.cloud_pct;
                temp2.innerHTML = items.temp
                feels_like2.innerHTML = items.feels_like
                min_temp2.innerHTML = items.min_temp
                max_temp2.innerHTML = items.max_temp
                wind_speed2.innerHTML = items.wind_speed
                // wind_degrees2.innerHTML = items.wind_degrees
                // sunrise1.innerHTML = items.sunrise
                // sunset1.innerHTML = items.sunset


                
                
            })
            )
        return res;
}

async function bhopal(){

    let res = await(
            fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bhopal',options).then(response => response.json()).then(function(items){
           

                humidity3.innerHTML = items.temp;
                cloud_pct3.innerHTML = items.cloud_pct;
                temp3.innerHTML = items.temp
                feels_like3.innerHTML = items.feels_like
                min_temp3.innerHTML = items.min_temp
                max_temp3.innerHTML = items.max_temp
                wind_speed3.innerHTML = items.wind_speed
                // wind_degrees2.innerHTML = items.wind_degrees
                // sunrise1.innerHTML = items.sunrise
                // sunset1.innerHTML = items.sunset


    
                
            })
            )
        return res;
}

async function lucknow(){

    let res = await(
            fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lucknow',options).then(response => response.json()).then(function(items){

                humidity4.innerHTML = items.temp;
                cloud_pct4.innerHTML = items.cloud_pct;
                temp4.innerHTML = items.temp
                feels_like4.innerHTML = items.feels_like
                min_temp4.innerHTML = items.min_temp
                max_temp4.innerHTML = items.max_temp
                wind_speed4.innerHTML = items.wind_speed
                // wind_degrees2.innerHTML = items.wind_degrees
                // sunrise1.innerHTML = items.sunrise
                // sunset1.innerHTML = items.sunset


                
            })
            )
        return res;
}

async function kolkata(){

    let res = await(
            fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata',options).then(response => response.json()).then(function(items){
                

                humidity5.innerHTML = items.temp;
                cloud_pct5.innerHTML = items.cloud_pct;
                temp5.innerHTML = items.temp
                feels_like5.innerHTML = items.feels_like
                min_temp5.innerHTML = items.min_temp
                max_temp5.innerHTML = items.max_temp
                wind_speed5.innerHTML = items.wind_speed
                // wind_degrees2.innerHTML = items.wind_degrees
                // sunrise1.innerHTML = items.sunrise
                // sunset1.innerHTML = items.sunset


              
                
            })
            )
        return res;
}
async function mumbai(){

    let res = await(
            fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai',options).then(response => response.json()).then(function(items){
               

                humidity6.innerHTML = items.temp;
                cloud_pct6.innerHTML = items.cloud_pct;
                temp6.innerHTML = items.temp
                feels_like6.innerHTML = items.feels_like
                min_temp6.innerHTML = items.min_temp
                max_temp6.innerHTML = items.max_temp
                wind_speed6.innerHTML = items.wind_speed
                // wind_degrees2.innerHTML = items.wind_degrees
                // sunrise1.innerHTML = items.sunrise
                // sunset1.innerHTML = items.sunset


                
                
            })
            )
        return res;
}

// Top city weather information

const mumbai_top_city= document.getElementById('mumbai_top_city');
const bangalore_top_city= document.getElementById('bangalore_top_city');
const pune_top_city= document.getElementById('pune_top_city');

mumbai_top_city.addEventListener('click', ()=> {

    async function mumbai(){
        cityName.innerHTML="Mumbai";
        let res = await

        (
                fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai',options).then(response => response.json()).then(function(response)
                {
                    
                    temp.innerHTML = response.temp
                    feels_like.innerHTML = response.feels_like
                    humidity.innerHTML = response.humidity
                    min_temp.innerHTML = response.min_temp
                    max_temp.innerHTML = response.max_temp
                    wind_speed.innerHTML = response.wind_speed
                    wind_degrees.innerHTML = response.wind_degrees
                    sunrise.innerHTML = response.sunrise
                    sunset.innerHTML = response.sunset
          
                })
        )
            return res;
    
}
mumbai()
})

bangalore_top_city.addEventListener('click', ()=> {

    async function bangalore(city){
        cityName.innerHTML=city;
        let res = await

        (
                fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,options).then(response => response.json()).then(function(response)
                {
                    
                    temp.innerHTML = response.temp
                    feels_like.innerHTML = response.feels_like
                    humidity.innerHTML = response.humidity
                    min_temp.innerHTML = response.min_temp
                    max_temp.innerHTML = response.max_temp
                    wind_speed.innerHTML = response.wind_speed
                    wind_degrees.innerHTML = response.wind_degrees
                    sunrise.innerHTML = response.sunrise
                    sunset.innerHTML = response.sunset
    
                                 
                })
        )
            return res;
    
}
bangalore('Bangalore')
})
pune_top_city.addEventListener('click', ()=> {

    async function pune(city){
        cityName.innerHTML=city;
        let res = await

        (
                fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,options).then(response => response.json()).then(function(response)
                {
                    
                    temp.innerHTML = response.temp
                    feels_like.innerHTML = response.feels_like
                    humidity.innerHTML = response.humidity
                    min_temp.innerHTML = response.min_temp
                    max_temp.innerHTML = response.max_temp
                    wind_speed.innerHTML = response.wind_speed
                    wind_degrees.innerHTML = response.wind_degrees
                    sunrise.innerHTML = response.sunrise
                    sunset.innerHTML = response.sunset
    
                                    
                })
        )
            return res;
    
}
pune('Pune');
})




indore()
boston()
bhopal()
lucknow()
kolkata()
mumbai()

