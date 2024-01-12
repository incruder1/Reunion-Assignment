import { React, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import Button from 'react-bootstrap/Button';
import { useParams, useNavigate } from "react-router-dom";
import "./Card.css";
import axios from "axios";
const Card = () => {
  const [properties, setProperties] = useState([]);
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    location: "",
    availableFromDate: "",
    priceRange: 0,
    propertyType: "",
  });
  const [city, setCity] = useState("");

 //get products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/property/list-property`
      );
      console.log(data);
      setProperties(data.category);
      setData(data.category);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  const filterProperties = () => {
    const filteredProperties = data.filter(
      (property) =>
        (!filters.city ||
          property.propertyDetails[0].location[0].city.toLowerCase() ===
            filters.city) &&
        (!filters.availableFromDate ||
          new Date(property.propertyDetails[0].date) >=
            new Date(filters.availableFromDate)) &&
        (!filters.priceRange ||
          property.propertyDetails[0].price <= filters.priceRange) &&
        (!filters.propertyType || property.propertyDetails[0].type === filters.propertyType)
        ,console.log(filters.availableFromDate)
    ); 
     
         
    setProperties(filteredProperties);
  };
  function valuetext(value) {
    return `${value}°C`;
  }
  return (
    <>
      <div className="properties  ">
        <div className="inner-div">
          <label className="text">Select the location:</label>

          <Box className="box" sx={{ minWidth: 80 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">City</InputLabel>
              <Select
                // labelId="demo-simple-select-label"
                // id="demo-simple-select"
                value={city}
                onChange={(e) => {
                  setFilters({ ...filters, city: e.target.value } );
                  setCity(e.target.value);
                }}
              >
                <MenuItem value={"mumbai"}>Mumbai</MenuItem>
                <MenuItem value={"noida"}>Noida</MenuItem>
                <MenuItem value={"delhi"}>Delhi</MenuItem>
                <MenuItem value={"bangalore"}>Bangalore</MenuItem>
                <MenuItem value={"ghaziabad"}>Ghaziabad</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="inner-div">
          <label>Available From Date:</label>
          <input
            type="date"
            onChange={(e) =>
              setFilters({ ...filters, availableFromDate: e.target.value })
            }
          />
        </div>
        <div className="inner-div">
          <label>Price Range:</label>
          <Slider
            className="slider"
            aria-label="Temperature"
            defaultValue={5000}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={5000}
            marks
            value={filters.priceRange}
            onChange={(e) =>
              setFilters({ ...filters, priceRange: e.target.value })
            }
            min={5000}
            max={40000}
          />
        </div>
        <div className="inner-div">
          {" "}
          <label>Property Type:</label>
          <select
            onChange={(e) =>
              setFilters({ ...filters, propertyType: e.target.value })
            }
          >
            <option value="1">Residential</option>
            <option value="2">Commercial</option>
            {/* Populate options dynamically based on available property types */}
          </select>
        </div>
        <div className="inner-div-button">
          {/* <button ></button> */}
          <Button variant="primary" onClick={filterProperties}>Filter</Button>
        </div>
      </div>

      <div className="home">
        {properties.map((property) => (
          <div key={property._id}>
            <div className="card">
              <img
                src="https://img.freepik.com/free-vector/silver-blurred-background_1034-253.jpg"
                alt="Property"
              />
              <div className="property-info">
                <p>₹ {property.propertyDetails[0].price} </p>
              </div>
              <div className="card-details">
                <p className="pn">{property.propertyName}</p>
                <p>
                  {property.propertyDetails[0].location[0].address},{" "}
                  {property.propertyDetails[0].location[0].city},{" "}
                  {property.propertyDetails[0].location[0].country}
                </p>
              </div>
              <div className="card-bottom">
                <div className="card-bottom-item">
                  <p>{property.propertyDetails[0].bedroom} Bed</p>
                </div>
                <div className="card-bottom-item">
                  <p>{property.propertyDetails[0].bathroom} Bathrooms</p>
                </div>

                <div className="card-bottom-item">
                  <p>{property.propertyDetails[0].area} &#13221;</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
