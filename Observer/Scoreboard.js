// the scoreboard object
var scoreboard = {
    // HTML element to be updated
    elementP1: document.getElementById('app_player1'),
    elementP2: document.getElementById('app_player2'),
    // update the score display
    update: function (score) {

        var i;
        for (i in score) {
            if (score.hasOwnProperty(i)) {
                if (i == 'Jugador1') {
                    refreshScoreboard(this.elementP1, score[i]);
                }

                if (i == 'Jugador2') {
                    refreshScoreboard(this.elementP2, score[i]);
                }
            }
        }

    }
};

var refreshScoreboard = function(element, i) {
    element.style['width'] = i / 3 + '%';
    element.setAttribute('aria-valuenow', i);
    element.innerHTML = i;
};