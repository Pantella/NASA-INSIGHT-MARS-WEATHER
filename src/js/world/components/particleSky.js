import { Points, PointsMaterial, BufferGeometry, BufferAttribute } from "three/build/three.module";

function createParticleSky() {
    
    const geometry = new BufferGeometry();
    const material = new PointsMaterial({
        color: '#fff',
        sizeAttenuation: true,
        size: 0.04
    });

    const particlesCnt = 5000;
    const particlesPosArray = new Float32Array(particlesCnt*3);

    for (let i=0;i<particlesCnt*3;++i) {
        particlesPosArray[i*3+0] = (Math.random()-0.5)*20;
        particlesPosArray[i*3+1] = (Math.random()-0.5)*25;
        particlesPosArray[i*3+2] = (-Math.random())*10;
    }

    geometry.setAttribute('position', new BufferAttribute(particlesPosArray,3));

    const sky = new Points(geometry, material);

    return sky
}

export { createParticleSky }