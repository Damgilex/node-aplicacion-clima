const axios = require('axios');

const getLugarLatLng= async(dir)=>{
    const encodeUrl = encodeURI(dir);
    console.log(encodeUrl);

    const instance = axios.create({
        baseURL:`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {'X-RapidAPI-Key':'1cf0441984msh9995aade60ec49cp151ae4jsn61bb2b583dd7'}
    });

    const resp = await instance.get();
    if(resp.data.Results.length === 0){
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const {lat} = data;
    const lng = data.lon;

    return{
        direccion,
        lat,
        lng,
    }
}

module.exports = {
    getLugarLatLng,
}

//EJEMPLO USANDO CALLBACK
// const encodeUrl = encodeURI(argv.direccion);
// console.log(encodeUrl);

// const instance = axios.create({
//     baseURL:`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
//     headers: {'X-RapidAPI-Key':'1cf0441984msh9995aade60ec49cp151ae4jsn61bb2b583dd7'}
// });

// instance.get()
// .then (resp=>{
//     console.log(resp.data);
// })
// .catch(err=>{
//     console.log('Error!',err);
// })