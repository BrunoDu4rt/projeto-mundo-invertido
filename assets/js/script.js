window.addEventListener('click', function(){
    const music = document.getElementById('music');
    music.play();
    music.volume = 0.2;
})

const switchThemeButton = document.getElementById('switch-theme-button');

switchThemeButton.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
    let song = "";
    const theme = document.body.classList[0];
    if(theme === 'light-theme') {
        song = 'normal-world.mpeg';
    }
    else {
        song = 'inverted-world.mpeg';
    }

    const music = document.getElementById('music');
    music.src = `assets/audio/${song}`;
    music.play();
    music.volume = 0.2;


})

