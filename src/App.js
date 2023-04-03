import { useEffect, useState } from "react";

import Card from "@mui/material/Card";

import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

function App() {
  const [loading, setLoading] = useState(true);

  const API =
    "https://api.nasa.gov/planetary/apod?api_key=mZOd04B04VfddJyxgt29puJAvUmuV9Yr9w0tuLbD";
  const [data, setData] = useState([]);
  const fetchdata = async () => {
    const response = await fetch(`${API}`);
    const data = await response.json();
    setData(data);
    setLoading(false);
    //console.log(data);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <Card
    align="center"
      sx={{
        boxShadow: 3,
        m: "5px",
        width: "99vw",
        height: "99vh",
        overflow: "auto",
      }}
    >
      {loading ? (
        <Typography variant="h4" sx={{ p: "10px" }}>
          Loading........
        </Typography>
      ) : (
        <CardContent>
          <Typography variant="h3" sx={{ p: "10px" }}>
            This is " {data.title} "
          </Typography>
          <img
            src={data.hdurl}
            alt=""
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "100%",
            }}
          />
          {!data.copyright ? (
            <Typography variant="h4" sx={{ p: "10px" }}>
              NASA Astronomy Picture of The Day
            </Typography>
          ) : (
            <Typography variant="h4" sx={{ p: "10px" }}>
              Image copyright @ {data.copyright}
            </Typography>
          )}
          <Typography variant="h4" sx={{ p: "10px" }}>
            Description
          </Typography>
          <Typography variant="h6" sx={{ p: "10px" }}>
            {data.explanation}
          </Typography>
          <footer>
            <Typography
              variant="h6"
              gutterBottom
              align="center"
              sx={{ p: "10px" }}
            >
              Website by Kajal Biswas using React.js,NASA open api and MUI
            </Typography>
          </footer>
        </CardContent>
        
      )}
    </Card>
  );
}

export default App;
