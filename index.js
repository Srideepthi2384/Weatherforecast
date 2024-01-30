let searchImp = document.querySelector('.searchbox');
let city = document.querySelector('.weathercity');
let day = document.querySelector('.weatherday');
let humidity = document.querySelector('humidity>.value');
let wind = document.querySelector('.wind>.value');
let pressure = document.querySelector('.pressure>.value');
let image = document.querySelector('.img1');
let temperature = document.querySelector('.temperature')
let weatherAPIkey= '6045babfe1d8c9c637c7b09324f3b9f1';
let weatherCity ='https://api.openweathermap.org/data/2.5/weather?units=metric&appid='+weatherAPIkey;


let getWeatherCityName = async (city) =>{
    let endpoint = weatherCity +'&q=' +city;
    let response = await fetch(endpoint);
    let weather = await response.json();
    return weather;
}

searchImp.addEventListener('keydown', async(e)=>{
    if(e.keyCode === 13){
        let weather = await getWeatherCityName(searchImp.value);
        update(weather);
    }
})
 
let update = (data) =>{
city.textContent = data.name + ',' +data.sys.country;
day.textContent = dayofweek();
}

let dayofweek = () =>{
    return new Date().toLocaleDateString('en-EN',{'weekday': 'long'});
}
