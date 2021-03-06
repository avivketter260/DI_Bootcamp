
import PropTypes from 'prop-types';
let i =0 
const Jumbotron = (props) => {
const {title,description,buttonLabel,buttonURL} = props
    return (
        
        <div className="jumbotron m-5">
        
            <h1 className="display-4">{title}</h1>
            <p className="lead">{description}</p>
            <a className="btn btn-primary btn-lg" href={buttonURL} role="button">{buttonLabel}</a>
        </div>
    )

}

Jumbotron.propTypes = {
    title: PropTypes.string
};
export default Jumbotron;
