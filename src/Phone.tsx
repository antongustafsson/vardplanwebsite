import * as React from 'react';

const Phone = props => {
    return <div style={{ width: '512px', height: '361.1136653824px' }}>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0, transform: 'translate(0, 15%)' }} className="scaling">
          <img
            src={require('./assets/Shadow0.png')}
            width="100%" style={{ opacity: 0.5 }} />
        </div>
        <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 1 }} className="floating">
          <img
            src={require('./assets/Phone01.png')}
            width="100%" />
        </div>
      </div>
    </div>
  }

export default Phone