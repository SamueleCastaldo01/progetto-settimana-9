import { Component } from "react";

class GallFilm extends Component{

    render() {

        return(
            <>
          <div className="col mb-2 text-center px-1">
            <img className="img-fluid" src={this.props.src} alt="movie picture" />
          </div>
            </>
        )
    }
}

export default GallFilm;