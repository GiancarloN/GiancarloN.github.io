var basicTimeline = anime.timeline();

basicTimeline
  .add({
    targets: '#header',
    delay: 500,
    opacity: [ { value: [0, 1] } ]
  })
  .add({
    targets: '#text',
    delay: 500,
    opacity: [ { value: [0, 1] } ]
  })

var morphing = anime({
  targets: '#morphing .polymorph',
  points: [
    //start
    { value: '25 0 25 0 25 0 25 50 25 50 25 50 25 50 25 0'},
    //Triangle
    { value: '25 0 25 0 25 0 50 50 50 50 0 50 0 50 25 0'},
    //Square
    { value: '25 0 25 0 50 25 25 50 25 50 0 25 0 25'},
    //Pentagon
    { value: '25 0 25 0 48.78 17.27 39.69 45.23 39.69 45.23 10.31 45.23 1.22 17.27 25 0'},
    //Hexagon
    { value: '25 0 46.65 12.5 46.65 37.5 25 50 25 50 3.35 37.5 3.35 12.5 25 0'},
    //Heptagon
    { value: '25 0 44.55 9.41 49.37 30.56 35.85 47.52 14.15 47.52 0.63 30.56 5.45 9.41 25 0'},
    //Octagon
    { value: '25 0 42.68 7.32 50 25 42.68 42.68 25 50 7.32 42.68 0 25 7.32 7.32'},
    //Return to 0
    { value: '25 0 25 0 25 0 25 50 25 50 25 50 25 50 25 0'},
  ],
  easing: 'easeOutQuad',
  duration: 8000,
  loop: true
}); 
