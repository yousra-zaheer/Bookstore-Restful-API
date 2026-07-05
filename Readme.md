testing the url through postman 

POST http://localhost:5000/books
{
    "title":"The Alchemist",
    "author":"Paulo Coelho",
    "price":15,
    "isbn":"9780061122415",
    "publishedDate":"1988-04-15"
}
{
"title": "Atomic Habits",
"author": "James Clear",
"price": 20,
"isbn": "1234567890",
"publishedDate": "2018-10-16"
}

Postman testing image:
![alt text](image-1.png)
![alt text](image-3.png)

Result in MongoDB collection:
![alt text](image.png)
![alt text](image-4.png)


GET http://localhost:5000/books
Results fetched from MongoDB Books collection to postman terminal:
![alt text](image-2.png)

GET BY ID 
http://localhost:5000/books/6a4a82ef0319159ec3994dd4
![alt text](image-5.png)

UPDATE price of book from 20 to 30 
PUT http://localhost:5000/books/6a4a82ef0319159ec3994dd4
![alt text](image-6.png)

updated results in MongoDB Books Collection 
![alt text](image-7.png)


DELETE BOOK by ID
delting "The Alchemist" book using the id 
DELETE http://localhost:5000/books/6a4a813b0319159ec3994dd3
![alt text](image-8.png)

Results in MongoDB collection , only 1 Book remains 
![alt text](image-9.png)