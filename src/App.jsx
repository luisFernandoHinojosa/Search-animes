import axios from "axios";
import "./App.css";
import { useState } from "react";
import { AnimeList } from "./assets/components/AnimeList";

function App() {

  const [animes, setAnimes] = useState([])

  const handleSubmit = (e)=>{
    e.preventDefault()
    const animeName = (e.target.name.value)
    
    axios.get(`https://api.jikan.moe/v4/anime?q=${animeName}`).then(({data})=>setAnimes(data.data)).catch((err)=>console.log(err))
  }
console.log(animes,"")
  console.log("br",animes)
  console.log("culerito")
  console.log("tercer commit")

  return (
    <main className="bg-black min-h-screen text-white pt-5">
      <h1 className="text-center text-2xl font-semibold">Anime Searcher</h1>

      <form onSubmit={handleSubmit}
        className="flex max-w-max mx-auto mt-4 rounded-lg overflow-hidden"
      >
        <input name="name" className="text-black outline-none px-4" type="search" />
        <button className="bg-red-500 p-2 px-4 hover:bg-red-600 transition-colors ">
          Search
        </button>
      </form>

     <AnimeList animes={animes}/>
    </main>
  );
}

export default App;
