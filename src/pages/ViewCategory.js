import Resources from '../resources/Resources'

const ViewCategory = async () => {
  const category = location.hash.slice(1).toLocaleLowerCase().split('/')
  const newsList = await Resources.getNewsByTag(category[2])
  console.log(newsList)
  const view = `
    <div class="main-home">
      <nav>
        <ul class="nav">
          <li><a href="https://bostjanrivera.github.io/news_scrapping">All</a></li>
          <li><a href="https://bostjanrivera.github.io/news_scrapping/#/category/physics">Fisica</a></li>
          <li><a href="https://bostjanrivera.github.io/news_scrapping/#/category/astronomy">Astronomia</a></li>
          <li><a href="https://bostjanrivera.github.io/news_scrapping/#/category/Neuroscience">neurociencia</a></li>
          <li><a href="https://bostjanrivera.github.io/news_scrapping/#/category/anthropology">Antropologia</a></li>
        </ul>
      </nav>
      <p class="category--title"><span>${category[1]}: </span> ${category[2]} </p>
      <section class="news">
        <div class="notice_container">
          ${newsList.map(news => `
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

export default ViewCategory;