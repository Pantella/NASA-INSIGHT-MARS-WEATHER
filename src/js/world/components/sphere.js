import { SphereGeometry, MeshStandardMaterial, Mesh, OctahedronGeometry, TextureLoader, MeshBasicMaterial,MathUtils } from './../../../../node_modules/three/build/three.module.js';

import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';

function setMaterial() {

    marsImageUrl = new URL('./../../../images/mar0kuu2.jpg', import.meta.url);

    const texture = new TextureLoader().load(marsImageUrl);
    
    const material = new MeshStandardMaterial({
        // color: "#D18611",
        map: texture
    });

    return material
}


function createSphere(objectsDistance, distanceMultiplier,touchDevice) {

    const geometry = new SphereGeometry(1);

    const material = setMaterial();

    const sphere = new Mesh(geometry,material);

    // sphere.position.x = 1;
    sphere.position.y = -0.2;
    // sphere.position.z = 0;

    if ( !touchDevice ) {

        // GSAP
        /* gsap.registerPlugin(ScrollTrigger)
        ScrollTrigger.defaults({
            toggleActions: "restart pause resume none",
            // markers: {startColor: "white", endColor: "white", fontSize: "18px", indent: 10},
            scrub: 1,
            ease: 'none',
        }); */

        // prendo sections e converto in array
        /* const sections = gsap.utils.toArray('section');

        gsap.to(sphere.position, {
            y: -13,
            ease: 'none',
            scrollTrigger: {
            trigger: 'div.container',
            start: "25% bottom"
            },
        })
        gsap.to(sphere.scale, {
            y: 1.2,
            x: 1.2,
            z: 1.2,
            ease: 'none',
            scrollTrigger: {
            trigger: sections[1]
            },
        }) */

        let rotaz = MathUtils.degToRad(180);

        /* gsap.to(sphere.rotation, {
            z: '+='+rotaz,
            ease: 'none',
            scrollTrigger: {
            trigger: sections[1]
            },
        }) */
        
    }


    let orbitVel=0;

    sphere.tick = (delta)=>{

      let rotay = MathUtils.degToRad(30);
      sphere.rotation.y += (rotay*delta);

      orbitVel += MathUtils.degToRad(0.5);
      sphere.position.z = Math.cos(orbitVel)*0.5+1;
      sphere.position.x = Math.sin(orbitVel)*0.5+1;

    };

    return sphere
}

export {createSphere};