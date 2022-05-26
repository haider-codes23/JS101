let readline = require('readline-sync');
// A noun is something that refers to a thing.
// A verb is a word that shows an action, occurence or state of being.
// Adjective is a word that describes the qualities or the state of being
// of nouns.
// An adverb is a word that modifies(describes) a verb.
function madlibs() {
  let noun;
  let verb;
  let adjective;
  let adverb;
  noun = readline.question("Please Enter a Noun of Your Choice: ");
  verb = readline.question("Please Enter a Verb of Your Choice: ");
  adjective = readline.question("Please Enter an Adjective of Your Choice: ");
  adverb = readline.question("Please Enter an Adverb of Your Choice: ");
  console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hillarious!`);
  console.log(`The ${adjective} ${noun} ${verb} ${adverb} over the lazy dog.`);
  console.log(`The ${noun} ${adverb} ${verb} up ${adjective} joe's trutle.`);
}

madlibs();