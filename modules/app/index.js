const path = require('path');
const io = require('./io');

module.exports = {
    route: (router, server) => {
      io.connectws(server)
      router.get('/:room', function(req, res) {
        given_room = req.params.room;
        res.sendFile( path.join(__dirname, '..', '..', 'client','index.html'));
      });

    }


}