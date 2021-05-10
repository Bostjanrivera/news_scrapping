const Home = (newsList) => {
  console.log(newsList[0])
  const view = `
    <div class="main-home">
      <nav>
        <ul class="nav">
          <li><a href="/">All</a></li>
          <li><a href="/#/category/Physics">Fisica</a></li>
          <li><a href="#">Salud</a></li>
          <li><a href="#">Fisica</a></li>
        </ul>
      </nav>
      <section class="news">
        <div class="notice_container">
          ${newsList.map(news => `
          <div class="notice-card">
            <img src="${news.image}" alt="notice image">
            <div class="notice-card_text">
              <a href="/#/${news._id.$oid}">${news.title}</a>
              <p>${news.content} </p>
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