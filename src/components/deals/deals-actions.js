import Reflux from 'reflux';

let DealActions = Reflux.createActions([{"get": { children: ['completed', 'failed', 'progress'] }}]);

export default DealActions;
