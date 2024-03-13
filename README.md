Multer:- Uploading files on Multer 
<Form action="/upload" method="POST" enctype="multipart/form-data">
  <input type="file" name=ProfileImage/>
  <button type="submit">Upload</button>
</Form>
//to parse the form data we use 
//app.use(express.urlencoded({exetended:false}));
import multer from 'multer';
const upload =multer({dest:'uploads/'});
app.post("/upload",upload.single('profileImage'),(req,res)=>{
console.log(req.file);
})
//this method will upload file but we not read as it decrpyt the file as user can't read that file
//so we use disk storeage to maiuplate how file will store on disk storage memory

const storage =multer.diskStorage({
destination:function(req,file,cb){
return cb(null,path.resolve(`./public/uploads`))
};
filename:function(req,file,cb){
const uniqueSuffix=Data.now()+'-'+Math.round(Math.random()*1E9);
return cb(null,file.originalname+'-'+uniqueSuffix)
}
});

const upload=multer({storage:storage);

ejs :- used for server side rendering 
