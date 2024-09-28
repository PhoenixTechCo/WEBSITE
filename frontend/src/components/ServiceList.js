import React, { useEffect, useState } from 'react';
import { getServices } from '../api/api.js';

const ServiceList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const data = await getServices();
      setServices(data);
    };
    fetchServices();
  }, []);

  return (
    <div>
      <h2>Our Services</h2>
      <ul>
        {services.map((service) => (
          <li key={service._id}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
