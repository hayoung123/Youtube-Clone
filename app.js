import express from "express";
//express-middleware
//morgan (log를 확인) / helmet (For security)
//cookie-parser(유저정보를 cookie에 저장해 session을 다루기위함)
//body-parser(서버에서 from 데이터를 받아와 req object에서 다룰 수 있게해줌)
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);

export default app;
