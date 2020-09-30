import express from "express";
import {
  changePassword,
  editProfile,
  userDetail,
} from "../controllers/userController";
import routes from "../routes";

const userRouter = express.Router();

//userDetail이 위에 있으면 :id 때문에 /edit-profile 를 아이디로 인식한다.
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
