import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import { Member } from "../../types/types/Member";

interface MemberTableProps {
  members: Member[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const MemberTable: React.FC<MemberTableProps> = ({
  members,
  onEdit,
  onDelete,
}) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Contact</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {members.map((member) => (
          <TableRow key={member.id}>
            <TableCell>{member.name}</TableCell>
            <TableCell>{member.contact}</TableCell>
            <TableCell>{member.status}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                onClick={() => onEdit(member.id)}
              >
                Edit
              </Button>
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
