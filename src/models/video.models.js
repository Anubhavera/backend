 import mongoose from "mongoose";
 import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


 const videoSchema = new Schema(
  {
    videoFile :{
      type : String, //cloudinary url 
      required : true, 
    },
    videoFile :{
      type : String, //cloudinary url 
      required : true, 
    }, 
    Title :{
      type : String, //cloudinary url 
      required : true, 
    }, 
    Description :{
      type : String, //cloudinary url 
      required : true, 
    }
  ,
   duration : {
    type : String, //cloudinary url 
    required : true, 
  },
  views : {
    type : Number,
    default:0
  },
  isPublished :{
    type : Boolean, 
    default:true 
  },
  owner :{
    type : Schema.Types.ObjectId,
    ref:"User"
  },
  
  },{
    timestamps: true
  }
 )
 

 videoSchema.plugin(mongooseAggregatePaginate)
 export const Video = mongoose.model("Video", videoSchema)