import {StyleSheet} from 'react-native';
import {moderateUIScale} from '../utility/UIScale';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: moderateUIScale(60),
    paddingHorizontal: moderateUIScale(15),
  },
  headerLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  font1: {color: '#fff', fontSize: moderateUIScale(25)},
  font2: {
    color: '#3576E1',
    fontSize: moderateUIScale(30),
    paddingLeft: moderateUIScale(5),
  },
  font3: {
    fontSize: moderateUIScale(30),
    fontWeight: 'bold',
  },
  cardsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingHorizontal: moderateUIScale(15),
  },
  frontCard: {
    backgroundColor: '#4EA1ED',
    borderColor: '#fff',
    borderWidth: moderateUIScale(5),
    borderRadius: moderateUIScale(15),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: moderateUIScale(10),
  },
  backCard: {
    backgroundColor: '#fff',
    borderRadius: moderateUIScale(15),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: moderateUIScale(10),
  },
});
