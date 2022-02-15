import React,{ useState} from 'react';
import CountryList from './CountryList';

function Test() {
  
    const [tags, setTags] = useState([]);
    const [country, setCountry] = useState([]);

  async function countriesHandler() {
    
    const response = await fetch('http://a2camp.xyz/api/v1/countries');
    const data = await response.json();

    const countries = data.map((Data) => {
      return {

        id: Data.uuid,
        country: Data.country,
      };
    });
    console.log(countries);
    // setCountry(countries);
  }

  async function tagHandler() {
    
    const response = await fetch('http://a2camp.xyz/api/v1/course-tags');
    const data = await response.json();

    const tag = data.map((Data) => {
      return {
        id: Data.uuid,
        name: Data.name,
      };
    });
    // setTags(tag);
    console.log(tag)
  }

  async function uniHandler() {
    
  
    const response = await fetch('http://a2camp.xyz/api/v1/level-of-studies');
    const data = await response.json();

    const uni = data.map((Data) => {
      return {
        id: Data.uuid,
        major: Data.major,
      };
    });
    console.log(uni);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={countriesHandler}>Search country</button>
        <CountryList  country={country}/>
      </section>
      <br/>
      <section>
        <button onClick={tagHandler}>Search tag</button>
        <div>{tags}</div>
      </section>
      <br/>
      <section>
        <button onClick={uniHandler}>Search level of study</button>
      </section>
     
    </React.Fragment>
  );
}

export default Test;