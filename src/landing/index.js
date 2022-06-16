import React from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import Styles from './styles';

export default class Landing extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      animieData: [],
    };
  }

  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then(res => res.json())
      .then(jsonRes => {
        this.setState({animieData: jsonRes, loading: false});
        console.log('data is as follows ', jsonRes);
      })
      .catch(err => {
        console.log('Error in api is ', err);
      });
  }

  renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={Styles.animieCard}
        onPress={() =>
          this.props.navigation.navigate('Details', {
            url: item.url,
            title: item.title,
          })
        }>
        <Image
          source={{uri: item.image}}
          style={Styles.cardImage}
          resizeMode={'contain'}
        />
        <View style={{flex: 1}}>
          <Text style={Styles.cardTitle}>{item.title}</Text>
          <Text style={Styles.directorText}>Director: {item.director}</Text>
          <Text style={Styles.descriptionText} numberOfLines={2}>
            {item.description}
          </Text>
          <Text style={Styles.releaseText}>
            Release Date: {item.release_date}
          </Text>
          <View style={Styles.cardRatingView}>
            <Text style={Styles.scoreText}>
              Rating Score: {item.release_date}
            </Text>
            <Text style={Styles.scoreText}>Run Time: {item.release_date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={Styles.container}>
        {this.state.loading ? (
          <ActivityIndicator animating={true} color={'blue'} size={'large'} />
        ) : (
          <FlatList
            data={this.state.animieData}
            style={Styles.animieList}
            renderItem={item => this.renderItem(item)}
            contentContainerStyle={Styles.animieListContainer}
          />
        )}
      </View>
    );
  }
}
