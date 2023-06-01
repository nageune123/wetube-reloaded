import Video from "../models/Video";


export const home = async(req, res) => {
    const videos = await Video.find({});
    console.log(videos);
    return res.render("home", { pageTitle: "Home",videos })
  
  }

 ;

export const watch = (req, res) => { 
  const {id} = req.params;
 

  return res.render("watch",{pageTitle: `Watching :`});
};
export const getEdit = (req, res) =>{
  const {id} = req.params;
 

    return res.render("edit",{pageTitle: `Editing :`})
} ;
export const postEdit = (req, res) =>{
  const {id} = req.params;
  const {title} = req.body; 

  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req,res) => {
  return res.render("upload",{pageTitle:"Upload Video"});
};

export const postUpload = async (req,res) => {
  // 이곳에서 비디오를 videos array에 추가할 예정
  const {title,description,hashtags} = req.body;
  
  try{
    const video = new Video({
      title,
      description,
      hashtags : hashtags.split(",").map((word) => `#${word}`),
    
    });
     await video.save();
    
    return res.redirect("/");

  }catch(error){
    console.log(error);
    return res.render("upload",{pageTitle:"Upload Video",errorMessage:error._message});

  }
 
};



