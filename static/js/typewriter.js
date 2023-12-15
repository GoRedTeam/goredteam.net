var app = document.getElementById('console');
var typewriter = new Typewriter(app, {
    loop: true
});
typewriter.typeString('')
    .start();