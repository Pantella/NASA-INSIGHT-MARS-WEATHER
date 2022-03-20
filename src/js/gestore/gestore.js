import gsap from 'gsap';

import {translateMonth,getFakeData} from './utility';

class Gestore {
    constructor() {
        this.basicUrl = 'https://api.nasa.gov/insight_weather/?';
        this.apiKey = 'api_key=DEMO_KEY';
        this.feedType = 'feedtype=json';
        this.versionApi = 'ver=1.0';

        this.daysCards = [
            document.querySelector('#today'),
            document.querySelector('#firstDay'),
            document.querySelector('#secondDay'),
            document.querySelector('#thirdDay')
        ]
    }

    async fetchApi() {
        const queryUrl = `${this.basicUrl}${this.apiKey}&${this.feedType}&${this.versionApi}`;

        // console.log(`queryUrl: ${queryUrl}`);

        let askNasa = await fetch(queryUrl);

        if ( askNasa.ok ) {
            // console.log(`Fetch succeeded: ${askNasa.status}`);
            // console.log(`Data: ${JSON.parse(await askNasa.text())}`);
            // console.log(`Data: ${await askNasa.json()}`);
            return await askNasa.json()
        } else {
            // console.log(`ERROR: ${askNasa.status}`);
            return false
        }
    }

    checkJson(dataObj) {

        const isValid = dataObj ? true : false ;
        
        if ( isValid ) {
            // console.log('valid data');
            return dataObj.sol_keys.length>0 ? true : false
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

        this.exposeCards();
    }

    hideAlert() {
        document.querySelector('.alert').classList.remove('alert');
    }

    populateCards(dataObj) {

        let mySols = dataObj.sol_keys.slice(3).reverse();
        let dayCalendar = new Date();

        mySols.forEach( (element,index)=>{

            const lowTemp = dataObj[element].AT.mn;
            const maxTemp = dataObj[element].AT.mx;

            console.log('sol: '+element);

            this.daysCards[index].querySelector('.card-sol').textContent = `Sol ${element}`;
            this.daysCards[index].querySelector('.card-date').textContent = `${translateMonth(dayCalendar.getMonth())}, ${(dayCalendar.getDate()-index)} ${dayCalendar.getFullYear()}`;
            this.daysCards[index].querySelector('.card-max').textContent = `High:${maxTemp}°F`;
            this.daysCards[index].querySelector('.card-min').textContent = `Low:${lowTemp}°F`;

        });

        this.exposeCards();

    }

    exposeCards() {
        let exposeCards = gsap.timeline();

        exposeCards.to(
            this.daysCards[0],
            {
                duration: 1,
                ease: "power2.out",
                opacity: 1
            }
        ).to(
            this.daysCards[1],
            {
                duration: 1,
                ease: "power2.out",
                opacity: 1
            },
            '>'
        ).to(
            this.daysCards[2],
            {
                duration: 1,
                ease: "power2.out",
                opacity: 1
            },
            '>'
        ).to(
            this.daysCards[3],
            {
                duration: 1,
                ease: "power2.out",
                opacity: 1
            },
            '>'
        )
    }
}

export default Gestore