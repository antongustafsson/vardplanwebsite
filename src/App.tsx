import * as React from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css';
import { HeaderItem, Hero } from './Components/components';
import About from './om-oss'
import Contact from './kontakt'
import Slider from 'react-slick'
import Phone from './Phone'
import Header from './Header'
import Home from './Home'

class App extends React.Component {
  router: any = null
  render() {
    return (
      <Router ref={ref => this.router = ref}>
        <div style={{ width: '100%', height: '100%' }}>
          <Switch>
            <Route path="/om-oss" render={About} />
            <Route path="/kontakt" render={Contact} />
            <Route path="/" render={Home} />
          </Switch>
          <Header mobile items={[
            { title: 'Om oss', handler: () => this.router.history.push('om-oss') },
            { title: 'Kontakt', handler: () => this.router.history.push('kontakt') }
          ]}>
            <HeaderItem onClick={() => this.router.history.push('om-oss')}>Om oss</HeaderItem>
            <HeaderItem onClick={() => this.router.history.push('kontakt')}>Kontakt</HeaderItem>
          </Header>
        </div>
      </Router>
    )
  }
}

export default App;