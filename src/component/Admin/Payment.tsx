import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import UserList from "./UserList";

interface User {
  id: number;
  name: string;
  number: string;
  amount: number;
  paid: boolean;
}

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "Noname",
      number: "+998901234567",
      amount: 100000,
      paid: false,
    },
    {
      id: 2,
      name: "Noname",
      number: "+998901234568",
      amount: 200000,
      paid: true,
    },
  ]);

  const [newUser, setNewUser] = useState({ name: "", number: "", amount: 0 });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: name === "amount" ? parseFloat(value) || 0 : value,
    });
  };

  const handleAddUser = () => {
    if (newUser.name && newUser.number && newUser.amount > 0) {
      setUsers((prevUsers) => [
        ...prevUsers,
        {
          id: prevUsers.length + 1,
          name: newUser.name,
          number: newUser.number,
          amount: newUser.amount,
          paid: false,
        },
      ]);
      setNewUser({ name: "", number: "", amount: 0 });
    } else {
      alert("Iltimos, barcha maydonlarni to'ldiring!");
    }
  };

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handlePaymentStatusToggle = (id: number) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, paid: !user.paid } : user
      )
    );
  };

  return (
    <Box sx={{ padding: 4, maxWidth: 800, margin: "0 auto" }}>
      <Typography variant="h4" sx={{ textAlign: "center", marginBottom: 4 }}>
        Foydalanuvchilarni boshqarish
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          marginBottom: 4,
        }}
      >
        <TextField
          label="Foydalanuvchi ismi"
          name="name"
          value={newUser.name}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="Telefon raqami"
          name="number"
          value={newUser.number}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="To'lov miqdori (UZS)"
          name="amount"
          value={newUser.amount || ""}
          onChange={handleInputChange}
          fullWidth
          type="number"
        />
        <Button variant="contained" color="primary" onClick={handleAddUser}>
          Foydalanuvchini qo'shish
        </Button>
      </Box>

      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        Foydalanuvchilar ro'yxati
      </Typography>
      <UserList
        users={users}
        onDelete={handleDeleteUser}
        onTogglePayment={handlePaymentStatusToggle}
      />
    </Box>
  );
};

export default UserManagement;
