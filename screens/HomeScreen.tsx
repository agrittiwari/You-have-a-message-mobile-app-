import { TouchableOpacity } from 'react-native';
import {
  Card,
  Title,
  Paragraph,
} from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
   const title = 'Title'
   const content= 'content'
   return(


    <TouchableOpacity
      onPress={() =>

        navigation?.push('Details', {
          title,
          content,
        })
      }
    >
      <Card>
        <Card.Content>
          <Title>{title}</Title>
          <Paragraph>{content}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  )};

  export default HomeScreen;