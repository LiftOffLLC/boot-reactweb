import React from 'react';
import { View } from 'react-native';
import { NewBlog } from '.';
import { Header, Button } from '../components';

const BlogFeed = (props) => {
  function createNewBlog(){
    props.navigator.push({component: NewBlog});
  }
  const rightAction = <Button onClick={createNewBlog} />;
  return (
    <View>
      <Header title="Welcome" rightAction={rightAction} />
    </View>
  );
}

BlogFeed.propTypes = {
  navigator: React.PropTypes.object
}

export default BlogFeed
