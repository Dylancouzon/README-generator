# README Generator
Homework for UC Berkeley Extension Coding Bootcamp

![Site](./screenshot.png)

## Technologies Used
- Javascript - Backend coding
- Node - JavaScript runtime environment

## Summary 
This is a command-line application that generates styled readme Markdown files for different kinds of projects.
The user is asked to input several inputs listed below:

* GitHub adress
* Email Adress
* Project's name
* Description of the project
* Type of license (If any)
* Installation inscructions
* Utilization instructions:
* How to test it
* How to contribute

## How to install
You would need to download the project on your local machine, install node.js and the inquirer module

## How to use it
run the commande 
```
node index.js
```
[DEMO](https://drive.google.com/file/d/1RE9OOLVVlufw4FwKrB8I2N89NHVafr8Q/view)

## Snippet 
```js
if(licenseLink){
licenseTxt = `
<a name="license"></a>
## License :
${licenseLink}
`;
```
In this example, I am using the template strings to declare a variable inside a string.


## Author Links
[LinkedIn](https://www.linkedin.com/in/dcouzon/)
[GitHub](https://github.com/Dylancouzon)


