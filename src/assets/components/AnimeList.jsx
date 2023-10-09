export const AnimeList = ({ animes }) => {
  return (
    <section className="px-4 py-10 grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-5 max-w-[1024px] mx-auto">
      {animes.map((anime) => (
        <article className="bg-white text-black rounded-xl overflow-hidden grid grid-rows-[auto_1fr]" key={anime.mal_id}>
          <header className="h-[300px]">
            <img className="h-full w-full object-cover" src={anime.images.webp.large_image_url} alt="" />
          </header>
          <div className="p-4 flex flex-col justify-around">
            <h4 className="font-bold mb-1 line-clamp-2">{anime.title}</h4>
            <p className="line-clamp-4 text-sm">{anime.synopsis}</p>
          </div>
        </article>
      ))}
    </section>
  );
};
