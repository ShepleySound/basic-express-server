'use strict';

module.exports = (req, res, next) => {
  if (req.query.name) {
    next();
  } else throw new Error('Name required when looking for a person.');
};