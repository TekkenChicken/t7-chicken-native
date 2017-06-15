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
import Mixpanel from 'react-native-mixpanel'
import DeviceInfo from 'react-native-device-info'

// Component
import LoadingIcon from './loading-icon';

// dispatch actions
import { fetchInitialAppData } from '../../redux/actions/blob';

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
    Mixpanel.sharedInstanceWithToken('e422b505e14328094553e8970e85d0a2');

    NetInfo.isConnected.addEventListener('change', () => this.triggerInitialFetch);
  }

  componentDidMount() {
    // Fetch Data on character using character ID sent as props on navigate
    setTimeout(() => {
      NetInfo.isConnected.fetch().then((isConnected) => this.triggerInitialFetch(isConnected))
    }, 1000);

    // Log initial user opening the app
    Mixpanel.identify(DeviceInfo.getUniqueID());
    Mixpanel.set({ '$name': DeviceInfo.getDeviceName() });
    Mixpanel.track("app:start");
  }

  componentDidUpdate() {
    if (this.props.blob.characterData && this.state.loading) {
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Main'})
        ]
      });
      this.setState({ loading: false }, () => this.props.navigation.dispatch(resetAction));
    }
  }

  triggerInitialFetch(isConnected) {
    this.props.dispatch(fetchInitialAppData(!isConnected));
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

export default connect(mapStateToProps)(LoadingScreen);
