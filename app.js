function solve() {
   const inputs = document.querySelectorAll('p');
   const nameInput = inputs[0].children[1];
   const titleInput = inputs[1].children[1];
   const categoryInput = inputs[2].children[1];
   const contentInput = inputs[3].children[1];
   const section = document.querySelector('main').children[0]
   const arhsection = document.getElementsByClassName('archive-section')[0]
   const arhive=[];


   function create(e) {
      e.preventDefault();
      const article = createElement('article')
     const h1 = createElement('h1',titleInput.value)
    const contentValue = createElement('p',contentInput.value)
     const nameValue = createElement('strong', nameInput.value)
     const categoryValue = createElement('strong', categoryInput.value)
     const categoryTag = createElement('p', 'Category:')
     categoryTag.appendChild(categoryValue)
     const creatorTag = createElement('p', 'Creator:')
     creatorTag.appendChild(nameValue)

     const buttonHolder = createElement('div', '',['class=buttons'])
     const deleteBTN = createElement('button', 'Delete', ['class=btn delete'])
     const archiveBTN = createElement('button', 'Archive', ['class=btn archive'])
      buttonHolder.appendChild(deleteBTN)
      buttonHolder.appendChild(archiveBTN)

article.appendChild(h1)
article.appendChild(categoryTag)
article.appendChild(creatorTag)
article.appendChild(contentValue)
article.appendChild(buttonHolder)
section.appendChild(article)
   }
   function deleteEl(e){
      e.preventDefault()
     e.target.parentNode.parentNode.remove();
      }
      function archive(e){
         e.preventDefault()
        const article= e.target.parentNode.parentNode;
const text = article.children[0];

article.remove();
const li = createElement('li',text.textContent)
arhive.push(li)
arhive.sort((a,b)=> a.textContent.localeCompare(b.textContent)).forEach(a => arhsection.children[1].appendChild(a));


      }
   function createElement(type, text, attributes = []) {
      let element = document.createElement(type)
      if (text) {
         element.textContent = text;
      }
      attributes.map(attr => attr.split('=')).forEach(([name, value]) => {
         element.setAttribute(name, value)
      });
      return element;
   }

   document.getElementsByTagName('main')[0].addEventListener('click', (e) => {

      if (e.target.tagName === 'BUTTON') {
         if (e.target.textContent === 'Archive') {

           archive(e)

        }
        else if(e.target.textContent === 'Delete'){
            deleteEl(e)
        }
      }
   });
   document.getElementsByTagName('aside')[0].addEventListener('click', (e) => {
      e.preventDefault();
      if (e.target.tagName === 'BUTTON') {
         create(e)
         console.log('click')
      }
   });
}
