function Hero() {

  return ( 
        <div className="relative bg-[url('/img/hero.png')] bg-cover bg-center h-screen hero">

            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative flex flex-col items-center justify-center h-full">
                <div className="mb-8 text-center">
                    <h1 className="text-7xl font-bold texto-dourado">Bem-vindo ao nosso</h1>
                    <h2 className="text-6xl font-bold texto-dourado">catálogo de filmes!</h2>
                </div>

                <p className="text-lg font-bold">Este site foi criado como um <span className="texto-dourado"> desafio entre amigos</span> para aprimorar minhas habilidades em programação.</p><p className="text-lg font-bold">Aqui você terá acesso a <span className="texto-dourado"> uma vasta coleção de filmes</span>, atualizada automaticamente através de uma API.</p>
                <p className="text-lg font-bold"><span className="texto-dourado">Explore</span> filmes de diversos gêneros, <span className="texto-dourado"> descubra novos lançamentos</span> e aproveite ao máximo o nosso catálogo.</p>
                <p className="text-lg font-bold">Divirta-se e encontre o próximo filme para assistir!</p>
            </div>
        </div>


  );
}

export default Hero;