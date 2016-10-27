import Reflux from 'reflux';
import DealsActions from './deals-actions';
import Http from 'superagent';

let DealsStore = Reflux.createStore({
    listenables: DealsActions,

    init() {
        this.state = {
            deals: []
        };
    },

    onGet(postCode){
        const url = 'http://api.broadbandchoices.co.uk/api/v2/bestbuys?Authorization=eb45afb3-a7c2-4d6d-a62a-bb9a29a4fb2e';
        Http.get(url)
            .set('Accept', 'application/json')
            .withCredentials()
            .on('progress', DealsActions.get.progress)
            .end((err, response) => {
                if (response && response.ok) {
                    this.state.deals = response.body.BundleSummaryResult.BundleList;
                    this.trigger(this.state);
                }
                else {
                    DealsActions.get.failed(err);
                }
            });
    }
});

export default DealsStore;