import HeroSeries from "../components/HeroSerie";
import NavBar from "../components/NavBar";
import HeroSeriesTopRated from "../components/HeroSeriesTopRated";

function SeriePage() {
    return(
        <div>
            <NavBar />    
            <HeroSeries/>
            <HeroSeriesTopRated/>   
        </div>
    );

}

export default SeriePage;