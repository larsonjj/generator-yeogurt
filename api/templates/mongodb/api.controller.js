/**
 * GET     /<%= _.camelize(name.toLowerCase()) %>              ->  index
 * POST    /<%= _.camelize(name.toLowerCase()) %>              ->  create
 * GET     /<%= _.camelize(name.toLowerCase()) %>/:id          ->  show
 * PUT     /<%= _.camelize(name.toLowerCase()) %>/:id          ->  update
 * DELETE  /<%= _.camelize(name.toLowerCase()) %>/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var <%= _.classify(name) %> = require('./<%= _.slugify(name.toLowerCase()) %>.model');

// Get list of data
var index = function(req, res) {
  <%= _.classify(name) %>.find(function (err, data) {
    if (err) {
      return handleError(err, res);
    }
    return res.status(200).json(data);
  });
};

// Get a single piece of data
var show = function(req, res) {
  <%= _.classify(name) %>.findById(req.params.id, function (err, data) {
    if (err) {
      return handleError(err, res);
    }
    if (!data) {
      return res.send(404);
    }
    return res.json(data);
  });
};

// Creates a new piece os data in the DB.
var create = function(req, res) {
  <%= _.classify(name) %>.create(req.body, function(err, data) {
    if (err) {
      return handleError(err, res);
    }
    return res.status(201).json(data);
  });
};

// Updates an existing piece of data in the DB.
var update = function(req, res) {
  if (req.body._id) {
    req.body._id = null;
  }
  <%= _.classify(name) %>.findById(req.params.id, function (err, data) {
    if (err) {
      return handleError(err, res);
    }
    if (!data) {
      return res.send(404);
    }
    var updated = _.merge(data, req.body);
    updated.save(function (err) {
      if (err) {
        return handleError(err, res);
      }
      return res.status(200).json(data);
    });
  });
};

// Deletes a piece of data from the DB.
var destroy = function(req, res) {
  <%= _.classify(name) %>.findById(req.params.id, function (err, data) {
    if (err) {
      return handleError(err, res);
    }
    if (!data) {
      return res.send(404);
    }
    data.remove(function(err) {
      if (err) {
        return handleError(err, res);
      }
      return res.send(204);
    });
  });
};

var handleError = function handleError(err, res) {
  return res.send(500, err);
};

module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy
};
