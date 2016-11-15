import React from 'react'
import { fetchState } from 'react-router-server';
import { Header } from '../components'
import fetch from 'isomorphic-fetch'
require('es6-promise').polyfill()
import { connect } from 'react-redux'
import { FeedActions } from '../../../state/actions/'

@fetchState(
  state => {
    return {}
  },
  actions => {
    return ({ done: actions.done })
  }
)
  class Feed extends React.PureComponent {
    componentWillMount() {
      if (!this.props.isFeedLoaded) {
        fetch('https://gipper-qa.herokuapp.com/api/feeds').then((response) => {
          response.json().then((res) => {
            this.props.dispatch({
              type: FeedActions.SET_FEED,
              feedItems: res.data
            });
            setTimeout(() => {
              this.props.done({
                Feed: {
                  feedItems: res.data,
                  isFeedLoaded: true,
                }
              });
            })
          });
        });
      }
      else{
        this.props.done({
          Feed: {
            feedItems: this.props.feed,
            isFeedLoaded: this.props.isFeedLoaded,
          }
        });
      }
    }

    componentDidMount() {
      fetch('https://gipper-qa.herokuapp.com/api/feeds?offset=20').then((response) => {
        response.json().then((res) => {
          this.props.dispatch({
            type: FeedActions.APPEND_TO_FEED,
            feedItems: res.data
          });
        });
      });
    }

    render(){
      return(
        <section className="hero is-success">
          <Header />
          <section className="section">
            <div className="content">
              <h1>Feed</h1>
              <div>{this.props.feed.map((feedItem, index) => {
                      return (<p key={feedItem._id}>{`${index} *** ${feedItem.title}`}</p>)
                    })}
              </div>
            </div>
          </section>
        </section>
      )
    }
  }

function mapStateToProps(state){
  return {
    feed: state.Feed.feedItems,
    isFeedLoaded: state.Feed.isFeedLoaded,
  }
}

export default connect(mapStateToProps)(Feed);
