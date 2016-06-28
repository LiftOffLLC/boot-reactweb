var models = require('../models')
module.exports = function(opts) {
  return {
    index: function(req, res) {
      models.Contact
        .find({})
        .exec(function(err, doc){
          res.json({data: doc})
        })
    },
    addContact: function(req, res) {
      models.Contact.create(req.body, function(err, doc){
        if(err) res.status(400).json({err: 'Could not save'})
        res.json({data: doc})
      })
    }
  }
}
