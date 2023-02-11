
import PropTypes from 'prop-types'

function Greetenf(props) {


    return (
        <div>
            <h1>
                Hola  {props.name} desde componente funcional!
            </h1>
            {/*<h2>
                tu edad es de : {this.state.age}
            </h2>
            <div>
                <button onClick={this.birthday}>
                    Cumplir años
                </button>
            </div>*/}
        </div>
    )
}

Greetenf.propTypes = {
    name: PropTypes.string
}

export default Greetenf

