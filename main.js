const request = require('request');
const { Band } = require('./band')


const getBand = (band) => {
    const URL = `http://www.theaudiodb.com/api/v1/json/1/search.php?s=${band}`;
    request(URL, (error, response, body) => {
        if (error) {
            console.log('Ocurrió un error');
        } else {
            //console.log('No hay error');
            //console.log(response.statusCode);
            //Parse JSON
            const res = JSON.parse(body);
            if (res.artists !== null) {
                // console.log(res.artists[0].strArtist);
                // console.log(res.artists[0].strWebsite);
                const { strArtist, strWebsite, intFormedYear, strGenre } = res.artists[0];
                const newBand = new Band(
                    strArtist,
                    strWebsite,
                    intFormedYear,
                    strGenre);
                console.log(newBand)
            } else {
                console.log(`No encontré a ${band}, o está mal escrita`);
            }
        }
    });
};

getBand('Juan Gabriel');
getBand('Morat');
getBand('Los Temerarios');
getBand('The National')