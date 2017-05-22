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
  renderComponents(components, side) {
    const componentMargin = (side === "right") ? Styles.rightComponent : Styles.leftComponent;
    return components.map((component, i) => {
      const SideComponent = SideComponentConfig[component.key];
      return (<View style={componentMargin} key={i}><SideComponent {...component} /></View>);
    });
  }

  render() {
    const { components, side } = this.props;
    return (
      <View style={Styles.container}>
        {this.renderComponents(components, side)}
      </View>
    );
  }
}


const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingRight: 18,
    paddingLeft: 18,
  },
  rightComponent: {
    marginLeft: 12
  },
  leftComponent: {
    marginRight: 12
  }
});

NavigationSide.propTypes = {
  // textStyle: PropTypes.number, /* style enum */
  components: PropTypes.array
};

export default NavigationSide;
