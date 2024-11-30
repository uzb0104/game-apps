import React, { useState } from "react";
import MemberTable from "../Admin/MemberTable";
import { Member } from "../../types/types/Member";

const Members: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([
    {
      id: 1,
      name: "Abbosbek",
      contact: "123-456-7890",
      age: 20,
      address: "Jizzax, Uzbekistan",
      status: "Active",
      registrationDate: new Date().toISOString(),
    },
    {
      id: 2,
      name: "",
      contact: "987-654-3210",
      age: 21,
      address: "Jizzax, Uzbekistan",
      status: "Inactive",
      registrationDate: new Date().toISOString(),
    },
  ]);

  const [newMember, setNewMember] = useState<Omit<Member, "id">>({
    name: "",
    contact: "",
    age: 0,
    address: "",
    status: "Active",
    registrationDate: "",
  });

  const handleAdd = () => {
    if (
      newMember.name &&
      newMember.contact &&
      newMember.age > 0 &&
      newMember.address
    ) {
      setMembers([
        ...members,
        {
          id: Date.now(),
          ...newMember,
          registrationDate: new Date().toISOString(),
        },
      ]);
      setNewMember({
        name: "",
        contact: "",
        age: 0,
        address: "",
        status: "Active",
        registrationDate: "",
      });
    } else {
      alert("Iltimos qatorlarni to'ldiring.");
    }
  };

  const handleEdit = (id: number) => {
    console.log(`Edit member with ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  const handleToggleStatus = (id: number) => {
    setMembers(
      members.map((member) =>
        member.id === id
          ? {
              ...member,
              status: member.status === "Active" ? "Inactive" : "Active",
            }
          : member
      )
    );
  };

  const handleViewProfile = (id: number) => {
    const member = members.find((member) => member.id === id);
    if (member) {
      alert(`Profile Info:
      Name: ${member.name}
      Contact: ${member.contact}
      Age: ${member.age}
      Address: ${member.address}
      Status: ${member.status}
      Registered: ${member.registrationDate}`);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Members</h2>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Name"
          value={newMember.name}
          onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Contact"
          value={newMember.contact}
          onChange={(e) =>
            setNewMember({ ...newMember, contact: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Age"
          value={newMember.age}
          onChange={(e) =>
            setNewMember({ ...newMember, age: parseInt(e.target.value) || 0 })
          }
        />
        <input
          type="text"
          placeholder="Address"
          value={newMember.address}
          onChange={(e) =>
            setNewMember({ ...newMember, address: e.target.value })
          }
        />
        <select
          value={newMember.status}
          onChange={(e) =>
            setNewMember({
              ...newMember,
              status: e.target.value as Member["status"],
            })
          }
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button onClick={handleAdd}>Add Member</button>
      </div>
      <MemberTable
        members={members}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onToggleStatus={handleToggleStatus}
        onViewProfile={handleViewProfile}
      />
    </div>
  );
};

export default Members;
