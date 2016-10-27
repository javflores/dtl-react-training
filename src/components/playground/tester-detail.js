import React from 'react';

const TesterDetail = () => {
    return (
        <div className="container">
            <div className="page-header">
                <h1><img src="https://bucket.cdndtl.co.uk/bc/ICONS_70x70/icon-LineRentalIncluded.png"/>
                    Fast Broadband (all in One pricing)<small> by TalkTalk</small>
                </h1>
            </div>
            <div className="row">
                <div className="col-lg-8 col-md-8">
                    <div className="panel panel-success">
                        <div className="panel-heading">
                            <h4> Duration: 18 months | Speed: 17Mb </h4>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <span className="strong col-lg-4 col-md-4"> Calls: </span>Weekend calls inc.
                                </li>
                                <li className="list-group-item">
                                    <span className="strong col-lg-4 col-md-4">Telephone number: </span>0808 168 8180
                                </li>
                                <li className="list-group-item">
                                    <span className="strong col-lg-4 col-md-4">Download limit: </span>1000 </li>
                                <li className="list-group-item">
                                    <span className="strong col-lg-4 col-md-4">Validity: </span>Ends 31 October
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-10 col-md-10">
                <div className="panel panel-warning">
                     <div className="panel-heading">
                         Without line rental
                     </div>
                     <table className="table table-striped">
                         <thead>
                             <tr>
                                 <th>Months</th>
                                 <th>Cost</th>
                             </tr>
                         </thead>
                         <tbody>
                             <tr>
                                 <td>Months 1-12</td>
                                 <td>£9.00 p/m</td>
                             </tr>
                             <tr>
                                 <td>Thereafter</td>
                                 <td>£21.00 p/m</td>
                             </tr>
                         </tbody>
                     </table>
                     <table className="table table-striped">
                         <thead>
                             <tr>
                                 <th>Average Monthly Cost</th>
                                 <th>Installation Cost</th>
                                 <th>Delivery Cost</th>
                                 <th>First Year Cost</th>
                                 <th>Total Contract Cost</th>
                             </tr>
                         </thead>
                         <tbody>
                             <tr>
                                 <td>£13.89 p/m</td>
                                 <td>£14.99</td>
                                 <td>£0.00</td>
                                 <td>£122.99</td>
                                 <td>£248.99</td>
                             </tr>
                         </tbody>
                     </table>
                 </div>
            </div>
        </div>
    );
};

export default TesterDetail;