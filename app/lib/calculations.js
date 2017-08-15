module.exports = {

    calculateSpread: function (game) {
        console.log(game);
        var score = parseInt(game.homeSpread,10)+parseInt(game.homeScore,10);
        
        console.log(score);
        if(game.homeScore==null||game.awayScore==null){
            return null;
        }else if(score>game.awayScore){
            console.log('HomeTeam wins');
            return game.homeTeam;
        }
        else if(score==game.awayScore){
            console.log('Game is pushed');
            return 'Push';
        }
        else if(score<game.awayScore){
            console.log('AwayTeam wins');
            return game.awayTeam;
        } 
    },

    checkWinner: function (y) {
        return y-2;
    }
};

