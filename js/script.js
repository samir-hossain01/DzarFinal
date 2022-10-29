particlesJS("particles-js", { "particles": { "number": { "value": 600, "density": { "enable": true, "value_area": 1122.388442605866 } }, "color": { "value": "#330091" }, "shape": { "type": "edge", "stroke": { "width": 0, "color": "#5637e3" }, "polygon": { "nb_sides": 12 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.9219619349976756, "random": true, "anim": { "enable": true, "speed": 3.0046856855149766, "opacity_min": 1, "sync": false } }, "size": { "value": 2, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 64.13648243462092, "color": "#7c7d79", "opacity": 0.1843923869995351, "width": 0.9620472365193136 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": true, "rotateX": 1443.0708547789707, "rotateY": 1603.4120608655228 } } }, "interactivity": { "detect_on": "window", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 24.362316369040357, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 24, "size": 500, "duration": 0.7308694910712106, "opacity": 8, "speed": 3 }, "repulse": { "distance": 32.48308849205381, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": false });
var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; }
    requestAnimationFrame(update);
};
requestAnimationFrame(update);;