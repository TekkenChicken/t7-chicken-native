import {connect} from 'react-redux';
import App from '../index.ios.js';
import { bindActionCreators } from 'redux';
import * as actionCreators from './redux/actions/actionCreators';

function mapStateToProps(state) {
  console.log('state testing');
	return {
	}
}

function mapDispatchToProps(dispatch) {
  console.log(dispatch, 'dispatch test');
	return bindActionCreators(actionCreators, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
