import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/contacto.class'

function ContactoComponent({contacto}) {
  return (
    <div>
      <h2>
        Nombre: {contacto.name}
      </h2>
      <h3>
        lastName: {contacto.lastName}
      </h3>
      
      <h3>
        email: {contacto.email}
      </h3>
      <h5>
        conectado: {contacto.conectado ? 'En linea':'No disponible'}
      </h5>
    </div>
  )
}

ContactoComponent.propTypes = {
    contacto : PropTypes.instanceOf(Contacto)
}

export default ContactoComponent

