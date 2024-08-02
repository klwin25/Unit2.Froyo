//REQUIREMENTS FOR BLOCK15 WORKSHOP FROYO ASSIGNMENT
//User enters a list of comma-separated froyo flavors (ie: vanilla,vanilla,strawberry,coffee)
// viewing console lets them see a table listing of how many of each flavor they ordered (ie3 vnilla, 2 coffee, 1 strawberry)

//prompt user for froyo flavors and store their result
//parse the user input into an array of froyo flavors
//build an object to track which flavors observed so far
//update the object as the array of flavors are iterated
//organize into a function

/* ----------------- FUNCTION TO COUNT HOW MANY OF ONE FROYO FLAVOR ------------------- */
function countFroyoFlavors(flavorArray) {
  /* ----------------- OBJECT TO TRACK WHICH FLAVORS WERE OBSERVED ------------------- */
  const trackFlavorCount = {};

  /* ----------------- ITERATES THROUGH ARRAY OF FLAVORS VIA FOR LOOP ------------------- */
  for (let flavor of flavorArray) {
    // ------ ELSE IF FLAVOR HAS BEEN STATED, ADD PLUS ONE ------ //
    if (trackFlavorCount[flavor]) {
      trackFlavorCount[flavor]++;
      // ------ IF FLAVOR HAS NOT BEEN STATED, ADD IT TO ARRAY WITH COUNT OF 1 ------ //
      // NOTE TO SELF: CANNOT BE THE OTHER WAY AROUND BC IT WILL ALWAYS RESET THE FLAVOR COUNT TO 1 EVERY TIME IT LOOPS
    } else {
      trackFlavorCount[flavor] = 1;
    }
  }
  /* ----------------- RETURNS THE NUMBER OF EACH FLAVOR INPUTTED ------------------- */
  return trackFlavorCount;
}

/* ----------------- PROMPTS USER FOR FROYO FLAVOR ORDERS & STORES INFO ------------------- */
const userInput = prompt(
  "Please enter your froyo orders here, separated by commas and with no spaces:"
);

/* ----------------- PARSES USER INPUT INTO ARRAY OF FROYO FLAVORS ------------------- */
const flavorArray = userInput.split(",");

/* ----------------- CALLING FUNCTION TO COUNT FLAVORS ------------------- */
const trackFlavor = countFroyoFlavors(flavorArray);

/* ----------------- DISPLAYS FROYO FLAVORS AS A TABLE ------------------- */
console.table(trackFlavor);
