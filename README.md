# CTP-Plugr-BackEnd
CUNY Tech Prep - Section 3 - Football Plugr - Back End Code

## How to get started

## Workflow
```git pull```

```npm install```

```sequelize db:migrate```

```npm start```


## Install Sequelize
How to add sequelize and sequelize-cli to your project:

Type the following commands:

```npm install --save sequelize pg```

```npm install -g sequelize-cli```

>NOTE: If you dont't have sequelize installed globally, for the rest of this document, replace ```sequelize``` with the following:
```node_modules/.bin/sequelize```

## Create a database with Sequelize
You can create a postgres database with the following command in the terminal:

```sequelize db:create```

-> This will create a database with the database name specified in the config/config.json

>NOTE: This is recommended over creating a postgres database with the command:

```createdb -h localhost -U DB_USERNAME DATABASE_NAME```


## Create a new model with Sequelize:

In the terminal, type the following:
  
 ```sequelize model:generate --name modelName --attributes columnName1:datatype,columbName2:datatype```
 
 or
 
 ```sequelize model:generate --name modelName --attributes "columnName1:datatype, columbName2:datatype"```
 
>NOTE: The difference between the two above commands is the first one doesn't have any space in the column listing whereas the second one has spaces between the column listing but it is enclosed in quotes ```" "```. 
So make sure to place all the column listing in one string!
 
 So for example, if you want to create a model named teams with two columns 1) name 2) location, type the following:
 
 ```sequelize model:generate --name Teams --attributes name:string,location:string```
 
 
 -> After you run this command, you will see your model created in the model directory as well as the initial migration file for that model in the migration directory. 


## Reflect changes in a model to your database

0. You make changes to your model

1. Generate a new migration file for a model (You already have a model)

  ```sequelize migration:generate --name change-message```
  
-> After you run this command, you will see the newly created migration file. This is a skeleton file.

2. Reflect the changes in the newly created migration file by filling in the 'up' method:
Some example methods: http://docs.sequelizejs.com/class/lib/query-interface.js~QueryInterface.html

For example, if you add a new column ```address: DataTypes.STRING``` to a Users model, in the newly created migration file, you can do the following:

```

3. Run migration
  ```sequelize db:migrate```
  
-> Now you should see the changes reflected in your database.
  
## NEVER TOUCH OLD MIGRATION FILE!!!

## FK 
UserId

>NOTE: It removes 's'

## FOREIGN KEY RELATIONSHIPS

Teams has many Users
Users has many Teams

this goes model
referece: {
 
}

on the migration file:
create foreign key column,



http://docs.sequelizejs.com/manual/tutorial/models-definition.html

