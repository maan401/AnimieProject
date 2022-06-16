import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityIndicator: {
    width: 150,
    height: 150,
    color: 'blue',
  },
  animieList: {
    flex: 1,
    width: '100%',
    marginTop: 40,
  },
  animieListContainer: {
    paddingHorizontal: 20,
  },
  animieCard: {
    flex: 1,
    padding: 5,
    width: '100%',
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255, 0.5)',
  },
  cardImage: {
    width: 100,
    height: 100,
  },
  cardTitle: {
    width: '100%',
    fontSize: 18,
    color: 'black',
  },
  cardRatingView: {
    flex: 1,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  directorText: {
    fontSize: 14,
    marginTop: 5,
    color: 'black',
  },
  descriptionText: {
    fontSize: 12,
    marginTop: 3,
    color: 'grey',
  },
  releaseText: {
    fontSize: 12,
    marginTop: 3,
    color: 'black',
  },
  scoreText: {
    fontSize: 10,
    color: 'grey',
  },
});

export default Styles;
