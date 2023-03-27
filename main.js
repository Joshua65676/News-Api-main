const API_KEY = 'ef95f42364466f9c1b482b9c9fad40eb'
let headlines = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&max=10&apikey=${API_KEY}`

newsType.innerHTML="<h4>Headlines News</4>"

fetch(headlines).then((res)=>{  
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