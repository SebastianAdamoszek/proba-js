function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},s=o.parcelRequirec012;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var s={id:e,exports:{}};return n[e]=s,o.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},o.parcelRequirec012=s),s("ifJdc").register(JSON.parse('{"eFRlh":"index.cc25ea86.js","8yB8n":"amazon-light-mode.2bed2965.svg","1S3Rj":"apple-books.1507f0a5.svg","bSbOs":"shopping-list.18c3d232.css","8H24j":"index.ded362ba.js"}')),s("lXnOV"),s("kM5jX");var i,a=s("7IoHk"),l=s("b374K"),d=s("lXnOV");i=new URL(s("ifJdc").resolve("8yB8n"),import.meta.url).toString();var r;r=new URL(s("ifJdc").resolve("1S3Rj"),import.meta.url).toString();const c=document.querySelector(".modal-card"),_=document.querySelector(".books__list"),m=document.querySelector(".loader--modal");let p=l.load("myBooksId")||[],v=document.querySelector(".modal-card__close-box")||null;m.style.display="none";const u=()=>{c.innerHTML="",v.removeEventListener("click",u),window.removeEventListener("keydown",g),window.removeEventListener("click",b)},g=e=>{"Escape"===e.key&&(c.innerHTML="",window.removeEventListener("keydown",g),v.removeEventListener("click",u),window.removeEventListener("click",b))},b=e=>{e.target.classList.contains("modal-card__backdrop")&&(c.innerHTML="",window.removeEventListener("click",b),window.removeEventListener("keydown",g),v.removeEventListener("click",u))},k=e=>{const o=e.target.dataset.modalid;p=l.load("myBooksId")||[];const n=document.querySelector(".button-shopping__content"),t=document.querySelector(".modal-card__congrats"),s=document.querySelector(".modal-card__img-box");if(-1===p.indexOf(o))return p.push(o),l.save("myBooksId",p),s.classList.add("animate-add-to-cart"),n.textContent="Remove from the shopping list",t.style.display="inline",void s.addEventListener("animationend",(()=>{s.classList.remove("animate-add-to-cart")}));if(-1!==p.indexOf(o)){const e=p.indexOf(o);return p.splice(e,1),l.save("myBooksId",p),s.classList.add("animate-remove-from-cart"),n.textContent="Add to shopping list",t.style.display="none",void s.addEventListener("animationend",(()=>{s.classList.remove("animate-remove-from-cart")}))}},h=o=>{const{_id:n,book_image:t,title:s,description:a,author:d,buy_links:_}=o,m=`<div class="modal-card__backdrop loading-gentle">\n  <div class="modal-card__box">\n    <div class="modal-card__close">\n      <button type="button" class="modal-card__close-box">\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          width="24"\n          height="24"\n          viewBox="0 0 28 28"\n          fill="#111111"\n        >\n          <path\n            d="M21 7L7 21M7 7L21 21"\n            stroke-width="3"\n            stroke-linecap="round"\n            stroke-linejoin="round"\n          />\n        </svg>\n      </button>\n    </div>\n    <div class="modal-card__body">\n      <div class="modal-card__img-box loading-gentle">\n        <img\n          src="${t}"\n          alt="Book\n        cover"\n          class="modal-card__img"\n        />\n      </div>\n      <div class="modal-card__info">\n        <div class="modal-card__info-body">\n          <h2 class="modal-card__title">${s}</h2>\n          <h3 class="modal-card__author">${d}</h3>\n          <p class="modal-card__description">${a}</p>\n        </div>\n        <div class="modal-card__shops">\n          <ul class="shops-list modal">\n            <li class="shops-list__item modal">\n              <a\n                href="${_[0].url}"\n                target="_blank"\n                rel="nofollow noopener noreferrer"\n                class="shops-list__link modal"\n              >\n                <div class="shops-list__icon-box shops-list__icon-box--amazon modal">\n                  <img\n                    src="${e(i)}"\n                    alt="Amazon logo"\n                    class="shops-list__icon-img-amazon modal"\n                  />\n                </div>\n              </a>\n            </li>\n            <li class="shops-list__item modal">\n              <a\n                href="${_[1].url}"\n                target="_blank"\n                rel="nofollow noopener noreferrer"\n                class="shops-list__link modal"\n              >\n                <div class="shops-list__icon-box shops-list__icon-box--apple modal">\n                  <img\n                    src="${e(r)}"\n                    alt="Apple Books logo"\n                    class="shops-list__icon-img-apple modal"\n                  />\n                </div>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class="button-shopping__box">\n      <div class="button-shopping">\n        <button class="button-shopping__content" data-modalid="${n}">add to shopping list</button>\n      </div>\n      <div class="button-shopping__comment modal-card__congrats">\n        <p class="button-shopping__comment-text">\n          Congratulations! You have added the book to the shopping list. To delete, press the button\n          "Remove from the shopping list".\n        </p>\n      </div>\n    </div>\n  </div>\n</div>`;c.insertAdjacentHTML("beforeend",m),v=document.querySelector(".modal-card__close-box"),v.addEventListener("click",u),window.addEventListener("keydown",g),window.addEventListener("click",b),(e=>{const o=document.querySelector(".button-shopping__content"),n=document.querySelector(".modal-card__congrats");p=l.load("myBooksId")||[],-1===p.indexOf(e)?(o.textContent="Add to shopping list",n.style.display="none"):-1!==p.indexOf(e)&&(o.textContent="Remove from the shopping list",n.style.display="inline")})(n);document.querySelector(".button-shopping__content").addEventListener("click",k)};_.addEventListener("click",(o=>{if(o.target.classList.contains("books__list--image")||o.target.classList.contains("books__list--title")||o.target.classList.contains("books__list--overlay")||o.target.classList.contains("books__list--overlay-text")){const t=o.target.dataset.mainid;c.innerHTML="",n=t,m.style.display="block",(0,d.getBooksApi)(n).then((e=>(m.style.display="none",h(e.data)))).catch((o=>{e(a).Notify.failure("Ooops... Something went wrong! Please, try again.")}))}var n})),s("a7nVE"),s("3dMYq");d=s("lXnOV");var y=s("IsBYg");const f=document.querySelector(".categories__list ul"),w=document.querySelector(".books__header"),L=document.querySelector(".books__list"),x=document.querySelector(".loader--books-list");let E,H,S;const $=e=>{E&&E.classList.remove("change-category-color"),e.classList.add("change-category-color"),E=e},M=e=>{const o=e.split(" "),n=o.pop(),t=o.join(" ");w.innerHTML=`${t} \n        <span class="books__header--color">\n\n        ${n}</span>`};(async()=>{const e=await(0,d.getBooksApi)(d.categoryList);q(e.data)})();const q=e=>{e.forEach((e=>{const o=document.createElement("li");f.append(o),o.classList.add("categories__item"),o.innerHTML=`${e.list_name}`})),f.addEventListener("click",(e=>B(e.target)))},T=()=>(L.innerHTML="",window.matchMedia("(max-width: 767px)").matches?R(S,1):window.matchMedia("(max-width: 1439px)").matches?R(S,3):R(S,5)),B=e=>{L.innerHTML="",$(e),"All categories"===e.innerHTML?(O(),window.addEventListener("resize",T)):(window.removeEventListener("resize",T),A(e.innerHTML))},A=async e=>{L.innerHTML="",x.style.display="block";for(const o of f.children)o.innerHTML===e&&$(o);H=`category?category=${e}`;const o=await(0,d.getBooksApi)(H);return x.style.display="none",I(o)},I=e=>{M(e.data[0].list_name),e.data.forEach((e=>{const o=document.createElement("li");L.append(o),o.innerHTML=`\n        <div class="books__list--card"><div class='books__list--box'><div data-mainId='${e._id}' class='books__list--overlay'><span data-mainId='${e._id}' class='books__list--overlay-text'>quick view</span></div><img data-mainId="${e._id}" src="${e.book_image}" class="books__list--image"/></div>\n        <div class="books__list--description">\n        <span data-mainId="${e._id}" class="books__list--title">${e.title}</span>\n        <br/>\n        <span class="books__list--author">${e.author}</span>\n        </div>\n        </div>`}))},O=async()=>{x.style.display="block",$(f.firstElementChild);const e=await(0,d.getBooksApi)(d.topBooks);return S=e.data,x.style.display="none",T(),S},R=(e,o)=>{M("Best Sellers Books");for(const n of e){const e=document.createElement("li");L.append(e),e.classList.add("books__list--category"),e.insertAdjacentHTML("beforeend",`<span class="books__list--category-name">${n.list_name}</span><ul class="books__list--category-set"></ul><div class='books__list--category-see-more'><button onclick="window.location.href='#gototitle'" class='see-more-btn'>see more</button></div>`);let t=n.books.slice(0,o);for(const e of t){let o=document.querySelectorAll(".books__list--category-set");o[o.length-1].insertAdjacentHTML("beforeend",`<li class="books__list--element-info"><div class='books__list--box'><div data-mainId='${e._id}' class='books__list--overlay'><span data-mainId='${e._id}' class='books__list--overlay-text'>quick view</span></div><img data-mainId="${e._id}" class="books__list--image" src="${e.book_image}"/></div><div class="books__list--element-description"><span data-mainId="${e._id}" class="books__list--title">${e.title}</span><br/><span class="books__list--author">${e.author}</span></div></li>`)}}};B(f.firstElementChild),document.addEventListener("click",(function(e){const o=e.target.closest(".see-more-btn");if(o){const e=o.parentNode.parentNode.firstElementChild.innerHTML;window.removeEventListener("resize",T),A(e)}(0,y.updateBookCount)()})),s("9Sazl"),s("IsBYg"),s("fHUOQ");
//# sourceMappingURL=index.cc25ea86.js.map
