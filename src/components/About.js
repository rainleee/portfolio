import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import reactIcon from '@iconify/icons-logos/react';
import javascriptIcon from '@iconify/icons-logos/javascript';
import typescriptIcon from '@iconify/icons-logos/typescript-icon';

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = 'images/' + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var myInfo = this.props.resumeBasicInfo.description_my_info;
      var about = this.props.resumeBasicInfo.description;
      var phoneNum = this.props.resumeBasicInfo.contact_phone;
      var email = this.props.resumeBasicInfo.contact_email;
      var github = this.props.resumeBasicInfo.portfolio_github;
      var tistory = this.props.resumeBasicInfo.portfolio_tistory;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: 'black' }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: 'auto' }}>
                  <img
                    height="250px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <Icon
                    icon={typescriptIcon}
                    style={{ fontSize: '400%', margin: '9% 5% 0 5%' }}
                  />
                  <Icon
                    icon={javascriptIcon}
                    style={{ fontSize: '390%', margin: '9% 5% 0 5%' }}
                  />
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: '400%', margin: '9% 5% 0 5%' }}
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{' '}
                    &nbsp;{' '}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{' '}
                    &nbsp;{' '}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: 'auto',
                      fontSize: '132%',
                      lineHeight: '200%',
                    }}
                  >
                    <br />
                    <span className="wave">
                      <div className="about-me-header">
                        <p className="about-me-title">{hello}</p>
                        <p className="about-me-info">{myInfo}</p>
                      </div>
                      <div>
                        <ul className="contact">
                          Contact.
                          <li className="phone">Phone. {phoneNum}</li>
                          <li className="email">Email. {email}</li>
                        </ul>
                        <ul className="contact">
                          Channel.
                          <li className="github">
                            Github.
                            <a
                              href={github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >{` ${github}`}</a>
                          </li>
                          <li className="tistory">
                            Blog.
                            <a
                              href={tistory}
                              target="_blank"
                              rel="noopener noreferrer"
                            >{` ${tistory}`}</a>
                          </li>
                        </ul>
                      </div>
                    </span>
                    {about}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
