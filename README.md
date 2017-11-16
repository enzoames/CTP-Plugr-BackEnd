# CTP-Plugr-BackEnd
CUNY Tech Prep - Section 3 - Football Plugr - Back End Code


Migration with Sequelize

How to reflect changes you make in a model to your database:

0. You make changes to your model

1. Create a new migration file for a model (You already have a model)

  sequelize migration:generate --name your-new-migration-name
  
After you run this command, you will see the newly created migration file.

2. Reflect the changes in the newly created migration file by filling in the 'up' method:
Some example methods: http://docs.sequelizejs.com/class/lib/query-interface.js~QueryInterface.html

3. Run migration
  sequelize db:migrate
