// set up the router for role specific routes
const express = require('express');
const router = express.Router();

const userService = require('./user.service');
const authorize = require('../_helpers/authorize');
const { getById, getAll, authenticate } = require('./user.service');
const Role = require('../_helpers/role');

// route for authenticated users
router.get('/:id', authorize(), getById);
// route for administrators only
router.get('/', authorize(Role.Administrator), getAll);
// route for registering
router.post('/authenticate', authenticate);

// controller functions

function authenticate(req, res, next) {
  userService.authenticate(req.body)
    .then(user => user
      ? res.json(user)
      : res.status(400).json({
        message: 'Username or password is incorrect'
      }))
    .catch(err => next(err));
}

function getAll(req, res, next) {
  userService.getAll()
    .then(users => res.json(users))
    .catch(err => next(err));
}

function getCurrent(req, res, next) {
  userService.getById(req.user.sub)
    .then(user => user
      ? res.json(user)
      : res.sendStatus(404))
    .catch(err => next(err));
}

function getById(req, res, next) {
  const currentUser = req.user;
  const id = parseInt(req.params.id);

  // only allow admins to access other user records
  if (id !== currentUser.sub && currentUser.role !== Role.Administrator) {
    return res.status(401).json({
      message: 'Unauthorized'
    });
  }
  userService.getById(req.params.id)
    .then(user => user
      ? res.json(user)
      : res.sendStatus(404))
    .catch(err => next(err));
}
