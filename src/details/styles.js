import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activityIndiacatorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dataContainer: {
    flex: 1,
    padding: 5,
    width: '100%',
  },
  titleContainer: {
    flex: 1,
    width: '100%',
    marginBottom: 10,
    flexDirection: 'row',
  },
  bannerImage: {
    width: 120,
    height: 150,
    marginRight: 10,
  },
  header: {
    marginTop: 40,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    color: 'black',
  },
  dataTitle: {
    fontSize: 18,
    color: 'black',
    paddingBottom: 10,
  },
  producerText: {
    fontSize: 14,
    color: 'black',
    paddingBottom: 5,
  },
  descriptionText: {
    fontSize: 12,
    color: 'grey',
  },
});

export default Styles;
