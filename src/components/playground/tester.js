import React from 'react';

const Tester = () => {
    return (
        <div className="container">
            <div className="row">
              <div className="page-header">
                  <h1><img src="https://bucket.cdndtl.co.uk/bc/ICONS_70x70/icon-LineRentalIncluded.png"/>
                        Fast Broadband (all in One pricing)<small> by TalkTalk</small>
                  </h1>
              </div>
              <div className="row">
                  <div className="col-lg-8 col-md-8">
                      <div className="panel panel-success">
                          <div className="panel-heading">
                              <h4> AverageMonthlyCost: £13.83 | Duration: 18 months | Speed: 17Mb </h4>
                          </div>
                          <a className="btn btn-primary btn-lg">More about this offer</a>
                      </div>
                  </div>
              </div>
            </div>
            <div className="row">
                <div className="page-header">
                    <h1><img src="https://bucket.cdndtl.co.uk/bc/ICONS_70x70/Icon-bc-exclusive.png"/>
                        We love students<small> by Virgin</small>
                    </h1>
                </div>
                <div className="row">
                    <div className="col-lg-8 col-md-8">
                        <div className="panel panel-success">
                            <div className="panel-heading">
                                <h4> AverageMonthlyCost: £13.83 | Duration: 12 months | Speed: 20Mb </h4>
                            </div>
                            <a className="btn btn-primary btn-lg">More about this offer</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tester;