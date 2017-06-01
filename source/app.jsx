import React from 'react';
import Contact from "./components/contact";

var CONTACTS = [
  {
    name: 'Darth Vader',
    phone: '+250966666666',
    image: 'http://cs7.pikabu.ru/images/big_size_comm_an/2014-03_7/13962622876915.gif'
  }, {
    name: 'Princess Leia',
    phone: '+250966344466',
    image: 'http://images6.fanpop.com/image/photos/33100000/CARRIE-FISHER-anakin-vader-and-princess-leia-33186069-190-149.gif'
  }, {
    name: 'Luke Skywalker',
    phone: '+250976654433',
    image: 'https://media.giphy.com/media/7ZwtPQtJALKIU/giphy.gif'
  }, {
    name: 'Chewbacca',
    phone: '+250456784935',
    image: 'https://media.giphy.com/media/RUUdVZqwpfTRS/giphy.gif'
  }
];

const App = React.createClass({
  
  getInitialState() {
    return {
      displayedContacts: CONTACTS
    };
  },
  handleSearch:function (event) {
    var searchQuery = event.target.value.toLowerCase();
    var displayedContacts = CONTACTS.filter(function(el) {
      var searchValue = el.name.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    });

    this.setState({
      displayedContacts: displayedContacts
    });
  },
  render(){
    return(
      <div className="contacts">
        <input type="text" className="search-field" onChange={this.handleSearch}/>
        <ul className="contacts-list">
          {
            this.state.displayedContacts.map(function (item, i) {
              return <Contact
                key={i}
                name={item.name}
                phone={item.phone}
                image={item.image} />;
            })
          }
        </ul>
      </div>
    )
  }
});


export default App