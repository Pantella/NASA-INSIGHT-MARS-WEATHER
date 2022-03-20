import { createSphere } from "./../components/sphere.js";
import { createParticleSky } from './../components/particleSky';

import { createLightFirst } from "../components/light1.js";

class ScenePopulator {
    constructor(scene, loop) {

        this.scene = scene;
        this.sphere = createSphere();
        this.sky = createParticleSky();
        this.lightSphere = createLightFirst();

        loop.updatables.push(this.sphere);
        
    }

    populate() {
        this.scene.add(this.sphere, this.sky, this.lightSphere);
    }
}

export { ScenePopulator }