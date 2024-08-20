import axios from "axios";
import { useEffect, useState } from "react";
import { ArticlesIndex } from "./ArticlesIndex";

export function ArticlesPage() {
  const [searchTerms, setSearchTerms] = useState("API");
  const [articles, setArticles] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    console.log("searchTerms:", searchTerms);
    axios.get("http://localhost:3000/articles.json?search_terms=" + searchTerms + "").then((response) => {
      console.log(response.data);
      setArticles(response.data);
    });
  };

  useEffect(handleIndex);

  return (
    <main>
      <div>
        Live Search:
        <input value={searchTerms} onChange={(e) => setSearchTerms(e.target.value)} type="text" />
      </div>
        <ArticlesIndex articles={articles} />
    </main>
  );
}
