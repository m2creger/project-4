import * as express from 'express';
var router = express.Router();

import { usersController } from '../controllers/users';


// Create new user
router.post('/api/users', usersController.create);


// Retrieve user

router.get('/api/users/:id', usersController.show);


export {router}