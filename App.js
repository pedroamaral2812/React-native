import { StackNavigator } from 'react-navigation';

import PeoplePage from './src/pages/PeoplesPage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';

import { capitalizeFirstLetter} from './src/util';

export default StackNavigator({
  'Main': {
      screen: PeoplePage
  },
  'PeopleDetail': {
    screen: PeopleDetailPage,
    navigationOptions: ({ navigation}) =>{
      const peopleName = capitalizeFirstLetter(navigation.state.params.people.name.first);
      return({
        title: peopleName,
        headerTitleStyle: {
          color: 'white',
          fontSize: 30,
        }
      });
    }
  }
},{
  navigationOptions: {
    title: 'Pessoas!',
    headerStyle: {
      backgroundColor: '#6ca2f7',
      borderBottomWidth: 1,
      borderBottomColor: '#C5C5C5',
    },
    headerTitleStyle: {
      color: '#fff',
      fontSize: 30,
      alignItems: 'center'
    }
  }
});

