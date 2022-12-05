import React, { useState } from 'react'
import { AsyncPaginate} from "react-select-async-paginate"
import { GEO_API_URL,geoApiOptions } from '../api';

const Search=({onSearchChange})=> {
    const [search,setSearch]=useState(null);
    const loadOptions=(inputvalue)=>{
        return fetch(`${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputvalue}`, geoApiOptions)
        .then(response => response.json())
        .then((response) =>{
            return{
                options:response.data.map((city) => {
                    return {
                        value:`${city.latitude} ${city.longitude}`,
                        label:`${city.name}, ${city.countryCode}`,
                    };
                }),
            };

        })
        .catch(err => console.error(err));

    };
    const handelonChange=(searchData)=>{
        setSearch(searchData);
        onSearchChange(searchData);

    }
  return (
    <AsyncPaginate
    placeholder="Serach for city"
    debounceTimeout={600}
    value={search}
    onChange={handelonChange}
    loadOptions={loadOptions}
    />
  )
}

export default Search