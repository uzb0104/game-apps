import React, { useState } from "react";
import MemberTable from "../Admin/MemberTable";
import { Member } from "../../types/Member";

const Members: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([
    {
      id: 1,
      name: "Abbosbek",
      contact: "123-456-7890",
      age: 20,
      address: "Jizzax, O'zbekiston",
      status: "Faol",
      registrationDate: new Date().toISOString(),
    },
    {
      id: 2,
      name: "",
      contact: "987-654-3210",
      age: 0,
      address: "Jizzax, O'zbekiston",
      status: "Nofaol",
      registrationDate: new Date().toISOString(),
    },
  ]);

  const [newMember, setNewMember] = useState<Omit<Member, "id">>({
    name: "",
    contact: "",
    age: 0,
    address: "",
    status: "Faol",
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
        status: "Faol",
        registrationDate: "",
      });
    } else {
      alert("Iltimos, barcha maydonlarni to'ldiring.");
    }
  };

  const handleEdit = (id: number) => {
    console.log(`ID bilan a'zo tahrirlandi: ${id}`);
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
              status: member.status === "Faol" ? "Nofaol" : "Faol",
            }
          : member
      )
    );
  };

  const handleViewProfile = (id: number) => {
    const member = members.find((member) => member.id === id);
    if (member) {
      alert(`Profil ma'lumotlari:
      Ism: ${member.name}
      Aloqa: ${member.contact}
      Yosh: ${member.age}
      Manzil: ${member.address}
      Holat: ${member.status}
      Ro'yxatga olingan sana: ${member.registrationDate}`);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>A'zolar</h2>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Ism"
          value={newMember.name}
          onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Aloqa"
          value={newMember.contact}
          onChange={(e) =>
            setNewMember({ ...newMember, contact: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Yosh"
          value={newMember.age}
          onChange={(e) =>
            setNewMember({ ...newMember, age: parseInt(e.target.value) || 0 })
          }
        />
        <input
          type="text"
          placeholder="Manzil"
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
          <option value="Faol">Faol</option>
          <option value="Nofaol">Nofaol</option>
        </select>
        <button onClick={handleAdd}>A'zo qo'shish</button>
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
