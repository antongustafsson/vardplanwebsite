import * as React from 'react';
import './om-oss.css';
import { Link } from 'react-router-dom'

class FullImage extends React.Component {
    render() {
        return (
            <div className="full-image">
                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%'
                }}>
                    <img style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '80%'
                    }} src={require('./assets/om-oss/event.jpg')} alt="" />
                </div>
            </div>
        )
    }
}

class FullWidthImage extends React.Component<any, any> {
    render() {
        return (
            <div style={this.props.style} className="full-image">
                <img className="fw-image" src={require('./assets/om-oss/event.jpg')} alt="" />
            </div>
        )
    }
}

// class Person extends React.Component<any, any> {
//     render() {
//         return (
//             <div className="person">
//                 <div className={"person-icon " + (this.props.icon && ("icon-" + this.props.icon))}></div>
//                 <div className="person-name">
//                     {this.props.name}
//                 </div>
//                 <div className="person-title">
//                     {this.props.title}
//                 </div>
//                 <div className="person-description">
//                     {this.props.children}
//                 </div>
//             </div>
//         )
//     }
// }

class Person extends React.Component<any, any> {
    render() {
        return (
            <div className="person">
                <div className="person-name">
                    {this.props.name}
                </div>
                <div className="person-title">
                    {this.props.title}
                </div>
                <div className="person-description">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

class Title extends React.Component<any, any> {
    render() {
        return (
            <div style={this.props.style} className="page-title">
                {this.props.children}
            </div>
        )
    }
}

const About = ({ title, history }) => (
    <div className="about-container">
        <div className="about-content">
            <Title style={{ marginTop: 128 }}>Om oss</Title>
            <FullWidthImage />
            <div className="person-container">
                <div className="person-row">
                    <Person name="Linus Malmström" title="Ekonomiansvarig" icon="man">
                        {["Säker individ som tycker om att utvärdera saker på ett distanserat och logiskt sätt.", "Med sin kunskap att hålla rätt på siffror och sitt strukturerade arbetssätt vid budgetering valdes Linus till företagets ekonomiansvarige."][1]}
                    </Person>
                    <Person name="Albin Lindblom" title="Administratör" icon="admin">
                        {["Källan till idén. Av personliga referenser upptäckte Albin ett stort behov av smartare lösningar inom hälso- och sjukvård.", "Albins sociala förmåga till att knyta viktiga kontakter och skapa drivande nätverk är något som är viktigt inom vår marknad, därför valdes han till företagets administratör."][1]}
                    </Person>
                    <Person name="Linnéa Eriksson" title="vd" icon="woman">
                        {["Engagerad Verkställande Direktör för Digital Vårdplan UF som studerar inom ekonomi på Hälsingegymnasiet.", "Med sin drivna personlighet och hennes engagemang att styra företaget i rätt riktning samt förmåga skapa en bra gruppdynamik, valdes Linnéa till företagets VD."][1]}
                    </Person>
                </div>
                <div className="person-row">
                    <Person name="Anton Gustafsson" title="Systemutvecklare" icon="nerd">
                        {["Passionerad utvecklare som brinner för säkerhet, användarvänlighet och stabilitet.", "Hans intresse och otroliga kunskap för programmering och systemutveckling, gjorde valet självklart att  Anton skulle ansvara för programmeringen och skapandet från skiss till verklighet av applikationen."][1]}
                    </Person>
                    <Person name="Tove Holthausen" title="Marknadsförare" icon="woman">
                        {["Initiativrik marknadsförare som enbart ser möjligheter.", "Toves sociala förmåga och hennes driva personlighet samt hennes intresse för sociala medier och marknadsföring gjorde henne till företagets marknadsansvariga och säljare."][1]}
                    </Person>
                </div>
            </div>
        </div>
    </div>
)

export default About