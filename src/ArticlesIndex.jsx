export function ArticlesIndex({ articles }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-4 mr-4">
      <h1 className="text-3xl font-bold mb-4">All articles ({articles.length} total)</h1>
      {articles.map((article) => (
        <div key={article.title} className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">{article.title}</h2>
          <img src={article.urlToImage} alt="" />
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
}