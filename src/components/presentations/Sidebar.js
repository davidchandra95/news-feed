import React, { Component } from 'react'
import turbo from 'turbo360'
import { connect } from 'react-redux'
import actions from '../../actions'

class Sidebar extends Component {

   constructor() {
      super()

      this.state = {
         feed: {
            name: '',
            url: ''
         },
         feeds: []
      }
   }

   componentDidMount() {
      this.props.fetchFeeds(null)
         .then(data => {
            this.setState({
               feeds: data
            })
         })
         .catch(err => {
            alert('Error: ' + err.message);
         })
      // var turboClient = turbo({site_id: '5b782b9794fc4b0014aeab94'});
      // turboClient.fetch('feed', null)
      // .then(data => {
      //    this.setState({
      //       feeds: data
      //    })
      // })
      // .catch(err => {
      //    alert('Error: ' + err.message);
      // })
   }

   updateFeed(field, event) {
      let feed = Object.assign({}, this.state.feed);
      feed[field] = event.target.value;
      this.setState({ feed: feed });
   }

   addFeed(event) {
      event.preventDefault();

      this.props.createFeed(this.state.feed)
         .then(data => {
            this.setState({
               feed: {
                  name: '',
                  url: ''
               }
            })
         })
         .catch(err => {
            alert('Error: ' + err.message);
         })
   }

   render() {
      const feeds = this.props.feed.all || []

      return (
         <div id="sidebar">
            <div className="inner">

               <section id="search" className="alt">
                  <form method="post" action="#">
                     <input type="text" name="query" value={this.state.feed.name} onChange={this.updateFeed.bind(this, 'name')} id="query" placeholder="Feed Name" /><br />
                     <input type="text" name="query" value={this.state.feed.url} onChange={this.updateFeed.bind(this, 'url')} id="query" placeholder="Feed Url" /><br />
                     <button onClick={this.addFeed.bind(this)}>Add Feed</button>
                  </form>
               </section>

               <nav id="menu">
                  <header className="major">
                     <h2>My Feeds</h2>
                  </header>
                  <ul>
                     {
                        feeds.map((feed, i) => {
                           return <li key={feed._id}><a href="#">{feed.name}</a></li>
                        })
                     }
                  </ul>
               </nav>
            </div>
         </div>
      )
   }
}

const stateToProps = (state) => {
   return {
      feed: state.feed
   }
}

const dispatchToProps = (dispatch) => {
   return {
      fetchFeeds: (params) => dispatch(actions.fetchFeeds(params)),
      createFeed: (params) => dispatch(actions.createFeed(params))
   }
}

export default connect(stateToProps, dispatchToProps)(Sidebar);