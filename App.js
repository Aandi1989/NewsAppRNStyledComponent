import { View } from 'react-native';
import { HomeScreen } from './screens/Home';
import { FullPostScreen } from './screens/FullPost';
 

export default function App() {
  
  return (
    <View>
      <HomeScreen />
    </View>
  );
}

// yarn add @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context react-native-gesture-handler
