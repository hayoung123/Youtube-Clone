import passport from "passport";
import User from "./models/User";

passport.use(User.createStrategy());

//serialization- cookie에 담을 정보
//deserialization- cookie정보를 how to convert this info to user
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
