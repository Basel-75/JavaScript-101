const Bookstore = [
    ['ID', 'Book Title', 'Author', 'Price', 'Quantity'],
    [1, 'Start with why', 'Simon Sinek', 80.0, 13],
    [2, 'But how do it know', 'J.Clark Scott', 59.9, 22],
    [3, 'Clean Code', 'Robert Cecil Martin', 50.0, 5],
    [4, 'Zero to one', 'Peter Thiel', 45.0, 12],
    [5, 'You don\'t know JS', 'Kyle Simpson', 39.9, 9]
  ];
  
  function bookCheck() {
    for (let i = 1; i < Bookstore.length; i++) {
      for (let k = 0; k < Bookstore[i].length; k++) {
        console.log(Bookstore[i][k] + ' ');
      }
    }
  }
  
  // bookCheck();
  
  let bookQuantity = Bookstore[1][4];
  let bookName = Bookstore[1][1];
  let author = Bookstore[1][2];
  
  if (bookQuantity > 0) {
    console.log(`There is ${bookQuantity} copy of: ${bookName} by ${author}`);
  } else {
    console.log("This book is sold out");
  }
  
  let balance = 500;
  let bookPrice = Bookstore[1][3];
  let quantity = 3;
  let totalPrice = bookPrice * quantity;
  let checkout = balance - totalPrice;
  
  if (bookQuantity > 0 && bookQuantity > quantity && checkout >= 0) {
    console.log(`You successfully bought ${quantity} copies of ${author}`);
    bookQuantity -= quantity;
    console.log(`There are ${bookQuantity} copies of: ${bookName} by ${author}`);
  }
  