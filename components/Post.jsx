import styled from 'styled-components/native';
import { Text, View, Image } from 'react-native';

const PostView = styled.View`
  flex-direction: row;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
  
`;

const PostImage = styled.Image`
  width: 100px;
  height: 100px;
  margin-right: 12px;

`;

const PostTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
  
`;

const PostDetails = styled.View`
  justify-content: center;
  flex:1;
`;

const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;

const truncateTitle = (str) => {
    if(str.length >= 50){
        return str.substring(0, 50) + '...';
    }
    return str;
}

// date-fns => format

export const Post = ({ title, imageUrl, createdAt }) => {
    return (
        <PostView>
            <PostImage source={{ uri: imageUrl }} />
            <PostDetails>
                <PostTitle>{truncateTitle(title)}</PostTitle>
                <PostDate>{new Date(createdAt).toLocaleDateString()}</PostDate>
            </PostDetails>
        </PostView>
    )
}


