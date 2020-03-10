let listEl = document.querySelector('.pagination');
let page = 0;

async function readImage(i) {
    let containerEl = document.querySelector(".container");
    containerEl.innerHTML = '';
    try { 
        let img = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`);
        let images = await img.json();
        for (let image of images) {
            let cardImg = `<img class="container-img materialboxed" src="${image.download_url}">`;
            containerEl.insertAdjacentHTML('beforeend', cardImg);
        }
        M.AutoInit();
    }
    catch {
        alert("So sorry, it's error...")
    }
}

function pagination(event) {
    let paginationEl = listEl.children;

    for(let i = 0; i < listEl.children.length; i++) {
        paginationEl = listEl.children[i];
        paginationEl.classList.remove('pagination__item--active');

        if(event.target == listEl.children[i]) {
            paginationEl = listEl.children[i];
            paginationEl.classList.add('pagination__item--active');
            page = i;
            readImage(page);
        }
    }
    
    
}

listEl.addEventListener('click', pagination);
readImage(page);