
const axios = require('axios');

const getClima = async(lat, lng) =>{
  
    const resp= await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7c0530393414676237a500b8cd32ee2d&units=metric`);

    return resp.data.main.temp;

}




module.exports = {
    getClima
}