/* Stacks */
//function : push, pop, peek, length
var letter = []; //this is stack
var word = "racecar";
var rword = "";
//put letters of word into stack
for (let i=0 ; i < word.length ; i++)
{
    letters.push(word[i])
}
//pop off the word in reverse order
for (let i=0; i<word.length ; i++)
{
    rword += letters.pop();
}
if (rword === word)
{
    console.log(word + " is a palindrome. ");
}
else
{
    console.log(word + " is not a palindrome. ");
}

// output:
// if word= racecar
// racecar is a palindrome

// if word = harisha
// harisha is not a palindrome
