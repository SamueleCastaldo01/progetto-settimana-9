import React, { Component } from "react";
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

class GallFilm extends Component {
  state = {
    isHovered: false,
  };

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { src, title, year, type } = this.props;
    const { isHovered } = this.state;

    return (
      <div 
        className="col mb-4 text-center px-1"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className={`GallFilmCont ${isHovered ? 'hovered' : ''}`}>
          <img className={`poster-img ${isHovered ? 'special-hover' : ''}`} src={src} alt="movie picture" />
          {isHovered && (
            <div className="film-details p-2 text-start position-absolute" style={{backgroundColor: "black"}}>
              <p className="mb-0 fw-bold">{title}</p>
              <div className="text-center">
                <Button className="w-100 bg-secondary" variant="contained" startIcon={<PlayArrowIcon />}>Riproduci</Button>
              </div>
              <p className="m-0 mt-2"><b>Anno:</b> {year}</p>
              <p className="m-0 mt-2"><b>Tipo:</b> {type}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default GallFilm;
