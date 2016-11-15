import React from 'react'
import { View } from 'react-native'
import { Header, Button } from '../components'
import { NewBlog } from '../containers'

const NewBlogScreen = (props) => {
  const rightAction = <Button onClick={props.navigator.pop} />;
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Header title="Save Details" rightAction={rightAction} />
      <NewBlog />
    </View>
  );
}

NewBlogScreen.propTypes = {
  navigator: React.PropTypes.object
}

export default NewBlogScreen
