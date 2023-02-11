import React from 'react';
import { Contacto } from '../../models/contacto.class';
import ContactoComponent from '../pure/contacto';

const ContactoListComponent = (props) => {
    const defaultcontacto= new Contacto('Julian','Fernandez','Julian@gmail.com',false);


    return (
        <div>
            <div>
                your contacto
            </div>
            <ContactoComponent contacto={defaultcontacto}></ContactoComponent>
        </div>
    );
}

export default ContactoListComponent;
