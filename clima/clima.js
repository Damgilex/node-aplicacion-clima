const axios = require('axios');//Para hacer peticion
const convert = require('convert-units');//para convertir unidades 

const getClima=async(lat, lng)=>{
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c87dc5092539a847b89225495314094e`)
    return convert(resp.data.main.temp).from('K').to('F').toFixed(2);
}

module.exports = {
    getClima
}