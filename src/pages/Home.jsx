export default function Home() {
  const filmes = [
    {
      id: 1,
      titulo: "Batman",
      ano: 2022,
      imagem:
        "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    },

    {
      id: 2,
      titulo: "Homem-Aranha",
      ano: 2021,
      imagem:
        "https://image.tmdb.org/t/p/w500/5weKu49pzJCt06OPpjvT80efnQj.jpg",
    },

    {
      id: 3,
      titulo: "Vingadores: Ultimato",
      ano: 2019,
      imagem:
        "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    },

    {
      id: 4,
      titulo: "Interestelar",
      ano: 2014,
      imagem:
        "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎬 Meu Cine Clube</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {filmes.map((filme) => (
          <div
            key={filme.id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <img
              src={filme.imagem}
              alt={filme.titulo}
              width="200"
              style={{
                borderRadius: "10px",
              }}
            />

            <h2>{filme.titulo}</h2>

            <p>Ano: {filme.ano}</p>
          </div>
        ))}
      </div>
    </div>
  );
}