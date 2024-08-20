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

// useEffect(handleIndex); // Doing Search button instead. Live reload Will get {"status"=>"error",
  //  "code"=>"rateLimited",
  //  "message"=>
  //   "You have made too many requests recently. Developer accounts are limited to 100 requests over a 24 hour period (50 requests available every 12 hours). Please upgrade to a paid plan if you need more requests."}


  return (
    <main>
      <div>
        Live Search:
        <input value={searchTerms} onChange={(e) => setSearchTerms(e.target.value)} type="text" />
        <button onClick={handleIndex}>Search</button>
      </div>
        <ArticlesIndex articles={articles} />
    </main>
  );
}
