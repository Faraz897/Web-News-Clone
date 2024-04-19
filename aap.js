let getdiv = document.getElementById('getdiv')
let getsearch = document.getElementById('news')

let getnews =()=>{
  fetch(`https://newsapi.org/v2/everything?q=${getsearch.value}&from=2024-03-19&sortBy=publishedAt&apiKey=ce8176cc8c9a4ea9a000a8e82e2931af`)
.then(data => data.json())
.then(data =>{
  for(let i = 0; i< data.articles.length; i++){
   getdiv.innerHTML += `
   <div class="card p-3 m-3" style="width: 18rem;">
  <img src="${data.articles[i].urlToImage}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
  }
} 

)
.catch(err => console.log(err))


}

