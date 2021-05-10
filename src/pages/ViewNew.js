import Resources from '../resources/Resources'
const ViewNew = async () => {
  const hash =location.hash.slice(1).toLocaleLowerCase().split('/')[1]
  const news = await Resources.getNewById(hash)
  console.log(news)
  const view = `
    <div class="news-main">
      <h1 class="news--title">${news.title} </h1>
      <figure>
        <img src="${news.image}" alt="news picture">
      </figure>
      <p class="news--content">${news.content} </p>
      <h4 class="news--tag">tag: ${news.tag} </h4>
    </div>
  `
  return view
}

export default ViewNew;