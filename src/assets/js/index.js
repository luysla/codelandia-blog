import { news } from "./data.js";

const content = document.getElementById('content-card');

const handleLike = (index) => {

    if(news[index].loved) { 
        news[index].loved = false 
    } else { 
        news[index].loved = true 
    } 
}

content.innerHTML = news.map((item, index) => {
    return(
        `
            <div class="card">
                <div class="card__header">
                    <p class="card__date">${item.date}</p>
                    
                    <button class="card__like">
                        <i class="fa fa-heart-o card__icon"></i>
                    </button>
                    
                </div>
                <p class="card__title">${item.title}</p>
                <p class="card__description">${item.description}</p>
            </div>
        `
    )
}).join('')

const buttonLike = document.querySelectorAll('.card__like');

buttonLike.forEach((item, index) => {
    item.addEventListener('click', () => {
        handleLike(index);
    })
})




