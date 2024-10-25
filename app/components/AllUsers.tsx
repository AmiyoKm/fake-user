"use client";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import React, { useEffect } from "react";

const AllUsers = () => {
  const [users, setUsers] = React.useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/user");
      const data = await response.json();
      console.log(data);

      setUsers(data.data);
    };

    fetchUsers();
  }, []);
  console.log(users);

  return (
    <div>
      {users &&
        users.map((user: any, index: number) => (
          <div key={index}>
            <Card>
              <CardTitle>{user.name}</CardTitle>
            </Card>
          </div>
        ))}
    </div>
  );
};

export default AllUsers;
