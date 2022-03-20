import { SphereGeometry, MeshStandardMaterial, Mesh, TextureLoader, MathUtils } from './../../../../node_modules/three/build/three.module.js';

// import gsap from 'gsap/all';
// import ScrollTrigger from 'gsap/ScrollTrigger';

function setMaterial() {

    marsImageUrl = new URL('./../../../images/mar0kuu2.jpg', import.meta.url);

    const texture = new TextureLoader().load(marsImageUrl);
    const material = new MeshStandardMaterial({
        color: "#ff7613d9",
        map: texture
    });

    return material
}


function createSphere() {

    const geometry = new SphereGeometry(1);
    const material = setMaterial();
    const sphere = new Mesh(geometry,material);

    sphere.position.y = 0.2;

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