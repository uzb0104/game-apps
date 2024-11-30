import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface User {
  id: number;
  name: string;
  number: string;
  amount: number;
  paid: boolean;
}

interface UserListProps {
  users: User[];
  onDelete: (id: number) => void;
  onTogglePayment: (id: number) => void;
}

const UserList: React.FC<UserListProps> = ({
  users,
  onDelete,
  onTogglePayment,
}) => {
  return (
    <List>
      {users.map((user) => (
        <ListItem
          key={user.id}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#f9f9f9",
            padding: 2,
            marginBottom: 1,
            borderRadius: "8px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          <ListItemText
            primary={`${user.name} (${user.number})`}
            secondary={`To'lov miqdori: ${user.amount.toLocaleString(
              "uz-UZ"
            )} UZS - ${user.paid ? "To'landi" : "Kutilmoqda"}`}
          />
          <ListItemSecondaryAction>
            <Button
              variant="outlined"
              color={user.paid ? "success" : "warning"}
              onClick={() => onTogglePayment(user.id)}
              sx={{ marginRight: 2 }}
            >
              {user.paid ? "To'lovni bekor qilish" : "To'lovni tasdiqlash"}
            </Button>
            <IconButton
              edge="end"
              color="error"
              onClick={() => onDelete(user.id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default UserList;
