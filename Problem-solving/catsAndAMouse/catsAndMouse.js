/* 
Two cats and a mouse are a at various positions on a line. 
You will be given their starting positions. Your task is to determine which cat will 
reach the mouse first, assuming the mouse does not move and the cats travel at equal speed. 
If the cats arrive at the same time, the mouse will be allowed to move and it will escape 
while they fight.

You are given q queries in the form of x, y, and z representing the respective positions 
for cats A and B, and for mouse C. Complete the function catAndMouse to return the appropriate 
answer to each query, which will be printed on a new line.
 * If cat A catches the mouse first, print Cat A.
  * If cat B catches the mouse first, print Cat B.
  * If both cats reach the mouse at the same time, print Mouse C as the two cats fight and

Example input:

x = 2 -> cat A position
y = 5 -> cat B position
z = 4 -> mouse C position

Example output:
Cat B since cat B is closer to the mouse than cat A. Cat B is one unit away from the mouse 
and cat A is two units away.

Create a function that takes in three integers representing the respective positions for
cats A and B, and for mouse C. Complete the function catAndMouse to return the appropriate
answer to each query, which will be printed on a new line.


*/

const catAndMouse = (x, y, z) => {
  let catA = Math.abs(z - x)
  let catB = Math.abs(z - y)
  if (catA < catB) {
    return "Cat A"
  } else if (catB < catA) {
    return "Cat B"
  } else {
    return "Mouse C"
  }
}

/*
Writing the code in pseudocode:

x = 2 -> cat A position
y = 5 -> cat B position
z = 4 -> mouse C position

function catAndMouse(x, y, z)
    catA = Math.abs(z - x)
    catB = Math.abs(z - y)
    IF catA < catB THEN
    print 'Cat A'
    ELSE IF catB < catA THEN
    print 'Cat B'
    ELSE
    print 'Mouse C'
    END IF
END FUNCTION



*/
