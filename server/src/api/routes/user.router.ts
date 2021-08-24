import { Router } from 'express';

import UserController from '@/controllers/user.controller';
import wrapAsync from '@/utils/wrapAsync';
import invalidRequest from '@/api/middlewares/invalid-request';
import { checkUser } from '../middlewares/checkUser.middleware';
import { createUserValidators } from '../middlewares/validation/user/createUser';
import { checkUserValidators } from '../middlewares/validation/user/check';

const router = Router();
router.post(
  '/check',
  invalidRequest(...checkUserValidators),
  checkUser,
  wrapAsync(UserController.checkUserEmail)
);

router.post(
  '/',
  invalidRequest(...createUserValidators),
  checkUser,
  wrapAsync(UserController.createUser)
);

export default router;
