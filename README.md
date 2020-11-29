# The HADEDA WEB APP - Team Chakra
## Developed with the MERN stack
### Introduction
Github Repository
``` text 
anitapeppercorn/team-chakra
```

``` text
App is Deployed at:
https://HADEDA-APP.herokuapp.com/

```

We built a full stack - application and deployed it to Heroku at https://HADEDA-APP.herokuapp.com/ that works with real-world data to solve a real-world challenge, with a focus on user demand:
- Using React for the front end.
- Using REST-API with a Node.js and Express.js server.
- Using SQL and the Sequelize ORM for the database.
- Using FETCH, POST, PUT etc. for retrieving, adding, updating, and deleting data.
- Deployed using Heroku (with data).
- Offering a polished UI, is responsive and is interactive 
- The project has a clean repository that meets quality coding standards (file structure, naming conventions, best practices for class and id naming conventions, indentation, quality comments, etc.) and a high-quality README (with unique name, description, technologies used, screenshot, and link to deployed application).


## Contents
- [Description](#Description)
- [App Screenshot](#App-Screenshot)
- [User Story](#User-Story)
- [Concepts](#Concepts)
- [License](#License)
- [Author](#Author)

## Description
The HADEDA app is a full stack web-app to automate the process of redacting sensitive data from legal documents, with the goal of making The Hague more transparent.

For MVP we wanted to keep the length of the string smaller. But provided the chosen database tool and processing compute power supports it, there is no limitation on the length of the document that can be processed.
These are ideas we identified to continue to build on our application even further:
...Feature 1:Automate Publishing the redacted text to a publicly accessible database in an XML formal.
...Feature 2: Ingest the document in the currently published format without any user interference
...Feature 3: With time and enough training data, complete the redaction process minimizing any user input.
...Feature 4: Increase security features and encryption in the data ingestion process.

## App Screenshot
![](images/HADEDA.png)


## User Story

```text

Description:
We built the HADEDA app to redact confidential data such as personal data and corporate information. We built a full stack - application with a REACT.js client, REST API, and MySQL database and used spaCy an open-source software library for advanced natural language processing which supports deep learning workflows connecting models trained by popular machine learning libraries. We used its features for text categorization and named entity recognition (NER). Prebuilt statistical neural network models to perform these task are available for English, German, Greek, Spanish, Portuguese, French, Italian, Dutch, Lithuanian and Norwegian.

Motivation for development:
Legislation obliges the Hague to be transparent. Legal decisions and transactions of legislative bodies can only be made public if confidential data such as personal data and corporate information are erased or redacted. Erasing personal data. Currently, only 3% of available data is released. 97% is not yet released due to time consuming redaction process. 

User story:
AS an organization who wants to be more transparent, 
I WANT to redact sensitive data from documentation that I want to make public
```

## Concepts

In this project we used the following packages:
```text
"@apollo/react-hooks": "^3.1.3", 
"@testing-library/jest-dom": "^4.2.4", 
"apollo-boost": "^0.4.7", 
"apollo-link-context": "^1.0.20", 
"apollo-server-express": "^2.11.0",
"express": "^4.17.1", 
"sequelize": "^5.9.7", 
"react": "^16.13.1", 
"react-dom": "^16.13.1", 
"react-router-dom": "^5.1.2", 
"react-scripts": “3.4.1”
"spaCy"
"REST-API"
```

## License
[MIT License](./LICENSE)
![license](https://img.shields.io/badge/License-MIT-blue)

## Author
### Chiristopher Maxwell, Anita Ganti, Yogendra Pawar

View the authors' portfolio at:  
- https://anitapeppercorn.github.io/react-portfolio/
![Badge](https://img.shields.io/badge/Github-anitapeppercorn-4cbbb9) 
![Profile Image](https://github.com/anitapeppercorn.png?size=50)


- https://withchristopher.github.io/react-portfolio/
![Badge](https://img.shields.io/badge/Github-withchristopher-4cbbb9) 
![Profile Image](https://github.com/withchristoper.png?size=50)


- https://iofall.github.io/react-portfolio/
![Badge](https://img.shields.io/badge/Github-iofall-4cbbb9) 


[Table of Contents](#Contents)
[Back to Top](#HADEDA)



