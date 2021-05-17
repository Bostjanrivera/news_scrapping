import Resources from '../resources/Resources'
const ViewNew = async () => {
  const hash =location.hash.slice(1).toLocaleLowerCase().split('/')[1]
  const news = await Resources.getNewById(hash)
  console.log(news)
  const view = `
    <div class="news-main">
      <div class="news-main__header">
        <h1 class="news-main--title">${news.title} </h1>
        <h2>${news.author}</h2>
        <p>${news.date}</p>
      </div>
      <figure>
        <img src="${news.image}" alt="news picture">
      </figure>
      <div class="news-content">
        <p class="news-content-text">${news.content} </p>
        <h4 class="news--tag">tag: ${news.tag} </h4>
      </div>
    </div>
  `
  return view
}

export default ViewNew;