User Story:

    1.	The user wants to be able to start a new game. 
    2.	The user wants to press on a square and appears either an X or an O.
    3.	There should be turns to the two players, so when the X player plays the O player should get their turn. 
    4.	Squares shall not allow the players to press on the same squares twice in one game.
    5.	There should be a win, lose or tie message depending on the result of the game. 
    6.	When the game is over, or the winner is announced the squares should not be allow the user to press again unless he refreshes the page or press “Play again” button.

Wireframe:
    This is how I imagined the would be before I started working on it.   https://wireframe.cc/iVXu9D


HTML:

    1.	I divided it onto sections so I can make it easier to control items individually.
    2.	I linked JavaScript, CSS, Animation links to control the page.

CSS:


    1. I styles every section individually to make it look better.

JavaScript:


    1.	There is a nested loop that goes through an array of arrays, which are winning chances, these two for loops goes through the array vertically and horizontally.
    2. I used to check to player winnings a function that contains multiple if statements that checks whether the chosen position of the game equals to any of the winning chances. Pluse I also added animation to make it more fun.
    3. I made a function for hover when the user hovers over any square on the game it will appear in other color.

My Favorit Function: 
    I like the way my check function goes through every individual array and comes back with either a win or just continue to the other if check.

Problems Faced in the process:
    I had a small problem that was easy to fix but I did not know what the solution was until I asked. The problem was when the player wins the winning message would appear before the either X or O appear in the winning square. So, the solution was simpler than I thought, it was just time problem. Timeout was put before alert would appear. 
