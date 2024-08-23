import { Component } from "react";
import GallFilm from "./GallFilm";

class Gallerie extends Component {

    render() {
        return(
            <>
        <h4 className="text-white text-start">Trending Now</h4>
        <div
          className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4"
        >
            <GallFilm />
            <GallFilm />
            <GallFilm />
        </div>
            </>
        )
    }
}

export default Gallerie;