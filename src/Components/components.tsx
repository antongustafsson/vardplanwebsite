import * as React from 'react';

export class HeaderItem extends React.Component<any, any> {
  render() {
    return (
      <div onClick={this.props.onClick} className="header-item">
        {this.props.children}
        <div className="header-item-line"></div>
      </div>
    )
  }
}

export class Hero extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      leftContent: props.leftContent,
      rightContent: props.rightContent
    }
  }

  render() {
    return (
      <div style={this.props.style} className="hero">
        <div className={"hero-section hero-left" + (!this.props.rightTop ? ' top' : ' bottom')}>
          {this.state.leftContent}
        </div>
        <div className={"hero-section hero-right" + (this.props.rightTop ? ' top' : ' bottom')}>
          {this.state.rightContent}
        </div>
      </div>
    )
  }
}

export class Document extends React.Component<any, any> {
  render() {
    return (
      <div style={{ color: this.props.textColor }} className="document">
        <div className="document-title">{this.props.title}</div>
        <div className="document-text">{this.props.children}</div>
      </div>
    )
  }
}

export class GradientButton extends React.Component<any, any> {
  render() {
    return (
      <div style={this.props.style} className="gb-container">
        <div className="gradient-button gradient-button-shadow">{this.props.children}</div>
        <div className="gradient-button">{this.props.children}</div>
      </div>
    )
  }
}

export class GhostButton extends React.Component<any, any> {
  render() {
    return (
      <div onClick={() => this.props.onClick()} className="ghostbutton">{this.props.children}</div>
    )
  }
}

export function Divider() {
  return (
    <div className="divider"></div>
  )
}

export function ArrowIcon(props) {
  return (
    <svg style={{ width: props.size || 24, height: props.size ||  24, float: 'right', marginLeft: 8 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1">
      <g id="surface1">
        <path style={{ fill: 'white' }} d="M 12.21875 2.28125 L 10.78125 3.71875 L 18.0625 11 L 2 11 L 2 13 L 18.0625 13 L 10.78125 20.28125 L 12.21875 21.71875 L 21.21875 12.71875 L 21.90625 12 L 21.21875 11.28125 Z "></path>
      </g>
    </svg>
  )
}