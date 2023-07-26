//Friend checker game
/*Ask the user to enter a name, using the switch statement to return a confirmation
that the user is a friend if the name selected is known in the case statements. You
can add a default response that you don't know the person if it's an unknown name.
Output the result into the console. */

let friendName = prompt("Please enter your name");
let friend = friendName.toLowerCase();

switch (friend) {
    case 'john': alert('he is a friend');
        break;
    case 'james': alert('he is a friend');
        break;
    case 'con': alert('he is a friend');
        break;
    case 'carlos': alert('he is a friend');
        break;
    case 'fraser': alert('he is a friend');
        break;
    default: alert('I dont know this person');
        break;


}