import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router } from '../Router';
// dependencies
import {
  View,
  Modal,
  StyleSheet
} from 'react-native';

// Component
import LoadingIcon from './loading-icon';

// dispatch actions
import { fetchInitialAppData } from '../../redux/actions/blob';

class LoadingScreen extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    // Fetch Data on character using character ID sent as props on navigate
    setTimeout(() => {
      return this.props.dispatch(fetchInitialAppData());
    }, 1000);
  }

  componentDidUpdate() {
    // if blob has finished fetching data
    if (this.props.blob.characterData && this.state.loading) {
      this.setState({loading: false});
      setTimeout(() => this.props.navigator.replace(Router.getRoute('characterSelect')), 0);
    }
  }

  render() {
    return (
      <View style={style.container}>
        <Modal
          animationType={"fade"}
          transparent={false}
          visible={this.state.loading}
        >
          <View style={style.container}>
            <LoadingIcon />
          </View>
        </Modal>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222'
  },
});

/** MAPPING STATE **/
const mapStateToProps = function(state) {
  return {
    blob: state.blob
  }
};

export default connect(mapStateToProps)(LoadingScreen);
