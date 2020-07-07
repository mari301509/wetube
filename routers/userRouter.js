import express from "express";
import routes from "../route";

const userRouter = express.Router();

userRouter.get(routes.user, (req, res) => res.send('user'));
userRouter.get(routes.userDetail, (req, res) => res.send('user detail'));
userRouter.get(routes.editProfile, (req, res) => res.send('edit profile'));
userRouter.get(routes.changePassword, (req, res) => res.send('change password'));

export default userRouter;