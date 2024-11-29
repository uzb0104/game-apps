import React, { useState } from "react";
import ServiceForm from "../Admin/ServiceForm";
import { Service } from "../../types/Services";

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);

  const handleAddService = (service: Service) => {
    setServices([...services, service]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Services</h2>
      <ServiceForm onAdd={handleAddService} />
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            {service.name} - ${service.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
