module.exports = {

    calculateSpread: function (game) {
        if (game.homeScore == null || game.awayScore == null || game.homeScore == '' || game.awayScore == '') {
            console.log('game has some null scores');
            return null;
        }
        var score = parseInt(game.homeSpread, 10) + parseInt(game.homeScore, 10);
     /*   console.log('Home Score: '+game.homeScore+' Home Spread: '+game.homeSpread+' Total score: '+score);*/
        
        if (score > game.awayScore) {
            //console.log('HomeTeam wins');
            return game.homeTeam;
        } else if (score == game.awayScore) {
            //console.log('Game is pushed');
            return 'Push';
        } else if (score < game.awayScore) {
            //console.log('AwayTeam wins');
            return game.awayTeam;
        } else{
            throw new Error('Something bad happened on calculations');
        }
    },

    checkWinner: function (selection,lock,game) {
        if(selection.pick === game.winner && game.winner !== 'Push' && lock!==true){
            return 2; 
        }else if(game.winner == 'Push'){
            return 1;
        }
        else if(selection.pick === game.winner && game.winner !== 'Push' && lock===true){
            return 4;
        }
        else if(selection.pick !== game.winner){
            return 0;
        }
    }
};