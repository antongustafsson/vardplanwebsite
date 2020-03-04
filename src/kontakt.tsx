import * as React from 'react'
import EmailView from './EmailView'

const Kontakt = ({ title, history }) => (
    <div style={{
        position: 'relative',
        width: '100%',
        height: '100%'
    }}>
        <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <EmailView email="a29udGFrdEBkaWdpdGFsdmFyZHBsYW4uc2U=" />
        </div>
    </div>
)

export default Kontakt