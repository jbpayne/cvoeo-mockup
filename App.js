import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Animated }
  from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.icons = {
      'open': 'caret-down',
      'close': 'caret-up'
    };

    this.state = { expanded: false };
  }

  toggle() {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    let icon = this.icons['open'];
    if (this.state.expanded) {
      icon = this.icons['close'];
    }
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>MONEY ON MY MIND</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.blockTitle}>Coming Up:</Text>
          <View style={styles.row}>
            <View style={styles.smallerBlock}>
              <Text style={styles.date}> </Text>
            </View>
            <View style={styles.bigBlock}>
              <Text style={styles.subTitle}>Meeting with Forrest</Text>
              <Text style={styles.subText}>Wednesday 12/19/18 12:00pm</Text>
              <Text style={styles.subText}>CVOEO</Text>
            </View>
            <View style={styles.smallBlock}>
              <Text style={styles.circle}>2</Text>
              <Text style={styles.days}>Days</Text>
            </View>
          </View>
        </View>
        <View
          style={styles.container}>
          <View style={styles.moreButton}>
            <View style={styles.row}>
              <Text style={styles.moreButton}>MORE</Text>
              <TouchableHighlight
                style={styles.button}
                onPress={this.toggle.bind(this)}
                underlayColor="#fff">
                <Icon
                  style={styles.FAIcon}
                  name={icon}
                />
              </TouchableHighlight>
            </View>
          </View>

          {
            this.state.expanded && (<View style={styles.row}>
              {this.props.children}
              <View style={styles.smallerBlock}>
                <Text style={styles.date}> </Text>
              </View>
              <View style={styles.bigBlock}>
                <Text style={styles.subTitle}>Meeting with Forrest</Text>
                <Text style={styles.subText}>Wednesday 12/26/18 2:00pm</Text>
                <Text style={styles.subText}>CVOEO</Text>
              </View>
              <View style={styles.smallBlock}>
                <Text style={styles.circle}>9</Text>
                <Text style={styles.days}>Days</Text>
              </View>
            </View>)
          }

        </View>
        <View style={styles.container}>
          <Text style={styles.blockTitle}>Progress:</Text>
          <LinearGradient
            colors={['#d4af37', '#ffdf00', '#cfb53b']}
            style={{ alignItems: 'center', borderRadius: 90 }}>
            <Text style={styles.bigCircle}>$150</Text>
          </LinearGradient>
          <Text style={styles.moreButton}> </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.blockTitle}>Current Goals:</Text>
          <View style={styles.row}>
            <View style={styles.smallerBlock}>
              <Text style={styles.date}> </Text>
            </View>
            <View style={styles.biggerBlock}>
              <Text style={styles.subText}>Attend "Spend Smart 2/2" Workshop</Text>
            </View>
          </View>
          <View style={styles.moreButton}>
            <View style={styles.row}>
              <Text style={styles.moreButton}>MORE</Text>
              <TouchableHighlight
                style={styles.button}
                onPress={this.toggle.bind(this)}
                underlayColor="#fff">
                <Icon
                  style={styles.FAIcon}
                  name={icon}
                />
              </TouchableHighlight>
            </View>
          </View>

          {
            this.state.expanded && (<View style={styles.row}>
              {this.props.children}
              <View style={styles.smallerBlock}>
                <Text style={styles.date}> </Text>
              </View>
              <View style={styles.biggerBlock}>
              <Text style={styles.subText}>Pay down past due bills</Text>
              <Text style={styles.subText}> </Text>
              <Text style={styles.subText}>Attend "Keys To Credit" workshop</Text>
              <Text style={styles.subText}> </Text>
              </View>
            </View>)
          }

        </View>
      </ScrollView>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  bigBlock: {
    flex: 5,
    alignItems: 'center',
    padding: 2,
  },
  biggerBlock: {
    flex: 7,
    alignItems: 'center',
    padding: 2,
  },
  smallBlock: {
    flex: 2,
    alignItems: 'center',
  },
  smallerBlock: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    backgroundColor: '#585',
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 35,
    paddingBottom: 15,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  blockTitle: {
    alignItems: 'flex-start',
    color: '#558',
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingLeft: 10,
    paddingBottom: 9,
    alignSelf: 'stretch',
    textAlign: 'left',
    borderTopWidth: 1,
    borderTopColor: '#9cc',
  },
  subTitle: {
    alignItems: 'center',
    color: '#5b5',
    fontSize: 17,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 3,
    alignSelf: 'stretch',
    textAlign: 'left',
  },
  subText: {
    alignItems: 'center',
    color: '#555',
    fontSize: 16,
    paddingBottom: 3,
    alignSelf: 'stretch',
    textAlign: 'left',
  },
  days: {
    alignItems: 'center',
    color: '#a55',
    fontSize: 16,
    paddingBottom: 3,
    textAlign: 'center',
  },
  FAIcon: {
    alignItems: 'flex-end',
    color: '#9cc',
    fontSize: 28,
  },
  moreButton: {
    alignItems: 'flex-end',
    color: '#9cc',
    fontSize: 16,
    paddingBottom: 7,
    paddingTop: 10,
    paddingRight: 14,
    alignSelf: 'stretch',
    textAlign: 'right',
  },
  circle: {
    backgroundColor: '#a55',
    color: '#fff',
    fontSize: 20,
    width: 28,
    height: 28,
    borderRadius: 14,
    textAlign: 'center',
  },
  bigCircle: {
    backgroundColor: 'transparent',
    color: '#d4af37',
    fontSize: 60,
    textShadowColor: 'rgba(8, 6, 3, 0.75)',
    textShadowOffset: { width: -1, height: -1 },
    textShadowRadius: 10,
    paddingTop: 45,
    width: 180,
    height: 180,
    borderWidth: 6,
    borderColor: '#d4af37',
    borderRadius: 90,
    textAlign: 'center',
  },
});
