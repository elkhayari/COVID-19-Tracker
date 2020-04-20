import React from 'react';

import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css';
import { fetchData } from './api';
import {coronaImage} from './images/image.png'

class App extends React.Component {

  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData()

    this.setState({
      data: fetchedData
    })

  }

  handleCountryChange = async (country) => {
    //fetch data
    console.log('App country ', country)
    const fetchedData = await fetchData(country)
    console.log(fetchedData)
    // set the state
    this.setState({
      data: fetchedData,
      country: country,
    })
  }
  render() {
    //1
    const { data, country } = this.state
    
    return (
      <div className={styles.container}>
        <img src={coronaImage}  className={styles.image} alt='covid-19'/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country}/>
      </div>
    );
  }
}


export default App;
