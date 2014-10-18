// Player y game van a poder publicar eventos
makePublisher(Player.prototype);
makePublisher(game);

//TODO: Suscribir game y player a los eventos que toque

window.onkeypress = game.handleKeypress;

new Player('Jugador1',  '1');
new Player('Jugador2',  '0');