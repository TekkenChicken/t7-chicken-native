import React, { Component, PropTypes } from 'react';

// dependencies
import { View, StyleSheet } from 'react-native';
import SideComponentConfig from './componentsConfig';

class NavigationSide extends Component {
  /**
   *  @method: renderComponents
   *  @param: components [array] -- contains objects with props that specify which components to render
   *  object in array: { key: Component Name, ...props }
   */
  renderComponents(components) {
    return components.map((component) => {
      const SideComponent = SideComponentConfig[component.key];
      return <SideComponent {...component} />;
    });
  }

  render() {
    const { components } = this.props;
    return (
      <View>
        {this.renderComponents(components)}
      </View>
    );
  }
}


const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  }
});

NavigationSide.propTypes = {
  // textStyle: PropTypes.number, /* style enum */
  components: PropTypes.array
};

export default NavigationSide;
