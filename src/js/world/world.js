import { createScene } from "./components/scene.js";
import { createCamera } from "./components/camera.js";

import { ScenePopulator } from "./systems/ScenePopulator.js";

import { Resizer } from "./systems/Resizer.js";
import { createRenderer } from "./systems/renderer.js";
import { Loop } from "./systems/Loop.js";

let camera;
let scene;
let renderer;
let loop;

const isTouchDevice = ()=>{
    return ( ('ontouchstart' in window) || (navigator.maxTouchPoints>0) || (navigator.msMaxTouchPoints>0) )
}; 

// console.log('isTouchDevice: '+isTouchDevice());

let touchDevice;
const objectsDistance = 3.2;

class World {

    constructor(container) {

        touchDevice = isTouchDevice();
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        loop = new Loop(camera, scene, renderer);
        container.append(renderer.domElement);

        const scenePopulator = new ScenePopulator(scene, loop);
        scenePopulator.populate();

        const resizer = new Resizer(container, camera, renderer, objectsDistance,scene,touchDevice);
    }

    start() {
        loop.start();
    }

    stop() {
        loop.stop();
    }
    
    render() {
        renderer.render(scene, camera);
    }

}

export {World};