import { useState } from "react";
import "./styles.css";

const movieList = {
  action: [
    {
      name: "transformers",
      IMDb: "IMDb : 7 / 10 ",
      imgURl: "https://wallpapercave.com/wp/wp4768393.jpg"
    },
    {
      name: "deadpool",
      IMDb: "IMDb : 7.7 / 10 ",
      imgURl:
        "https://www.bing.com/th?id=OIP.yuKZMJKJqinoYkySnKZMgAHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
    },
    {
      name: "superman",
      IMDb: "IMDb : 7.4 / 10",
      imgURl:
        "https://th.bing.com/th/id/OIP.F-h6lrICmtoJ2Kn6FCgECwHaEK?w=277&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    }
  ],
  romance: [
    {
      name: "your name",
      IMDb: "IMDb : 8.4 / 10",
      imgURl:
        "https://th.bing.com/th/id/OIP.l7-4TgL7BV9JopVf-_4jFQHaFJ?w=265&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      name: "titanic",
      IMDb: "IMDb : 7.9 / 10 ",
      imgURl:
        "https://www.bing.com/th?id=OSK.23ef584f319f07f52054dab6d1d27898&w=116&h=168&c=7&o=6&oif=webp&dpr=1.3&pid=SANGAM"
    },
    {
      name: "lunchbox",
      IMDb: "IMDb : 7.8 / 10",
      imgURl:
        "https://www.bing.com/th?id=OSK.66b1f30f46d799b12b10c4a44207fbb4&w=116&h=168&c=7&o=6&dpr=1.3&pid=SANGAM"
    }
  ],
  Comedy: [
    {
      name: "3 idiots",
      IMDb: "IMDb : 8.4 / 10",
      imgURl:
        "https://www.bing.com/th?id=OSK.e06f0f9f0bec21a6ee9c25d7894de985&w=116&h=168&c=7&o=6&dpr=1.3&pid=SANGAM"
    },
    {
      name: "pk",
      IMDb: "IMDb : 8.1 / 10",
      imgURl:
        "https://www.bing.com/th?id=OSK.5987396aaceedd0f39c5dd5c851ee267&w=116&h=168&c=7&o=6&dpr=1.3&pid=SANGAM"
    },
    {
      name: "golmaal",
      IMDb: "IMDb : 7.4 / 10",
      imgURl:
        "https://www.bing.com/th?id=OSK.64ed2950e1acbdf86d99bb25b71577d3&w=124&h=168&c=7&o=6&dpr=1.3&pid=SANGAM"
    }
  ]
};

export default function App() {
  let [movies, setmovies] = useState("action");

  // click handler
  function clickHandler(movie) {
    setmovies(movie);
  }

  return (
    <div className="App">
      <h1>my favourite movies</h1>

      <div className="movie">
        {/* converting object animelist to array for displaying */}
        {Object.keys(movieList).map((movie) => (
          <span
            key={movie}
            className="movieName"
            onClick={() => clickHandler(movie)}
          >
            {" "}
            {movie}
          </span>
        ))}
      </div>
      {/* displaying name and rating */}
      <main>
        {movieList[movies].map((list) => (
          <span key={list.name}>
            {" "}
            <span className="flex">
              {" "}
              <img className="image" src={list.imgURl} alt="img" />
              <span className="arrange"> {list.name} </span>
              <span className="arrange"> {list.IMDb} </span>{" "}
            </span>
          </span>
        ))}
      </main>
    </div>
  );
}
