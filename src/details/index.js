import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  Image,
  Text,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import Styles from './styles';

export default class Details extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      animieData: {},
    };
  }

  componentDidMount() {
    console.log('this.props os as follows ', this.props);
    let url = this.props.route.params.url;
    fetch(url)
      .then(res => res.json())
      .then(jsonRes => {
        this.setState({animieData: jsonRes, loading: false});
        console.log('response json is as follows ', jsonRes);
      })
      .catch(err => {
        console.log('error is as follows ', err);
      });
  }

  renderData = () => {
    let animieData = this.state.animieData;
    return (
      <ScrollView style={Styles.dataContainer}>
        <View style={Styles.titleContainer}>
          <Image source={{uri: animieData.image}} style={Styles.bannerImage} />
          <View>
            <Text style={Styles.dataTitle}>{animieData.title}</Text>
            <Text style={[Styles.dataTitle, {fontSize: 14}]}>
              Orignal Title: {animieData.original_title}
            </Text>
            <Text style={Styles.producerText}>
              Director: {animieData.director}
            </Text>
            <Text style={Styles.producerText}>
              Producer: {animieData.producer}
            </Text>
            <Text style={Styles.producerText}>
              Release Date: {animieData.release_date}
            </Text>
          </View>
        </View>
        <View
          style={[Styles.titleContainer, {justifyContent: 'space-between'}]}>
          <Text>Rating Score: {animieData.rt_score}</Text>
          <Text>Run Time: {animieData.running_time}</Text>
        </View>
        <Text style={[Styles.producerText, {fontWeight: 'bold'}]}>
          Movie Description
        </Text>
        <Text style={Styles.descriptionText}>{animieData.description}</Text>
      </ScrollView>
    );
  };

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.header}>
          <TouchableOpacity
            style={{padding: 10}}
            onPress={() => this.props.navigation.pop()}>
            <Icon
              name="arrow-back"
              backgroundColor="#3b5998"
              color={'black'}
              size={30}
            />
          </TouchableOpacity>
          <Text style={Styles.headerTitle}>
            {this.props.route.params.title}
          </Text>
        </View>
        {this.state.loading ? (
          <View style={Styles.activityIndiacatorContainer}>
            <ActivityIndicator
              animating={true}
              color="blue"
              size="large"
              style={Styles.activityIndiacator}
            />
          </View>
        ) : (
          this.renderData()
        )}
      </View>
    );
  }
}
