import { Component } from "react";

class GallFilm extends Component{

    render() {

        return(
            <>
          <div className="col mb-4 text-center px-1" key={this.props.key}>
            <img className="poster-img" src={this.props.src} alt="movie picture" />
          </div>
            </>
        )
    }
}

export default GallFilm;