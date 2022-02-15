import React from 'react'

const CountryList = (props) => {
  return (
    <div>
        <ul> 
        {props.country.map((country)=>(
            <p>{country}</p>
            
        ))}
        </ul>
    </div>
  )
}

export default CountryList