# GreenCanvasTask
It takes four inputs, one of which is csv file and parse it into JSON objects and store all the data in MongoDB database.

## Description
In this task, i was asked to design a form having four input fields as text, email, number and file. 
The first 3 fields will go straight forward in a MongoDB collection named **details** with fourth data as file path to stored location of imput file.
The input file is csv and I had to parse it into JSON objects and store it into another collection named **parseddatas**.

## Steps to reproduce the result
1. Fork and clone the repository on your local file.
2. Change directory to GreenCanvasTask folder and use the command ```npm i```.
3. Make sure you have mongo server up and running.
4. In the terminal, use the command ```nodemon app.js```.
5. Open http://www.localhost.com/3000/ in your browser and fill the form and submit.
6. As default, I have set the post request to show the parsed data.
7. In mongo shell, use the command ```show dbs```. It should show a new database named **GreenCanvas**.
8. Use ```db.details.find()``` and ```db.parseddatas.find()``` to get the stored data.
