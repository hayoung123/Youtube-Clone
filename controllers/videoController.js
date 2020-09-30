import routes from "../routes";
import Video from "../models/Video";

//global router

//home
export const home = async (req, res) => {
  //video를 찾기 전에 render해버리기 때문에 async , await 해줘서 video를 다 찾아야한다.
  //awwait 이 끝나기 전까지 render하지 않는다.
  //성공이 아닌 끝나면 넘어간다. error 가 발생해도 render가 됨
  // --> try catch 구문사용
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

//upload
export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = (req, res) => {
  const {
    body: { file, title, description },
  } = req;
  // TO DO : upload and save video
  res.redirect(routes.videoDetail(1));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Ediit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
