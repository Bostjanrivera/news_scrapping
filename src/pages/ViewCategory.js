import Resources from '../resources/Resources'

const ViewCategory = async () => {
  const category = location.hash.slice(1).toLocaleLowerCase().split('/')[2]
  const newsList = await Resources.getNewsByTag(category)
  console.log(newsList)
  const view = `
    <div class="main-home">
      <nav>
        <ul class="nav">
          <li><a href="/">All</a></li>
          <li><a href="/#/category/physics">Fisica</a></li>
          <li><a href="/#/category/astronomy">Astronomia</a></li>
          <li><a href="/#/category/neuroscience">neurociencia</a></li>
          <li><a href="/#/category/antropologhy">Antropologia</a></li>
        </ul>
      </nav>
      <section class="news">
        <div class="notice_container">
          ${newsList.map(news => `
          <div class="notice-card">
            <img src="${news.image}" alt="notice image">
            <div class="notice-card_text">
              <a href="https://bostjanrivera.github.io/news_scrapping/#/${news._id.$oid}">${news.title}</a>
              <p>${news.content} </p>
              <h4 class="notice-card--tag">${news.tag}</h4>
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