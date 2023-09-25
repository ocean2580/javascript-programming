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

Let's create a variable to store the changes and display on the page.

 

## save event

```js
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById('save-el')

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
  let countStr = count + '-'
  
    // 3. Render the variable in the saveEl using innerText
	saveEl.innnerText += countStr
  
}
```

 

## reset event

```js
function save() {
  let countStr = count + '-'
  saveEl.innnerText += countStr
  
  // set count to 0
  countEl.innerText = 0
  count = 0
}
```



# 2. Blackjack

```js
// range from 1 to 13
  let card = Math.floor( Math.random()*13 ) + 1
```



# 3. Chrome Extension
