// You are choreographing a circus show with various animals. For one act, you are gien two kangaroos
// on a number line ready to jump in the positive direction (i.e, toward positive infinity).
// The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
// The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show.
// If it's possible, return YES, otherwise return NO.

function kangaroo(x1, v1, x2, v2) {
  const jumpNumber = (x1 - x2) / (v2 - v1);
  for (let i = 0; i < jumpNumber; i++) {
    x1 += v1;
    x2 += v2;
  }
  if (x1 === x2) {
    return "YES";
  } else {
    return "NO";
  }
}
