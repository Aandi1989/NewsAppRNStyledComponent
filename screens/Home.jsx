import { useState, useEffect } from 'react';
import axios from 'axios';
import { Text, View, Image, Alert, FlatList, ActivityIndicator, 
  refreshControl, RefreshControl, TouchableOpacity } from 'react-native';
import { Post } from '../components/Post';
import { Loading } from '../components/Loading';



export const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState();

  const fetchPosts = () => {
    setIsLoading(true);
    axios.get('https://65001ecd18c34dee0cd45480.mockapi.io/articles')
    .then(({ data }) => {
      setItems(data)
    })
    .catch(err => {
      console.log(err)
      Alert.alert('Ошибка', 'Не удалось получить статьи')
    })
    .finally(() => {
      setIsLoading(false)
    });
  }

  useEffect(fetchPosts, [])

  if(isLoading){
    return  <Loading/>
  };

  return (
    <View>
      <FlatList 
        refreshControl={
          <RefreshControl 
                refreshing={isLoading} 
                onRefresh={fetchPosts}/>
        }
        data={items}
        renderItem={({item}) => 
        <TouchableOpacity onPress={() => navigation.navigate('FullPost', { id: item.id, title: item.title })}>
            <Post title={item.title}
                imageUrl={item.imageUrl} 
                createdAt={item.createdAt}
          />
        </TouchableOpacity>
        }
      />
    </View>
  );
}

