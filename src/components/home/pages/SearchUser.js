import React, { useEffect } from "react";
import { TextField, Typography,  CircularProgress,  Card, CardMedia, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const SearchUser = () => {
  const [news, setNews] = React.useState([]);
  let [searchText, setSearchText] = React.useState("");
  let [loading, setLoading] = React.useState(true);
  const [filteredNews, setfilteredNews] = React.useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const NEW_API =
          "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=15b70fa011a94eef990296ebf4609a11";
        const res = await fetch(NEW_API);
        const data = await res.json();
        setNews(data.articles);
        setfilteredNews(data.articles);
        setLoading(false);
      } catch (error) {
        console.log("No News Found, Error Message", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const handleChange = (event) => {
    const term = event.target.value;
    setSearchText(term);

    if (term.trim() === "") {
      setfilteredNews(news);
    } else {
      const filtered = news.filter((item) =>
        item.title.toLowerCase().includes(term.toLowerCase())
      );
      console.log(filtered);
      setfilteredNews(filtered);
    }
  };

  return (
    <div>
      <h3>SearchUser</h3>
      <TextField
        fullWidth
        label="Search News by Title"
        value={searchText}
        onChange={handleChange}
        margin="normal"
      />

      {loading ? (
        <div>
          <CircularProgress />
        </div>
      ) : (
        <div>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 3, md: 4 }}
          >
            {filteredNews.map((value, index) => {
              return (
                <Grid item key={index} size={{ xs: 2, sm: 4, md: 4 }}git >
                  <Card>
                    <CardMedia sx={{ height: "200px" }} image={value.urlToImage}/>
                    <CardContent>
                      <Typography variant="h4">{value.title}</Typography>
                      <Typography variant="body2">
                        {value.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default SearchUser;
