// the scoreboard object
var scoreboard = {
    // HTML element to be updated
    elementP1: document.getElementById('app_player1'),
    elementP2: document.getElementById('app_player2'),
    // update the score display
    update: function (score) {

        //TODO: Refrescar marcador para cada jugador

    }
};

var refreshScoreboard = function(element, i) {
    element.style['width'] = i / 3 + '%';
    element.setAttribute('aria-valuenow', i);
    element.innerHTML = i;
};