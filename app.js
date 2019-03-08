const axios = require('axios');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demmand: true
    }
}).argv;

let encodedUrl = encodeURI(argv.direccion);

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=YOUR_API_KEY`)
.then(resp => {

    let location

})
.catch(e => console.log('Error!', e));