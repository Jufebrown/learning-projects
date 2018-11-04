var bookshelf = require("../config/bookshelf");

var Company = bookshelf.Model.extend({
  tableName: "company",
  hasTimestamps: true,

  initialize: function() {
    this.on("saving", this.hashPassword, this);
  }

});

module.exports = Company;
