import React from 'react';
import Reflux from 'reflux';
import DealsStore from './deals-store';
import DealsActions from './deals-actions';

class DealsPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {postCode: ''};
        this.store = DealsStore;
    }

    postCodeEntered(e){
        this.setState({
            postCode: e.target.value
        });
    }

    searchDeals(){
        DealsActions.get(this.state.postCode);
    }

    render(){
        return(
            <div className="jumbotron">
                <h1>Our exclusive deals</h1>
                <h2>Enter your post code</h2>
                <input type="text"
                       placeholder="SE167LA"
                       onChange={this.postCodeEntered.bind(this)}
                       value={this.state.postCode}/>
                <a className="btn btn-primary btn-next" onClick={this.searchDeals.bind(this)}>
                    <span>Go!</span>
                </a>
            </div>
        );
    }
}

export default DealsPage;