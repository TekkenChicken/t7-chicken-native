import React, { Component } from 'react';
import {
    View,
    Text,
    ListView,
    ScrollView,
    Button,
    TextInput,
    Platform,
    Dimensions,
    Animated
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//images
import headshots from '../../img/headshots/index';

// components
import ProfilePicture from '../../components/CharacterProfile/ProfilePicture';
import ProfileName from '../../components/CharacterProfile/ProfileName';
import CommandListBanner from '../../components/CharacterProfile/CommandListBanner';
import MoveList from './MoveList';
import CustomText from '../../components/CustomText/CustomText';
import SearchBar from '../../components/SearchBar/SearchBar';
import FrameDataRow from '../../components/Spreadsheet/FrameDataRow';

// Styles
import Styles from './styles';
import cellStyles from '../../components/Spreadsheet/cellStyles';
import * as Colors from '../../style/vars/colors';
import { propOrder, propColors } from '../../components/Spreadsheet/config';

class AttackList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollHeader: false,
            searchFocus: false,
            isPortrait: props.isPortrait,
        };
    }

    componentDidMount() {
        // get position of searchbar for scrolling
        setTimeout(() => {
            this.refs.search.measure((frameOffsetX, frameOffsetY, w, h, pageX, pageY) => {
                this.setState({ searchPos: pageY });
            });
        }, 10);
    }

    renderTableHeader() {
        return (
            <FrameDataRow navigation={this.props.navigation} header={true} />
        )
    }

    render() {
        return(
            <LinearGradient
                colors={[Colors.redPrimary, Colors.redSecondary]}
                start={{ x: 1.0, y: 0.9 }} end={{ x: 0.8, y: 0.1 }}
                style={Styles.mainContainer}
            >
                <ScrollView
                    ref={"scrollView"}
                    style={Styles.scrollContainer}
                    keyboardShouldPersistTaps={'always'}
                    stickyHeaderIndices={[2]}>

                    <View style={Styles.charHeader}>
                        <ProfilePicture image={headshots[this.props.charID]} />
                        {/* <ProfileName name={characterName.toUpperCase()} /> */}
                    </View>
                    <CommandListBanner />
                    <View style={Styles.stickySection} ref={"search"}>
                        <SearchBar
                            containerStyle={{ backgroundColor: Colors.redSecondary }}
                            inputWrapStyle={{ backgroundColor: Colors.lightPurple }}
                            onChange={this.props.searchBarFunc}
                            onFocusCallback={() => this.props.onSearchFocusHandler()}
                            onBlurCallback={() => this.props.onSearchBlurHandler()}
                        />
                        <Text style={Styles.rbnorway}>Frame data provided by rbnorway.org</Text>
                        <FrameDataRow isPortrait={this.props.isPortrait} navigation={this.props.navigation} header={true} />
                    </View>
                    <View style={(this.state.searchFocus) ? Styles.staticListHeight : ''}>
                        <MoveList
                            navigation={this.props.navigation}
                            isPortrait={this.props.isPortrait}
                            moves={this.props.moves}
                        />
                    </View>
                </ScrollView>
            </LinearGradient>
        )
}
}

export default AttackList