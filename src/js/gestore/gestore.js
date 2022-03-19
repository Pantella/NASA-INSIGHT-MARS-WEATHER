class Gestore {
    constructor() {
        this.basicUrl = 'https://api.nasa.gov/insight_weather/?';
        this.apiKey = 'api_key=DEMO_KEY';
        this.feedType = 'feedtype=json';
        this.versionApi = 'ver=1.0';

        this.todayCard = document.querySelector('#today');
        this.firstDayCard = document.querySelector('#firstDay');
        this.secondDayCard = document.querySelector('#secondDay');
        this.thirdDayCard = document.querySelector('#thirdDay');
    }

    async fetchApi() {
        const queryUrl = `${this.basicUrl}${this.apiKey}&${this.feedType}&${this.versionApi}`;

        console.log(`queryUrl: ${queryUrl}`);

        let askNasa = await fetch(queryUrl);

        if ( askNasa.ok ) {
            console.log(`Fetch succeeded: ${askNasa.status}`);
            // console.log(`Data: ${JSON.parse(await askNasa.text())}`);
            // console.log(`Data: ${await askNasa.json()}`);
            return await askNasa.json()
        } else {
            console.log(`ERROR: ${askNasa.status}`);
            return false
        }
    }

    checkJson(dataObj) {

        const isValid = dataObj ? true : false ;
        
        if ( isValid ) {
            console.log('valid data');
            return dataObj.sol_keys.lenght>0 ? true : false
        } else {
            return isValid
        }
    }

    exposeAlert() {
        let alertElement = document.createElement('div');
        let alertPara = document.createElement('p');

        const alertText = 'mmmm...no one seems to answer from mars!!!';

        alertPara.textContent = alertText;

        alertElement.classList.add('alert');
        alertElement.appendChild(alertPara);

        document.querySelector('body').appendChild(alertElement);
    }

    hideAlert() {
        document.querySelector('.alert').classList.remove('alert');
    }

    populateCards(dataObj) {

        let mySols = dataObj.sol_keys.slice((dataObj.sol_keys.lenght-3));

        for ( sol of mySols ) {
            
        }

    }

    exposeCards() {}
}

export default Gestore