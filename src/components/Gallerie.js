import { Component } from "react";
import GallFilm from "./GallFilm";
import { CircularProgress } from "@mui/material";
import { Alert } from "react-bootstrap";

class Gallerie extends Component {

    state = {
        films: [],
        isLoading: true,
        isError: false,
      }


      fetchFilms = () => {
        fetch("http://www.omdbapi.com/?apikey=184dbc60&s=" + this.props.saga)
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('La chiamata non è andata a buon fine');
            }
          })
          .then((data) => { // Usa "data" per rappresentare il risultato JSON
            console.log('FILMS RECUPERATI DAL SERVER', data);
            this.setState({
              films: data.Search || [], // Imposta films con l'array "Search" o un array vuoto se non esiste
              isLoading: false,
            });
          })
          .catch((err) => {
            console.log('ERRORE NEL RECUPERO DATI (internet)?', err);
            this.setState({
              isLoading: false,
              isError: true,
            });
          });
      }

      componentDidMount() {
        this.fetchFilms(); 
      }

    render() {
        console.log(this.state.films)

        return(
            <>
        <h4 className="text-white text-start">{this.props.title}</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-1">

        {this.state.isLoading &&
            <CircularProgress color="inherit"/> 
        }

        {this.state.isError && (
                <Alert variant="danger">
                  Oops! Qualcosa è andato storto 😱
                </Alert>     
            )}

            {this.state.films.slice(0, 6).map((film, i) => {
                return (
                    <GallFilm key={i} src={film.Poster} title={film.Title} type={film.Type} year={film.Year}/>
                );
            })}

        </div>
            </>
        )
    }
}

export default Gallerie;