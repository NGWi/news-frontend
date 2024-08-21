import { ArticlesPage } from "./ArticlesPage"
import { GitHubProfile } from "./GitHubProfile";
import axios from "axios";
import { useEffect } from "react"
function App() {
  const handleOAuth = () => {
    console.log("handleOAuth");
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    if (code) {
      console.log("get access token");
      axios.get("http://localhost:3000/auth/github/callback?code=" + code).then((response) => {
        console.log(response.data);
        if (response.data.access_token) {
          localStorage.setItem("github_access_token", response.data.access_token);
        }
        window.location.href = "/";
      });
    }
  };

  useEffect(handleOAuth, []);
  return (
      <div className="container mx-auto p-4 mt-4 pl-4 pr-4">
        <a href="https://github.com/login/oauth/authorize?client_id=Ov23liT4fKNlU5P5JrWF">Sign into GitHub</a>
        <GitHubProfile /> 
        <ArticlesPage />
      </div>
  )
}

export default App
