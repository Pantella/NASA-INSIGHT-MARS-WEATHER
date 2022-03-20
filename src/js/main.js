import {World} from './world/world';
import Gestore from './gestore/gestore';

import {translateMonth,getFakeData} from './gestore/utility';

document.addEventListener('DOMContentLoaded',()=>{

    async function makeRequest() {
        let data = await myGestore.fetchApi();
        // let data = getFakeData();        /* uncomment to use fake test data instead of fetch from NASA API */
        // let data = null;                 /* uncomment to test a failed fetching from NASA API */

        let isDataValid = myGestore.checkJson( data );
        console.log(`Check: ${isDataValid}`);

        isDataValid ? myGestore.populateCards(data) : myGestore.exposeAlert() ;
    }

    const container = document.querySelector('#scene-container');
    const world = new World(container);

    world.start();

    let subBtn = document.querySelector('#sub-btn');

    const myGestore = new Gestore();

    subBtn.addEventListener('click',(evt)=>{

        evt.preventDefault();

        makeRequest();

    });


});


