var c = require('./calculations.js');
var service = require('./services.js');
service.getCurrentWeek(function (err,result) {
    console.log(result);
});

/*games={ game1:
   { gameTime: '8:30',
     day: undefined,
     homeTeam: 'Chiefs',
     awayTeam: 'Patriots',
     homeScore: '26',
     awayScore: '23',
     homeSpread: '6',
     awaySpread: '5',
     createdAt: '2017-08-15T14:42:16.258Z',
     updatedAt: '2017-08-15T14:42:16.258Z',
     winner: null },
  game2:
   { gameTime: '1:00',
     day: undefined,
     homeTeam: 'Jets',
     awayTeam: 'Bills',
     homeScore: '41',
     awayScore: '50',
     homeSpread: '10',
     awaySpread: '16',
     createdAt: '2017-08-15T14:42:16.259Z',
     updatedAt: '2017-08-15T14:42:16.259Z',
     winner: null },
  game3:
   { gameTime: '1:00',
     day: undefined,
     homeTeam: 'Cardinals',
     awayTeam: 'Lions',
     homeScore: '19',
     awayScore: '12',
     homeSpread: '6',
     awaySpread: '1',
     createdAt: '2017-08-15T14:42:16.259Z',
     updatedAt: '2017-08-15T14:42:16.259Z',
     winner: null },
  game4:
   { gameTime: '1:00',
     day: undefined,
     homeTeam: 'Steelers',
     awayTeam: 'Browns',
     homeScore: '4',
     awayScore: '34',
     homeSpread: '2',
     awaySpread: '10',
     createdAt: '2017-08-15T14:42:16.259Z',
     updatedAt: '2017-08-15T14:42:16.259Z',
     winner: null },
  game5:
   { gameTime: '1:00',
     day: undefined,
     homeTeam: 'Jaguars',
     awayTeam: 'Texans',
     homeScore: '13',
     awayScore: '38',
     homeSpread: '17',
     awaySpread: '19',
     createdAt: '2017-08-15T14:42:16.269Z',
     updatedAt: '2017-08-15T14:42:16.269Z',
     winner: null },
  game6:
   { gameTime: '1:00',
     day: undefined,
     homeTeam: 'Cardinals',
     awayTeam: 'Lions',
     homeScore: '51',
     awayScore: '25',
     homeSpread: '4',
     awaySpread: '6',
     createdAt: '2017-08-15T14:42:16.270Z',
     updatedAt: '2017-08-15T14:42:16.270Z',
     winner: null },
  game7:
   { gameTime: '1:00',
     day: undefined,
     homeTeam: 'Buccaneers',
     awayTeam: 'Dolphins',
     homeScore: '23',
     awayScore: '36',
     homeSpread: '7',
     awaySpread: '2',
     createdAt: '2017-08-15T14:42:16.270Z',
     updatedAt: '2017-08-15T14:42:16.270Z',
     winner: null },
  game8:
   { gameTime: '1:00',
     day: undefined,
     homeTeam: 'Falcons',
     awayTeam: 'Bears',
     homeScore: '9',
     awayScore: '44',
     homeSpread: '4',
     awaySpread: '4',
     createdAt: '2017-08-15T14:42:16.270Z',
     updatedAt: '2017-08-15T14:42:16.270Z',
     winner: null },
  game9:
   { gameTime: '1:00',
     day: undefined,
     homeTeam: 'Raiders',
     awayTeam: 'Titans',
     homeScore: '38',
     awayScore: '13',
     homeSpread: '19',
     awaySpread: '2',
     createdAt: '2017-08-15T14:42:16.271Z',
     updatedAt: '2017-08-15T14:42:16.271Z',
     winner: null }}*/

//console.log(c.calculateSpread(games.game4));

