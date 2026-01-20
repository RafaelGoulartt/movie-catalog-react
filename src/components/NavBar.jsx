
function NavBar() {

    return(
        <nav className="fixed w-full  bg-black  py-5 z-10">
            <div className="flex justify-between">
                <div className="flex items-center justify-center w-1/5">
                     {/* <a href=""><img className="w-35" src="../../public/img/logos.png" alt="" /></a> */}
                     <a className="text-2xl text-bold text-orange-500" href="">RafaSite</a>
                </div>
                <div className="flex items-center justify-center gap-10 px-10  w-3/5">
                    <a className="px-5 py-3 rounded-lg text-orange-500 hover:bg-orange-500 duration-400 hover:text-black" href="#home">HOME</a>
                    <a className="px-5 py-3 rounded-lg text-orange-500 hover:bg-orange-500 duration-400 hover:text-black" href="#home">FILMES</a>
                    <a className="px-5 py-3 rounded-lg text-orange-500 hover:bg-orange-500 duration-400 hover:text-black" href="#home">SERIES</a>

                    <div className="relative border border-orange-500  text-white p-3 rounded-md w-2/5 flex items-center gap-2 hover:shadow-lg hover:shadow-orange-500  duration-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                        <input className="bg-transparent outline-none w-full" type="text" placeholder="Pesquise filmes ou séries"/> 
                    </div>
                </div>
            </div>           
        </nav>
    )
}

export default NavBar