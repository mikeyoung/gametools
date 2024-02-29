# Mutant Generator
#### Description:
Role playing games have lots of tables that have interconnected data.  Sometimes when you need to generate several characters at once it can take a long time to manually step through the process.

The Character Splat Generator is a tool for generating batches of pre-generated characters for players to choose from.  The batch count is set to 20 characters to give ample choice, or allow a d20 to determine fate!  Note that you can pass in count=n in the query paramters to override the default of 20.

I created several models in Django to store the equivalent tabular data from the rulebook.  Those models were migrated into the Django backend so I could do content population.  From there I made an endpoint that creates a JSON file with all of the data.  That JSON is then consumed by various tools and references on the main website.

I intend the further document the JavaScript but for now everything you need is in the static script folder inside the mutantfuture app.