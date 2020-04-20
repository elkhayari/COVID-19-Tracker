import React from 'react';

import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css';
import { fetchData } from './api';
import {getCurrentPosition} from './api/getLocation'
import coronaImage from './images/image.png'

import Location from './components/Location/Location' 

class App extends React.Component {

  state = {
    data: {},
    country: '',
    position: {
      atl: 'hello'
    }
  }

  async componentDidMount() {
    const fetchedData = await fetchData()

    this.setState({
      data: fetchedData
    })

  }

  handleCountryChange = async (country) => {
    //fetch data
    
    const fetchedData = await fetchData(country)
   
    // set the state
    this.setState({
      data: fetchedData,
      country: country,
    })
  }

  handleCurrentLocation = async () =>{
    const currentPostion =  getCurrentPosition()
    
    this.setState({
      position: currentPostion
    })
  }
  render() {
    //1
    const { data, country, position } = this.state
    
    return (
      <div className={styles.container}>
        <img src={coronaImage}  className={styles.image} alt='covid-19'/>
    { /*<Location position={position} handleCurrentLocation={this.handleCurrentLocation} />*/} 
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country}/>
      </div>
    );
  }
}


export default App;
