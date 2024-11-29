import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Service } from "../../types/Services";

interface ServiceFormProps {
  onAdd: (service: Service) => void;
}

const ServiceForm: React.FC<ServiceFormProps> = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number | "">("");

  const handleSubmit = () => {
    if (name && price) {
      onAdd({ id: Date.now(), name, price: Number(price) });
      setName("");
      setPrice("");
    }
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "400px",
      }}
    >
      <TextField
        label="Service Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {/* <TextField
        label="Price"
        variant="outlined"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      /> */}
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Add Service
      </Button>
    </form>
  );
};

export default ServiceForm;
