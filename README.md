# Mutant Generator
#### Video Demo:  https://youtu.be/6HmtzL7safE
#### Description:
Role playing games have lots of tables that have interconnected data.  Sometimes when you need to generate several characters at once it can take a long time to manually step through the process.

Mutant Generator is an application for generating batches of pre-generated characters for players to choose from.  The batch count is set to 20 characters to give ample choice, or allow a d20 to determine fate!

I created several models in Django to store the equivalent tabular data from the rulebook.  Those models were migrated into the Django backend so I could do content population.  From there I made an endpoint that creates a JSON file with all of the data.  The purpose of generating JSON is so that it can be used as a data source for this functional and also for a JavaScript app I am planning on adding.

The application prompts the user for the player's name.  This name is validated for filename safety and then a file is generated with 20 characters.  The user can then continue to create more files or quit.

When the app creates a character, it simulates rolls for all the character attributes and looks up the relevant modifiers associated with each.  The app also selects a random race (plant, android, etc).  At this point the character has a certain amount of mutations to roll for.  Using a built in dice string parser the app rolls virtual 'dice' using python's random library.  The app iterates over how many mutations of each type each character race gets and fetches a list of mutations based on customized mutation lists and rolls against the mutation tables.

The mutations and filtering thereof represents the bulk of complication on this project.  The results for rolls differ between base and advanced rules.  Some rolls need to span multiple tables and sub-categories such as 'beneficial' or 'drawback'.  Mutant Future is just simple enough to program for, but a really crunchy system would likely be beyond the scope of the assignment haha.

The application also supports the additional rules and content from the Advanced companion.  The data is split so as to make the inclusion of these features optional in future projects.

There is not a ton in the way of object oriented programming, but the characters are all defined objects with getters and setters using the appropriate decorators.

I kept most of the code in the project file for the purposes of demonstration but I will likely migrates a lot of this into a module that gets pulled into a public facing Django app.

Should one wish to modify the default batch count the value for that and the other constants are stored in config.py - this may not by pythonic, that was a quick solution to store the values in a spot where both the project file and the test file could use the values.

There was consideration given to how much to customize the exported data to conform to the immediate use case.  I opted to make the data more general so that it can be used in a multitude of ways.  A consequence of that is the parsing requires a bit more runtime logic to create the lists of mutations to choose from.  At scale this would be less efficient than parsing optimized datasets.  If this were to be run on a website with heavy traffic it would be beneficial to create database exports that do a lot of that processing.

The test_projects.py file has five tests in it.  This proved to be interesting because it had to test the results of random events (character generation using virtual dice).  It became apparent that the number of iterations to test is proportionate to the amount and potential variation in each result set.  Since these tests will be run on a hobbyists machine I set the test count to 1000 for the tests that rely on random lookups.  In a production environment I would probably test more, smaller chunks of the logic.

This will have a web front end shortly, but for now please enjoy the file generation feature.  I hope you find the function names to be named intuitively.  Those familiar with OSR RPG rulesets will may recognize much of the logic.