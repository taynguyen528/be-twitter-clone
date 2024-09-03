import express, { Router } from 'express';
import usersRouter from './routes/users.router';
import databaseService from './services/database.services';
import { defaultErrorHandler } from './middlewares/error.middlewares';
import mediasRouter from './routes/medias.router';
import { initFolder } from './utils/file';
import { config } from 'dotenv';
import staticRouter from './routes/static.router';
import { UPLOAD_VIDEO_DIR } from './constants/dir';
import cors from 'cors';

config();

const app = express();
databaseService.connect();

const router = Router();
const port = process.env.PORT || 4000;

// tạo folder upload
initFolder();

app.use(express.json());
app.use(cors());

app.use('/users', usersRouter);
app.use('/medias', mediasRouter);
app.use('/static', staticRouter);
app.use('/static/video', express.static(UPLOAD_VIDEO_DIR));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// error handler
app.use(defaultErrorHandler);
