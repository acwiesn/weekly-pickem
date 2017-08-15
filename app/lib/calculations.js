module.exports = {

    calculateSpread: function (game) {
        if (game.homeScore == null || game.awayScore == null || game.homeScore == '' || game.awayScore == '') {
            console.log('game has null some scores');
            return null;
        }
        var score = parseInt(game.homeSpread, 10) + parseInt(game.homeScore, 10);
        console.log(score);
        if (score > game.awayScore) {
            console.log('HomeTeam wins');
            return game.homeTeam;
        } else if (score == game.awayScore) {
            console.log('Game is pushed');
            return 'Push';
        } else if (score < game.awayScore) {
            console.log('AwayTeam wins');
            return game.awayTeam;
        } else{
            throw new Error('Something bad happened on calculations');
        }
    },

    checkWinner: function (y) {
        return y - 2;
    }
};