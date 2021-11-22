import React, { Component } from 'react';

class Introduce extends Component {
  render() {
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.introduce;
      var start = this.props.resumeBasicInfo.introduce.start;
      var mainTasks = this.props.resumeBasicInfo.introduce.main_tasks;
      var progress = this.props.resumeBasicInfo.introduce.progress;
    }

    return (
      <section id="intro">
        <div className="col-md-12">
          <h1 style={{ color: 'black' }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
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

                  <div className="1">
                    <span className="wave">1.개발자로 시작한 계기</span>
                    <p>{start}</p>
                  </div>
                  <div className="2">
                    <span className="wave">2.취업 후 주요 일</span>
                    <p>{mainTasks}</p>
                  </div>
                  <div className="3">
                    <span className="wave">3.자바스크립트를 선택한 이유</span>
                    <p>{progress}</p>
                  </div>
                  {/* {introduce} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Introduce;
