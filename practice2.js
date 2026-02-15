/* for (let i = 1; i < 51; i++) {
  let j = i;
  if (i % 3 === 0 && i % 5 === 0) {
    j == "FizzBuzz";
  } else if (i % 3 === 0) {
    j == "Fizz";
  } else if (i % 5 === 0) {
    j == "Buzz";
  }
  //document.getElementById("num").innerHTML = `${i}`;

  console.log(i);
}
  */

/*function check(a, x) {
  
  for(let i = 0; i <= a.list; i++){
    let isTrue = x === a[0] ? 'true' : 'false'
    
    return isTrue;
  }
}
check([10,20,30,40],10);*/

/*
function litres(time) {
  let litres = Math.floor(time / 0.5);

  console.log(litres);
}
  */

// accessing node
function getNthNode(head, n) {
  let current = head;
  let count = 1;

  while (current !== null && count < n) {
    current = current.next;
    count++;
  }

  return current;
}
getNthNode(List, 4);
