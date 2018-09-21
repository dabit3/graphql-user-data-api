import React, { Component } from 'react';
import { css } from 'glamor'
import './App.css';

import { API, graphqlOperation } from 'aws-amplify'

const getUserAvatar = (gender, name) => `https://avatars.dicebear.com/v2/${gender}/${name}.svg`

const GetName = `
  query {
    getName {
      gender
      name
      region
      surname
      age
      phone
      email
      photo
    }
  }
`

const createName = (...args) => {
  let userData = null
  if (args) {
    const info = [,args]
    userData = info.join()
  }
  if (!userData) {
    return `query {
      getName {
        gender
        name}
      }`
  } else {
    return `query {
      getName {
        gender
        name` + userData + ` }
      }`
  }
}


class App extends Component {
  state = {
    userInfo: {}, userData: [], choices: []
  }
  // async componentDidMount() {
  //   this.fetchData()
  // }
  fetchData = async() => {
    try {
      const userInfo = await API.graphql(graphqlOperation(createName(...this.state.choices)))
      const { getName } = userInfo.data
      this.setState({
        userInfo: getName 
      })
    } catch (err) {
      console.log('error: ', err)
    }
  }
  toggleChoice = choice => {
    if (this.state.choices.includes(choice)) {
      const index = this.state.choices.indexOf(choice)
      const copy = [...this.state.choices]
      delete copy[index]

      this.setState({ choices: copy  })
    } else {
      const choices = [...this.state.choices, choice]
      this.setState({ choices })
    }
  }
  isSelected = choice => {
    if (this.state.choices.includes(choice)) {
      return { backgroundColor: 'rgba(66, 134, 244, .5)' }
    } else {
      return {
        backgroundColor: '#4286f4'
      }
    }
  }
  render() {
    const { region, name, surname, age, phone, email } = this.state.userInfo
    return (
      <div style={styles.container}>
        {
          this.state.userInfo.gender && <img style={styles.avatar} src={getUserAvatar(this.state.userInfo.gender, this.state.userInfo.name)} />
        }
        <br />
        <button {...css(styles.getUser)} onClick={this.fetchData}>Get New User</button>
        <div style={{ display: 'flex', marginTop: 10 }}>
          <p onClick={() => this.toggleChoice('region')} style={{...styles.choice, ...this.isSelected('region')}}>Region</p>
          <p onClick={() => this.toggleChoice('age')} style={{...styles.choice, ...this.isSelected('age')}}>Age</p>
          <p onClick={() => this.toggleChoice('surname')} style={{...styles.choice, ...this.isSelected('surname')}}>Surname</p>
          <p onClick={() => this.toggleChoice('phone')} style={{...styles.choice, ...this.isSelected('phone')}}>Phone Number</p>
          <p onClick={() => this.toggleChoice('email')} style={{...styles.choice, ...this.isSelected('email')}}>Email</p>
        </div>
        {
          this.state.userInfo.name && (
            <div style={{ paddingTop: 20 }}>
              { name &&  <p style={styles.info}>Hi, my name is {name} {surname}</p> }
              { region && <p style={styles.info}>I'm from {region}</p> }
              { age && <p style={styles.info}>I'm {age} years old</p> }
              { phone && <p style={styles.info}>You can reach me at {phone}</p> }
              { email && <p style={styles.info}>My email is {email}</p> }
            </div>
          )
        }
        <pre>
          {JSON.stringify(this.state.userInfo, null, 2)}
        </pre>
      </div>
    );
  }
}

const styles = {
  getUser: {
    padding: '12px 35px', border: 'none', outline: 'none', cursor: 'pointer', backgroundColor: '#ededed',
    borderBottom: '2px solid #ededed',
    ':hover': {
      borderBottom: '2px solid #ddd',
    }
  },
  choice: {
    cursor: 'pointer',
    padding: '7px 20px', backgroundColor: '#4286f4', color: 'white', fontSize: 12, margin: 4
  },
  info: {
    margin: 4,
    fontSize: 19
  },
  container: {
    padding: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  avatar: {
    width: 250
  }
}

export default App;
