import React from 'react'
import { connect } from 'react-redux';
import { initMovies } from '../action/action'
import {MovieDetails} from '../action/action'

class MovieList extends React.Component {

    componentDidMount() {
        console.log('here')
        this.props.initMovies()
    }
    render() {
        console.log(this.props.movie);
        const { movie } = this.props
        return (
            <div>
                <h1>Movie List </h1>
                <div>
                    <h3>Movie Title</h3>
                    {
                        movie.map((res, i) => {
                            return (
                                <div key={i}>
                                    <h3>{res.title}</h3>
                                    <button onClick={()=>this.props.MovieDetails(res)}>Detail</button>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        movie: state.movie
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        initMovies: () => dispatch(initMovies()),
        MovieDetails: (movie) => dispatch(MovieDetails(movie))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
