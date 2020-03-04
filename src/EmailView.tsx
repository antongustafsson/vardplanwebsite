import * as React from 'react';
import './EmailView.css'
const emailImage = require('./assets/epostadress.svg')

function copyText(text: string) {
    var e = document.createElement('div')
    e.innerHTML = text
    document.body.appendChild(e)
    function selectNode(node) {
        var range = document.createRange()
        range.selectNodeContents(node)
        var selection = window.getSelection()
        selection.removeAllRanges()
        selection.addRange(range)
    }
    selectNode(e)
    document.execCommand('copy')
    e.remove()
}

function open(link: string) {
    var a = document.createElement('a')
    a.setAttribute('href', link)
    a.click()
}

class EmailView extends React.Component<any, any> {

    open() {
        open(`mailto:${atob(this.props.email)}`)
    }

    copy() {
        copyText(atob(this.props.email))
    }

    render() {
        return (
            <div className="email-view" style={{
                backgroundColor: '#fff',
            }}>
                <div style={{
                    position: 'relative',
                    width: '100%',
                    top: 32,
                    height: 'calc(100% - 64px - 32px)'
                }}>
                    <img style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 'calc(100% - (32px * 2))',
                        paddingLeft: 32,
                        paddingRight: 32
                    }} src={emailImage} />
                </div>
                <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: 64,
                    bottom: 0
                }}>
                    <div onClick={this.open.bind(this)} className="ev-link">Öppna E-postprogram</div>
                    <div className="divider"></div>
                    <div onClick={this.copy.bind(this)} className="ev-link">Kopiera E-postadress</div>
                </div>
            </div>
        )
    }
}

export default EmailView