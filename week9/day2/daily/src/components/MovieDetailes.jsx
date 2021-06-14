import React from 'react'
import { connect } from 'react-redux';

const MovieDetails = (props)=>{
    return(
        <div>
 <h1> Movie Details</h1>
        </div>
    )
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
