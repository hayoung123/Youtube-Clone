import mongoose from "mongoose";
import dotenv from "dotenv";
//config함수로 .env파일을 자동으로 drive, 안에 있는 변수들을 사용할 수 있다.
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅Connected to DB");
const handleError = () => console.log(`❌ Error on DB connection:${error}`);

//db가 open 됐을 때 확인하기 위해 console.log 콜백함수 실행
db.once("open", handleOpen);
//error 시 error 출력하는 콜백함수
db.on("error", handleError);

//import를 하지 않으면 db는 open 되지 않는다.
