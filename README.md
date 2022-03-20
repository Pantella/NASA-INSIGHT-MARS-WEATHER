NASA INSIGHT MARS WEATHER
-------------------------

This project is thought to be a Mars weather checker: click the button and some information about the surface temperature are shown.

The data are collected by the NASA’s InSight Mars lander located at Elysium Planitia, a flat, smooth plain near Mars’ equator.

When the button is clicked a request is sent to "InSight: Mars Weather Service API": the API is maintained and provided by NASA Jet Propulsion Laboratory and Cornell University.
Data are provided as JSON and, after being validated and filtered, are shown in the bottom side of the page through DOM manipulation and Gsap animation.
If data validation fails an alert is shown to warn about it.

Unfortunately sometimes, because of InSight needing to menage power use or temporarily Mars bad weather conditions, data are not available (causing the alert to be shown).

The following were used for the project:

- NPM package manager
- PARCEL bundler
- gh-pages package for GitHub Pages publishing
- ThreeJs package for 3D graphic animation
- Gsap package for animation

I would like to thank NASA for making some of its data accessible through API, one of which i used for this project, as well as 3D resources like the Mars texture used for the background planet animation.

Here some link to NASA's resources used in this project:

- https://api.nasa.gov/
- https://nasa3d.arc.nasa.gov/
- https://api.nasa.gov/assets/insight/InSight%20Weather%20API%20Documentation.pdf

PS: the layout has been inspired by this page https://mars.nasa.gov/insight/weather/

I hope you appreciate this project

Ciao

Giacomo