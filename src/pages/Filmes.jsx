import HeroFilmes from "../components/HeroFilmes";
import NavBar from "../components/NavBar";
import HeroFilmesTopRated from "../components/HeroFilmesTopRated";

function FilmesPAge() {
    return(
        <div>
            <NavBar />    
            <HeroFilmes/> 
            <HeroFilmesTopRated/>
        </div>
    );

}

export default FilmesPAge;