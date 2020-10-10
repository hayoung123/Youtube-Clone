//video파일을 url로 해주기 위해 multer 사용.
import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = req.user || {};
  console.log(req.user);
  next();
};

//single("videoFile") pug에서 name = videoFile 인 하나의 비디오
export const uploadVideo = multerVideo.single("videoFile");
