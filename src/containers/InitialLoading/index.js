import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
// dependencies
import {
  View,
  StyleSheet,
  NetInfo
} from 'react-native';

// Logging Dependencies
import DeviceInfo from 'react-native-device-info'

// Component
import LoadingIcon from './loading-icon';

// dispatch actions
import { fetchInitialAppData, fetchUserPromptFlag } from '../../redux/actions/blob';

class LoadingScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    header: null,
    gesturesEnabled: false,
  });

  constructor() {
    super();
    this.state = {
      loading: true
    };
    this.loaded = true;

    // Initiate logging framework

    NetInfo.isConnected.addEventListener('change', () => this.triggerInitialFetch);
  }

  componentDidMount() {
    // Fetch Initial App data and Settings

    // Fetch Data on character using character ID sent as props on navigate
    setTimeout(() => {
      NetInfo.isConnected.fetch().then((isConnected) => this.props.dispatchInitialDataFetch(isConnected))
    }, 1000);

    // Fetch User Prompt Settings
    this.props.dispatchFetchUserPromptFlags();
  }

  componentDidUpdate() {
    if (this.props.blob.characterData && this.state.loading) {
      // Pop out loading screen and move to main navigation flow (character select)
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Main'})
        ]
      });
      this.setState({ loading: false }, () => this.props.navigation.dispatch(resetAction));
    }
  }

  render() {
    return (
      <View style={style.container}>
        <LoadingIcon />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111'
  },
});

/** MAPPING STATE **/
const mapStateToProps = function(state) {
  return {
    blob: state.blob
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchInitialDataFetch: (isConnected) => dispatch(fetchInitialAppData(isConnected)),
    dispatchFetchUserPromptFlags: () => dispatch(fetchUserPromptFlag())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadingScreen);
