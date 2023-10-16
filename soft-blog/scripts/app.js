function solve() {
   document.querySelector('main').addEventListener('click', onClick);
   document.querySelector('form').addEventListener('submit', onSubmit);
   const atriclesSection = document.querySelector('main section');
   const archiveList = document.querySelector('.archive-section ol');

   function onSubmit(ev) {
      ev.preventDefault();
      [author, title, category] = Array.from(ev.target.querySelectorAll('input'));
      const content = document.querySelector('#content');
      const article = templating(author, title, category, content)
      atriclesSection.appendChild(article);
      author.value = '';
      title.value = '';
      category.value = '';
      content.value = '';
   }

   function onClick(event) {
      event.preventDefault();
      const ev = event.target;
      if (ev.tagName == "BUTTON") {
         const parent = ev.parentNode.parentNode;
         if (ev.className == 'btn delete') {
            parent.remove();
         }
         if (ev.className == 'btn archive') {
            const title = parent.querySelector('h1').innerHTML;
            const li = document.createElement('li');
            li.innerHTML = title;
            archiveList.prepend(li);
            parent.remove();
         }
      }
   }

   function templating(author, title, category, content) {
      const article = document.createElement('article');
      const h1 = document.createElement('h1');
      h1.innerHTML = title.value;
      article.appendChild(h1);
      for (const array of [['Category: ', category], ['Author: ', author]]) {
         const p = document.createElement('p');
         const strong = document.createElement('strong');
         p.innerHTML = array[0];
         strong.innerHTML = array[1].value
         p.appendChild(strong);
         article.appendChild(p);
      }
      const p = document.createElement('p');
      p.innerHTML = content.value;
      article.appendChild(p);
      const div = document.createElement('div');
      for (const array of [["btn", "delete", 'Delete'], ["btn", "archive", 'Archive']]) {
         const button = document.createElement('button');
         button.classList.add(array[0], array[1]);
         button.textContent = array[2];
         div.appendChild(button);
      }
      article.appendChild(div);
      return article;
   }

}
