import React, { useState } from 'react';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';

function CitySelector() {
  const [selectedCity, setSelectedCity] = useState('');

  function handleCitySelect(city) {
    setSelectedCity(city);
    // Do something with the selected city
  }

  return (
    <MDBDropdown>
      <MDBDropdownToggle caret color="primary">
        {selectedCity ? selectedCity : 'Select a city'}
      </MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem onClick={() => handleCitySelect('New York')}>New York</MDBDropdownItem>
        <MDBDropdownItem onClick={() => handleCitySelect('Los Angeles')}>Los Angeles</MDBDropdownItem>
        <MDBDropdownItem onClick={() => handleCitySelect('Chicago')}>Chicago</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}

export default CitySelector;
