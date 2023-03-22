
const searchForm = document.querySelector('.search');
const input = document.querySelector('.input');
const newsList = document.querySelector('.news-list');

searchForm.addEventListener('submit', click)

function click(e){

    if (input.value == '') {
        alert('input field is empty!')
        return
    }

     newsList.innerHTML = ''

    e.preventDefault()

    const apiKey = '5d58b63839bb4117b458315096c75994'
    let topic = input.value;

    let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`

    fetch(url).then((res)=>{  
        return res.json()
    }).then((data)=>{
        console.log(data)
        data.articles.forEach(articles => {
            let img = document.createElement('img');
            let p = document.createElement('p')
            let li = document.createElement('li');
            let a = document.createElement('a');
            let div = document.createElement('div')
            // let img = document.createElement('img');
            img.src = (articles.urlToImage);
            a.setAttribute('href', articles.url);
            a.setAttribute('target', '_blank');
            a.textContent = articles.title;
            p.textContent =  (articles.description);
            // img.src = (articles.urlToImage);
            li.appendChild(img);
            // li.appendChild(p);
            li.appendChild(a);
            li.appendChild(p);
            // a.appendChild(img);
            newsList.appendChild(li);
        });
    })
    .catch(err => console.error(err));
}