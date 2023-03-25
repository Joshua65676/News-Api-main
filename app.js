// const { data } = require("jquery");

const searchForm = document.querySelector('.search');
const input = document.querySelector('.input');
const newsType = document.getElementById('news-type');
const newsList = document.getElementById('news-list');


searchForm.addEventListener('submit', click)

function click(e){
    if (input.value == '') {
        alert('input field is empty!')
        return
    }
     newsType.innerHTML = "<h4>"+input.value+"</h4>";
     newsList.innerHTML = ''

    e.preventDefault()

    const API_KEY = 'ef95f42364466f9c1b482b9c9fad40eb'
    let topic = input.value;

    let url = `https://gnews.io/api/v4/search?q=${topic}&lang=en&max=10&apikey=${API_KEY}`
 
    fetch(url).then((res)=>{  
        return res.json()
    }).then((data)=>{
        console.log(data)
        data.articles.forEach(articles => {

            var date = articles.publishedAt.split("T")

            var col = document.createElement('div');
            col.className="col-sm-2 col md-2 col-lg-3 p-2 card";

            var card = document.createElement('div');
            card.className = "p-2";

            var image = document.createElement('img');
            image.setAttribute("height", "matchparnt");
            image.setAttribute("width", "100%");
            image.src=articles.image;

            var cardBody = document.createElement('div');

            var newsHeading = document.createElement('h5');
            newsHeading.className = "card-title";
            newsHeading.innerHTML = articles.title;

            var dateHeading = document.createElement('h6');
            dateHeading.className = "text-primary";
            dateHeading.innerHTML = date[0];

            var description = document.createElement('p');
            description.className = "text-muted";
            description.innerHTML = articles.description;

            var link = document.createElement('a');
            link.className = "btn btn-dark";
            link.setAttribute("target", " _blank");
            link.href = articles.url;
            link.innerHTML="Read More";

            cardBody.appendChild(newsHeading);
            cardBody.appendChild(dateHeading);
            cardBody.appendChild(description);
            cardBody.appendChild(link);

            card.appendChild(image);
            card.appendChild(cardBody);

            col.appendChild(card);

            newsList.appendChild(col);
        });
    })
    .catch(err => console.error(err));
}