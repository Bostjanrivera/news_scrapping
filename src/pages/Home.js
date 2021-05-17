const Home = (newsList) => {
  console.log(newsList)
  const view = `
    <div class="main-home">
      <nav>
        <ul class="nav">
          <li><a href="https://bostjanrivera.github.io/news_scrapping">All</a></li>
          <li><a href="https://bostjanrivera.github.io/news_scrapping/#/category/physics">Fisica</a></li>
          <li><a href="https://bostjanrivera.github.io/news_scrapping/#/category/astronomy">Astronomia</a></li>
          <li><a href="https://bostjanrivera.github.io/news_scrapping/#/category/neuroscience">Neurociencia</a></li>
          <li><a href="https://bostjanrivera.github.io/news_scrapping/#/category/anthropology">Antropologia</a></li>
        </ul>
      </nav>
      <h1 class="category--title">All News</h1>
      <section class="news">
        <div class="notice_container">
          ${newsList.filter(news =>  news.title != null).map(news => `
          <div class="notice-card">
            <figure>
              <img src="${news.image}" alt="notice image">
            </figure>
            <div class="notice-card_text">
              <a href="https://bostjanrivera.github.io/news_scrapping/#/${news._id.$oid}">${news.title}</a>
              <h4 class="notice-card--tag">${news.date}</h4>
            </div>
          </div>
          `).join('')}
        </div>
      </section>
      <div class="intro">
        <h1 class="intro--text">SC News</h1>
      </div>
    </div>
  `;

  return view;
}

export default Home;