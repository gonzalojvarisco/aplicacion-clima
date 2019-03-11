const axios = require('axios');

const getLugarLatLng = async (dir) =>{

    let encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {'X-RapidAPI-Key': 'e938c87157msh6d74c16576fb306p135d28jsn3f76d624924e'}
      });
    
      const resp = await instance.get();

      if(resp.data.Results.length === 0){
          throw new Error(`No hay resultados para ${direccion}`);
          
      }

      const data = resp.data.Results[0];
      const direccion = data.name;
      const lat = data.lat;
      const lng = data.lon;
    

        return {
            direccion,
            lat,
            lng
        }
}

module.exports = {
    getLugarLatLng
}

