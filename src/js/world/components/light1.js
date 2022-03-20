import {DirectionalLight, PointLight, SpotLight} from "three/build/three.module";

function createLightFirst() {

    const light = new DirectionalLight('#FFF',6);
    light.position.set(0,0,3);

    return light
}

export {createLightFirst};