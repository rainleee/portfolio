import React, { Component } from 'react';

class Footer extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            {network.name === 'tistory' && (
              <a href={network.url} target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2.25rem"
                  height="auto"
                  viewBox="0 0 459 550"
                >
                  <g className="tistory">
                    <path d="M229.5,0C102.75,0,0,102.75,0,229.5S102.75,459,229.5,459,459,356.25,459,229.5,356.25,0,229.5,0ZM130.21,191.45a39.57,39.57,0,1,1,39.56-39.57A39.58,39.58,0,0,1,130.21,191.45ZM229.5,390a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,390Zm0-99.29a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,290.74Zm0-99.29a39.57,39.57,0,1,1,39.56-39.57A39.57,39.57,0,0,1,229.5,191.45Zm99.29,0a39.57,39.57,0,1,1,39.57-39.57A39.57,39.57,0,0,1,328.79,191.45Z" />
                  </g>
                </svg>
              </a>
            )}

            {network.name !== 'tistory' && (
              <a href={network.url} target="_blank" rel="noopener noreferrer">
                <i className={network.class}></i>
              </a>
            )}
          </span>
        );
      });
    }

    return (
      <footer>
        <div className="col-md-12">
          <div className="social-links">{networks}</div>

          <div className="copyright py-4 text-center">
            <div className="container">
              <small>
                Copyright &copy;{' '}
                {this.props.sharedBasicInfo
                  ? this.props.sharedBasicInfo.name
                  : '???'}
              </small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
