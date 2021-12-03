// TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

import axios from "axios";

const Card = (article) => {
  
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const cardImg = document.createElement('img');
  const authorName = document.createElement('span');

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(cardImg);
  author.appendChild(authorName);

  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  headline.textContent = article.headline;
  cardImg.src = article.authorPhoto;
  authorName.textContent = `By ${article.authorName}`;

  return card;
}
// END OF CARD FUNCTION

// TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

const cardAppender = (selector) => {
  axios.get('http://localhost:5000/api/articles')
    .then(resp => {
        const cardElems = (resp.data.articles).map(elem => {
          console.log(Card(elem));
        })
        cardElems.forEach(element => {
          console.log(element);
        })
        
    }).catch(err => {
      console.error(err);
    })
}

/* 
resp.data.articles.forEach((elem) => {
        elem.forEach((element) => {
          const cardEntry = document.querySelector(selector);
          cardEntry.appendChild(Card(element));
        })
      }) 
*/

export { Card, cardAppender }
