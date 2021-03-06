import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchDrivers } from '../actions';

class DriverList extends Component {

    componentDidMount(){ 
        this.props.fetchDrivers( );
    }

    renderList() {
      return this.props.drivers.map(driver => {
          return (
              <li key={driver.driverId}>
                 <h1> Name: {driver.givenName} {driver.familyName}
                 <h2> Number: {driver.permanentNumber}</h2>
                 <h2> Born: {driver.dateOfBirth}</h2>
                 <h2> Nationality: {driver.nationality}</h2>
                 </h1>    
              </li>
          )
      })
  }

    render() {
        return (
          <div className ="row">
          <div className="col-1"></div>
          <div className="cole-4">
            <h1>Current F1 Drivers;</h1>
            <ul className="nameList">
            {this.renderList()}
            </ul>            
          </div>
          <div className="col-7"></div>
          </div>                 
        );
      }
    } 
    
    const mapStateToProps = state => {
        return { drivers: state.drivers};
    }
    export default connect(mapStateToProps,{fetchDrivers})(DriverList);