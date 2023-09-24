[toc]

# javascript-programming

[tutorials](https://youtu.be/jS4aFq5-91M?si=lvUS6Moo5OxI8-xm)



# 1. Passenger Counter 



## increment event

```js
// intialize the count as 0
let count = 0;

// listen for clicks on the increment button
<button onclick="increment()">Increment</button>

// increment the count variable when the button is clicked
function increment() {
  count += 1
  
// change the count-el in the HTML to reflect the new count
  document.getElementById('count-el').innerText = count; 
}

```

create a variable to store the changes and display.



