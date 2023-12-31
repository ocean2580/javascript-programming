let myLeads = [];
// object
const inputBtn = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');
const deleteBtn = document.getElementById('delete-btn');
const tabBtn = document.getElementById('tab-btn');
const tabs = [];
// from localStorage
let leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));


// not null
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads(myLeads);
}

tabBtn.addEventListener('click',()=>{
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    myLeads.push(tabs[0].url);
  localStorage.setItem('myLeads', JSON.stringify(myLeads));
  renderLeads(myLeads);
})
});

deleteBtn.addEventListener('dblclick',()=>{
  // clear
  localStorage.clear();
  myLeads = [];
  renderLeads(myLeads);
}, false);


inputBtn.addEventListener('click',()=>{
  myLeads.push(inputEl.value);
  localStorage.setItem('myLeads', JSON.stringify(myLeads))
  // clear the input
  inputEl.value = '';
  renderLeads(myLeads);
})


function renderLeads(leads) {
  let listItems = '';
  for (let count = 0; count < leads.length; count++) {
    // collect list items
    listItems += `
    <li>
      <a href="${leads[count]} target='_blank'" >${leads[count]}
      </a>
    </li>`;
  }
  // assign to ulEl
  ulEl.innerHTML = listItems;
}


