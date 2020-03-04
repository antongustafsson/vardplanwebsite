import * as React from 'react';
import { Hero, Document, GhostButton, ArrowIcon } from './Components/components';
import TextLoop from 'react-text-loop';
import Phone from './Phone'
import Core from './methods';
const infoGraphic = require('./assets/Infographic.png')

const Home = ({ title, history }) => (
    <div className="App">
        <div className="App-content">
            <div className="section" style={{ marginTop: "10vh", paddingBottom: '10vh' }}>
                <Hero
                    leftContent={
                        <div style={{ marginTop: '10vh' }}>
                            <Document
                                textColor="#ffffff"
                                title={
                                    <div style={{ width: '50vw' }} className="fixed-title">
                                        <span style={{
                                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                            lineHeight: '1.75em',
                                            paddingLeft: 8,
                                            paddingRight: 8,
                                            whiteSpace: 'pre-wrap',
                                            boxShadow: '4px 0 0 rgba(0, 0, 0, 0.5), -4px 0 0 rgba(0, 0, 0, 0.5)',
                                        }}>
                                            <TextLoop springConfig={{ stiffness: 340, damping: 75 }}><div className="altword">Kvalitativ</div><div className="altword">Informativ</div><div className="altword">Användarvänlig</div><div className="altword">Säker</div></TextLoop> teknik för att <TextLoop springConfig={{ stiffness: 340, damping: 75 }}><div className="altword">säkra</div><div className="altword">förenkla</div><div className="altword">underlätta</div><div className="altword">organisera</div></TextLoop> vården för dig
                  </span>
                                    </div>
                                }>
                                Att ha en behandlingsplan på 150 sidor ger en extra påfrestning och bidrar till stress i patientens vardag. Därför har vi valt att digitalisera ”Min Vårdplan” för att skapa en förenklad och trygg vårdprocess.
                  {/* <Divider />
                  <GradientButton style={{ marginTop: '16px' }}>Upptäck konceptet <ArrowIcon size="28px" /></GradientButton> */}
                            </Document>
                        </div>
                    }
                    rightContent={
                        <div className="image" style={{ backgroundImage: `url(${infoGraphic})`, zIndex: 1 }}></div>
                    }
                />
            </div>
            <div className="section highlighted new-section">
                <div className="section-container">
                    <div className="full-text" style={{ lineHeight: '38px', marginRight: '16px' }}>Vi finns även på Facebook</div>
                    <GhostButton onClick={() => Core.open('http://fb.com/digitalvardplanuf', true)}>Besök Facebooksida <ArrowIcon /></GhostButton>
                </div>
            </div>
            <div className="section" style={{ background: 'linear-gradient(180deg, #1d2833, #162b33)', paddingTop: 64 }}>
                <Hero rightTop style={{
                    paddingTop: 32,
                    paddingBottom: 32,
                    zIndex: 1
                }} leftContent={
                    <Phone />
                }
                    rightContent={
                        <div>
                            <Document
                                textColor="#ffffff"
                                title={
                                    <div>
                                        I mobilen eller surfplattan
                      <div style={{ color: '#4A90E2' }}>För maximal tillgänglighet</div>
                                    </div>
                                }>
                                Din Digitala Vårdplan är en mobilapplikation som finns för både iOS och Android. Det har nu blivit mycket smidigt att ha koll på sin vård.
                </Document>
                        </div>
                    }
                />
            </div>
        </div>
        <div className="App-footer">
            <div className="footer-logo">
                <div className="footer-title">Drivs av</div>
                <div className="footer-content">
                    <div
                        className="company-logo"
                        style={{
                            backgroundImage: `url(${require('./assets/21751762_1474564919300534_9040024825729277454_n.jpg')})`,
                        }}>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Home