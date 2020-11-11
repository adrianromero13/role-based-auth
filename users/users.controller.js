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

