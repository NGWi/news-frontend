export function ArticlesIndex({ articles }) {
  return (
    <div>
      <h1>All articles ({articles.length} total)</h1>
      {articles.map((article) => (
        <div key={article.title}>
          <h2>{article.title}</h2>
          <img src={article.urlToImage} alt="" />
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
}