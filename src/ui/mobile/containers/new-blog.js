import React from 'react'
import { View } from 'react-native'
import { TextInput, Button } from '../components'

class NewBlog extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: '',
    }
  }

  saveBlog = () => {
    //do something here
  }
  
  render(){
    return (
      <View>
        <TextInput
            placeholder="Name Here..."
            value={this.state.title}
            onChange={(title) => this.setState({title})}
        />
        <TextInput
            placeholder="Body Here..."
            value={this.state.body}
            onChange={(body) => this.setState({body})}
        />
        <Button text="Save Blog" onClick={this.saveBlog} />
      </View>
    );
  }
}

export default NewBlog
