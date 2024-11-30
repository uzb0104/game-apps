import React, { useState } from "react";
import { Button, TextField, Paper, Typography, Snackbar } from "@mui/material";
import { Alert } from "@mui/material";

interface AdminProfileProps {
  name: string;
  email: string;
  phone: string;
  status: "Active" | "Inactive";
  startDate: string;
  lastLogin: string;
  role: string;
}

const AdminProfile: React.FC<AdminProfileProps> = ({
  name,
  email,
  phone,
  status,
  startDate,
  lastLogin,
  role,
}) => {
  const [editable, setEditable] = useState(false);
  const [formData, setFormData] = useState({
    name,
    email,
    phone,
    status,
  });

  const [newNotifications, setNewNotifications] = useState([
    "Bugungi tizim yangilanishlari",
    "Yangi foydalanuvchi ro'yxatga olindi",
  ]);
  const [passwordChange, setPasswordChange] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleEdit = () => setEditable(true);
  const handleSave = () => {
    setEditable(false);
    console.log("Profile updated:", formData);
  };

  const handleCancel = () => {
    setEditable(false);
    setFormData({ name, email, phone, status });
  };

  const handlePasswordChange = () => {
    setPasswordChange(true);
    setSnackbarOpen(true);
  };

  return (
    <Paper style={{ padding: "20px", width: "400px", margin: "auto" }}>
      <Typography variant="h6" gutterBottom>
        Admin Profile
      </Typography>
      <div style={{ marginBottom: "10px" }}>
        <TextField
          label="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          fullWidth
          disabled={!editable}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <TextField
          label="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          fullWidth
          disabled={!editable}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <TextField
          label="Phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          fullWidth
          disabled={!editable}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <TextField
          label="Status"
          value={formData.status}
          onChange={(e) =>
            setFormData({
              ...formData,
              status: e.target.value as "Active" | "Inactive",
            })
          }
          fullWidth
          disabled={!editable}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <Typography variant="body2">Role: {role}</Typography>
        <Typography variant="body2">Start Date: {startDate}</Typography>
        <Typography variant="body2">Last Login: {lastLogin}</Typography>
      </div>
      <div>
        {editable ? (
          <>
            <Button onClick={handleSave} color="primary" variant="contained">
              Save
            </Button>
            <Button
              onClick={handleCancel}
              color="secondary"
              variant="outlined"
              style={{ marginLeft: "10px" }}
            >
              Cancel
            </Button>
          </>
        ) : (
          <Button onClick={handleEdit} color="primary" variant="contained">
            Edit
          </Button>
        )}
      </div>

      <div style={{ marginTop: "20px" }}>
        <Typography variant="h6">New Notifications</Typography>
        <ul>
          {newNotifications.map((notification, index) => (
            <li key={index}>{notification}</li>
          ))}
        </ul>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={handlePasswordChange}
        >
          Change Password
        </Button>
      </div>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert severity="info" onClose={() => setSnackbarOpen(false)}>
          Parol muvaffaqiyatli yangilandi!
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default AdminProfile;
