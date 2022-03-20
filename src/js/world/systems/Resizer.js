import gsap from 'gsap/all';


const setSize = (container, camera, renderer) => {
    camera.aspect = container.clientWidth/container.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
};

const setCamPosition = (camera, container, objectsDistance)=>{
    camera.position.y = -(window.scrollY/container.clientHeight)*(objectsDistance);
};


class Resizer {
    constructor(container, camera, renderer, objectsDistance,scene,touchDevice) {

        this.scrollPrec = 0;

        this.onMouseMove = (e)=>{
            const x = e.clientX
            const y = e.clientY
        
            // utilizzare scene e non mesh per non bloccare la rotazione
            gsap.to(scene.rotation, {
                y: gsap.utils.mapRange(0, window.innerWidth, 0.2, -0.2, x),
                x: gsap.utils.mapRange(0, window.innerHeight, 0.2, -0.2, y),
            })
        }

        // set initial size
        setSize(container, camera, renderer);

        window.addEventListener('resize',()=>{
            // set the size again if a resize occurs
            setSize(container, camera, renderer);
        });

        if ( !touchDevice ) {
            window.addEventListener('scroll',()=>{

                setCamPosition(camera, container, objectsDistance);
    
            });
    
            window.addEventListener('mousemove', this.onMouseMove);
        }

        
    }

}

export {Resizer};