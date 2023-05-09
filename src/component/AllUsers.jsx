import { Link, useLoaderData } from "react-router-dom";
import UserInfo from "./UserInfo";
import { FaUserAlt } from "react-icons/fa";
import { useState } from "react";

const AllUsers = () => {
  const usersData = useLoaderData();
  const [users, setUsers] = useState(usersData);

  return (
    <div className="container mx-auto">
      <Link to="/">
        <button className="text-purple-600 shadow-lg btn btn-ghost mt-20 mb-10 capitalize">
          New User
          <FaUserAlt className="ml-2"></FaUserAlt>
        </button>
      </Link>
      <div>
        <div className="overflow-x-auto">
          <table className="table  table-compact w-full border border-t-0">
            <thead>
              <tr className="text-center">
                <th className="bg-violet-950 text-white font-semibold py-4">
                  ID
                </th>
                <th className="bg-violet-950 text-white font-semibold py-4">
                  Name
                </th>
                <th className="bg-violet-950 text-white font-semibold py-4">
                  Email
                </th>
                <th className="bg-violet-950 text-white font-semibold py-4">
                  Gender
                </th>
                <th className="bg-violet-950 text-white font-semibold py-4">
                  Status
                </th>
                <th className="bg-violet-950 text-white font-semibold py-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <UserInfo
                  key={user._id}
                  users={users}
                  setUsers={setUsers}
                  user={user}
                  index={index}
                ></UserInfo>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
