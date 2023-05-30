const fakeUser= {
    username : "Nicolas",
    loggedIn: false ,

}




export const trending = (req,res) =>res.render("home",{pageTitle:"Home",fakeUser:fakeUser});
export const see = (req,res) => res.render("watch");
export const edit = (req,res) => res.render("edit");
export const deleteVideo = (req,res) => {
    console.log(req.params);
    return res.send("deleteVideo");
}


export const serch = (req,res) => res.send("serch");
export const upload = (req,res) => res.send("upload");

