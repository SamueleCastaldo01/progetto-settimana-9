import { Component } from "react";
import GallFilm from "./GallFilm";

class Gallerie extends Component {

    state = {
        films: [], // so già che recupererò dalle API un array di prenotazioni
        // per questo motivo inizializzo la proprietà dello stato in cui le salverò
        // come un ARRAY VUOTO
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
        console.log('Componente montato, avvio fetchFilms');
        this.fetchFilms(); // Chiama la funzione di fetch quando il componente viene montato
      }

    render() {
        console.log(this.state.films)

        return(
            <>
        <h4 className="text-white text-start">{this.props.title}</h4>
        <div
          className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4"
        >
            {this.state.films.slice(0, 6).map((film, i) => {
                return (
                    <GallFilm key={i} src={film.Poster} />
                );
            })}

        </div>
            </>
        )
    }
}

export default Gallerie;