import { Router } from 'express';
import { createTweetController, getTweetController } from '~/controllers/tweets.controller';
import { audienceValidator, createTweetValidator, tweetIdValidator } from '~/middlewares/tweets.middlewares';
import {
  accessTokenValidator,
  isUserLoggedValidator,
  loginValidator,
  verifyUserValidator
} from '~/middlewares/users.middlewares';
import { wrapRequestHandler } from '~/utils/handlers';

const tweetsRouter = Router();

tweetsRouter.post(
  '/',
  accessTokenValidator,
  verifyUserValidator,
  createTweetValidator,
  wrapRequestHandler(createTweetController)
);

tweetsRouter.get(
  '/:tweet_id',
  tweetIdValidator,
  isUserLoggedValidator(accessTokenValidator),
  isUserLoggedValidator(verifyUserValidator),
  audienceValidator,
  wrapRequestHandler(getTweetController)
);

export default tweetsRouter;
