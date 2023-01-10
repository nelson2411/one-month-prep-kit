// A teacher asks the class to open their books to a page number.
//A student can either start turning pages from the front of the book or
//from the back of the book. They always turn pages one at a time.
//When they open the book, page 1 is always on the right side:

// When they flip page 1, they see pages 2 and 3. Each page except the last
//page will always be printed on both sides. The last page may only be
//printed on the front, given the length of the book. If the book is n pages
//long, and a student wants to turn to page p, what is the minimum number
//of pages to turn? They can start at the beginning or the end of the book.

// Given n and p, find and print the minimum number of pages that must be turned
//in order to arrive at page p.

// Example:
// n = 7  -> 7 pages
// p = 4  -> page 4
// n = number of pages in the book
// p = page to turn to
// return the minimum number of pages that must be turned in
//order to arrive at page p.

// Function must return an integer denoting the minimum number of pages to turn.

const n = 7
const p = 4

// the big O notation of this algorithm is O(1)
const pageCount = (n, p) => {
  // find the number of pages from the front
  const pagesFromFront = Math.floor(p / 2)
  // find the number of pages from the back
  const pagesFromBack = Math.floor(n / 2) - pagesFromFront
  // return the minimum number of pages
  return Math.min(pagesFromFront, pagesFromBack)
}

/* 
Writing the code in pseudocode:

n = 7
p = 4

function pageCount(n, p)
  pagesFromFront = floor(p / 2)
  pagesFromBack = floor(n / 2) - pagesFromFront
  return the minimum number of pages
END FUNCTION

*/
