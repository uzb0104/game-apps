import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Service } from "../../types/types/Services";

interface ServiceFormProps {
  onAdd: (service: Service) => void;
}

const ServiceForm: React.FC<ServiceFormProps> = ({ onAdd }) => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number | "">("");

  const handleSubmit = () => {
    if (name.trim() && price !== "") {
      onAdd({ id: Date.now(), name: name.trim(), price: Number(price) });
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
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <TextField
        label="Jihoz nomi"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        label="Narxi"
        variant="outlined"
        type="number"
        value={price}
        onChange={(e) =>
          setPrice(e.target.value === "" ? "" : Number(e.target.value))
        }
        required
        inputProps={{ min: 0 }}
      />
      <Button type="submit" variant="contained" color="primary">
        Qo'shish
      </Button>
    </form>
  );
};

export default ServiceForm;
