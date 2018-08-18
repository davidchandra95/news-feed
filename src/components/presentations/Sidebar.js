import React, { Component } from 'react'
import turbo from 'turbo360'

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

   updateFeed(field, event) {
      let feed = Object.assign({}, this.state.feed);
      feed[field] = event.target.value;
      this.setState({feed: feed});
   }

   addFeed(event) {
      event.preventDefault();

      var turboClient = turbo({site_id: '5b782b9794fc4b0014aeab94'});
      turboClient.create('feed', this.state.feed)
      .then(data => {
         let feeds = Object.assign([], this.state.feeds)
         feeds.push(data);
         this.setState({
            feeds: feeds
         })
      })
      .catch(err => {
         alert('Error: ' + err.message);
      })
   }

   render() {
      return (
         <div id="sidebar">
            <div className="inner">

               <section id="search" className="alt">
                  <form method="post" action="#">
                     <input type="text" name="query" onChange={this.updateFeed.bind(this, 'name')} id="query" placeholder="Feed Name" /><br/>
                     <input type="text" name="query" onChange={this.updateFeed.bind(this, 'url')} id="query" placeholder="Feed Url" /><br/>
                     <button onClick={this.addFeed.bind(this)}>Add Feed</button>
                  </form>
               </section>

               <nav id="menu">
                  <header className="major">
                     <h2>My Feeds</h2>
                  </header>
                  <ul>
                     {  
                        this.state.feeds.map((feed, i) => {
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

export default Sidebar;