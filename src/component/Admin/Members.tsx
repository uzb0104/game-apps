import React, { useState } from "react";
import MemberTable from "../Admin//MemberTable";
import { Member } from "../../types/Member";

const Members: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([
    { id: 1, name: "Abbosbek", contact: "123-456-7890", status: "Active" },
    { id: 2, name: "Abbosjon", contact: "987-654-3210", status: "Inactive" },
  ]);

  const handleEdit = (id: number) => {
    console.log(`Edit member with ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Members</h2>
      <MemberTable
        members={members}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Members;
