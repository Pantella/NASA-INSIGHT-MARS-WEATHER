import Gestore from './gestore/gestore';

document.addEventListener('DOMContentLoaded',()=>{

    async function makeRequest() {
        let data = await myGestore.fetchApi();

        let isDataValid = myGestore.checkJson( data );
        console.log(`Check: ${isDataValid}`);

        isDataValid ? myGestore.populateCards(data) : myGestore.exposeAlert() ;
    }

    let subBtn = document.querySelector('#sub-btn');

    const myGestore = new Gestore();

    subBtn.addEventListener('click',(evt)=>{
        evt.preventDefault();

        makeRequest();

        /* !!! creare classe "gestore" che:
            - metodo che esegue request alla API e riceve response come JSON; parse JSON e restituisce oggetto JSON
            - metodo che riceve l'oggetto JSON e verifica se contiene dati
            - metodo che espone un alert sulla pagina per avvisare che non ci sono dati al momento
            - metodo che nasconde l'alert
            - metodo che riceve l'oggetto JSON ed inserisce i dati nelle card
            - metodo che fa comparire con Gsap le card
         */

    });


});


