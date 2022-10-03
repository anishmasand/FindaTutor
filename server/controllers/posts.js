import PostMessage from "../models/postMessage.js";

export const getPosts =  async (req,res) => {
    try{ // try will execute if everything is successful
        const postMessages = await PostMessage.find(); // finding something in a module, takes time, so add await and async

        // console.log(postMessages);

        res.status(200).json(postMessages); // status 200 means everything went well, json is the array of all messages
    } catch(error) { // if an error occurs
        res.status(400).json({ message: error.message} );
    }
}
export const createPost  = async (req,res) =>{
    const post = req.body; //here we have access to req.body, we can't console.log now , since there is no way to make posts
    const newPost = new PostMessage(post); // this creates a new post in the data base with data (post) being the same as the one entered previously by the user.
    try { 
       await newPost.save();

       //HTTP status codes: https://www.restapitutorial.com/httpstatuscodes.html

       res.status(201).json(newPost); // 201: successful creation.

    }catch(error){
        res.status(409).json({message:error.message}) ;
        
    }
}   