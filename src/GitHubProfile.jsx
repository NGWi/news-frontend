import axios from "axios";
import { useState } from "react";

export function GitHubProfile() {
  const [profile, setProfile] = useState({});

  const handleClick = () => {
    const githubAccessToken = localStorage.getItem("github_access_token");
    if (githubAccessToken) {
      axios
        .get("https://api.github.com/user", { headers: { Authorization: "Bearer " + githubAccessToken } })
        .then((response) => {
          console.log(response);
          setProfile(response.data);
        });
    }
  };

  return (
    <div>
      <h1>GitHub Profile</h1>
      <p>Name: {profile.name}</p>
      <img src={profile.avatar_url} alt="" />
      <button onClick={handleClick}>Load profile</button>
    </div>
  );
}