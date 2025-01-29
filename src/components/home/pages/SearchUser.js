import React from 'react'
import { TextField } from "@mui/material";


export const SearchUser = () => {
  const [news, setNews] = React.useState([]);
  let [searchText, setSearchText] = React.useState("");
  let [loading, setLoading] = React.useState(false);

    const searchUser = async()=>{
    const NEW_API = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=15b70fa011a94eef990296ebf4609a11"
    const res = await fetch(NEW_API);
    const data = await res.json();
    setNews(data);
    console.log(data.articles);
}



  return (
    <div>
    <h3>SearchUser</h3>
    <TextField
    fullWidth
    label="Search News by Title"
    value={searchText}
    margin='normal'
    />

    <button onClick={searchUser}>Search</button>

    {
      news.map((item) => {
        return(
          <div>{item.title}</div>
        );
       })
    }


    </div>
  )
}

export default SearchUser