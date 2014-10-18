var mediator = {

    // all the players
    players: {},
    started: false,

    //
    setup: function () {
        var players = this.players;
        players.home = new Player('Home');
        players.guest = new Player('Guest');
        this.started = false;
    }

    //TODO: Añadir funcionalidad al mediator

};