import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Button,
} from "@mui/material";
import { Member } from "../../types/types/Member";
import InfoIcon from "@mui/icons-material/Info";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";

interface MemberTableProps {
  members: Member[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onToggleStatus: (id: number) => void;
  onViewProfile: (id: number) => void;
}

const MemberTable: React.FC<MemberTableProps> = ({
  members,
  onEdit,
  onDelete,
  onToggleStatus,
  onViewProfile,
}) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Contact</TableCell>
          <TableCell>Age</TableCell>
          <TableCell>Address</TableCell>
          <TableCell>Registration Date</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {members.map((member) => (
          <TableRow key={member.id}>
            <TableCell>{member.name}</TableCell>
            <TableCell>{member.contact}</TableCell>
            <TableCell>{member.age}</TableCell>
            <TableCell>{member.address}</TableCell>
            <TableCell>{member.registrationDate}</TableCell>
            <TableCell>{member.status}</TableCell>
            <TableCell>
              <IconButton
                color="primary"
                onClick={() => onViewProfile(member.id)}
              >
                <InfoIcon />
              </IconButton>
              <Button
                variant="contained"
                color="primary"
                onClick={() => onEdit(member.id)}
                style={{ marginRight: "10px" }}
              >
                Edit
              </Button>
              <IconButton
                color="secondary"
                onClick={() => onToggleStatus(member.id)}
              >
                {member.status === "Active" ? (
                  <ToggleOffIcon />
                ) : (
                  <ToggleOnIcon />
                )}
              </IconButton>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginLeft: "10px" }}
                onClick={() => onDelete(member.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MemberTable;
