# E-commerce back end 

 ## Table of contents

  * [Description](#Description)
  * [Instillation](#Instillation)
  * [Usage](#Usage)
  * [Links](#Links)
  * [Licence](#License)
  * [Questions](#Questions)
  

## Description
The purpose of this back end application is for a business to track sales. This e-commerce database tracks profits and their details by categorising them. New products, categories and tags can be added to 

## Initialisation
To use this application node.js must be installed: https://nodejs.org/en/download/ <br />

**The packages required are:**
 * **dotenv**  @8.2.0
 * **express**  @4.17.1
 * **mysql2**  @2.1.0
 * **sequelize**  @5.21.7
 

All dependencies should already be in the package.json file and installed through running ```npm i``` in the terminal.

## Usage
To use this application all dependencies must be installed. <br>
To run the application in your terminal:
* The data base must be created by logging into mysql mysql -u root -p and running the command ```source db/schema.sql```
* Quit mysql by running the command ```quit;```
* To seed the data base run ```npm run seed```
* Finally run ```npm run start``` 
* GET, POST, PUT and DELETE requests can be made in postman or insomnia 




## Links
Visit the link to view a walkthrough video of this application:

https://drive.google.com/file/d/1_YPmGYvLsYx2B_sPqEstFXi2Vb8d0NKE/view


## Licensing 
This project was not licensed 