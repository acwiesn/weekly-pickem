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

    checkWinner: function (selection,game) {

        if(selection.pick === game.winner && game.winner !== 'Push' && selection.lock!==true){
            return 2; 
        }else if(game.winner == 'Push' && selection.pick != 'blank'){
            return 1;
        }
        else if(selection.pick === game.winner && game.winner !== 'Push' && selection.lock===true){
            return 4;
        }
        else if(selection.pick !== game.winner ||selection.pick==null){
            return 0;
        }
    },
    
    checkTimes: function (entry, games) {
        console.log(entry);
        console.log(games);
        for (var i = 1; i <= 9; i++){
            var game = 'game' + i;
            if (entry[game].createdAt >= games[game].createdAt) {
                console.log('You have passed submission time for this game');
        } else if(entry[game].createdAt < games[game].createdAt) {
                console.log('You can submit your picks');
        }    
}
}
}