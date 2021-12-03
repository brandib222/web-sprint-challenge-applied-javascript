// TASK 3
  // ---------------------
  // DONE Implement this function which takes an array of strings ("topics") as its only argument.
  // DONE As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // DONE The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

import axios from 'axios';

const Tabs = (topics) => {


    const tabsTopics = document.createElement('div');
    const tab = document.createElement('div');
    
    tabsTopics.appendChild(tab);
    
    tabsTopics.classList.add('topics');
    tab.classList.add('tab');
    
    tab.textContent = topics;

    return tabsTopics;
  
}
// END OF THE TABS

// TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
const tabsAppender = (selector) => {
  axios.get('http://localhost:5000/api/topics')
  .then(resp => {
    resp.data.topics.forEach((elem) => {
      const tabEntry = document.querySelector(selector);
      tabEntry.appendChild(Tabs(elem));
    })
  }).catch(err => {
      console.error(err);
    })
}
// END OF THE TABS APPENDER FUNCTION

/* .then(resp => {
      resp.data.topics.forEach((elem) => {
        const tabEntry = document.querySelector(selector);
        tabEntry.appendChild(Tabs(elem));
      }) */

export { Tabs, tabsAppender }
