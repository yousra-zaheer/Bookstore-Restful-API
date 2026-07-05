const Book = require("../models/books");

//create book
exports.createBook = async (req,res)=>{

try{

const book = await Book.create(req.body);

res.status(201).json(book);

}

catch(error){

res.status(500).json({message:error.message});

}

};

//get all the books
exports.getBooks = async(req,res)=>{

try{

const books = await Book.find();

res.status(200).json(books);

}

catch(error){

res.status(500).json({message:error.message});

}

};

//get book by id
exports.getBook = async(req,res)=>{

try{

const book = await Book.findById(req.params.id);

if(!book){

return res.status(404).json({message:"Book not found"});

}

res.status(200).json(book);

}

catch(error){

res.status(500).json({message:error.message});

}

};

//update books
exports.updateBook = async(req,res)=>{

try{

const book = await Book.findByIdAndUpdate(

req.params.id,

req.body,

{
new:true,
runValidators:true
}

);

if(!book){

return res.status(404).json({message:"Book not found"});

}

res.status(200).json(book);

}

catch(error){

res.status(500).json({message:error.message});

}

};

//delete books
exports.deleteBook = async(req,res)=>{

try{

const book = await Book.findByIdAndDelete(req.params.id);

if(!book){

return res.status(404).json({message:"Book not found"});

}

res.status(200).json({

message:"Book deleted successfully"

});

}

catch(error){

res.status(500).json({message:error.message});

}

};