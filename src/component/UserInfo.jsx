import { FaPencilAlt } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const UserInfo = ({ user, index, users, setUsers }) => {
  const { _id, email, name, gender, status } = user;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this record?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed > 0) {
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Record has been deleted.", "success");
              const remaining = users.filter((user) => user._id !== id);
              setUsers(remaining);
            }
          });
      }
    });
  };

  return (
    <tr className="text-center">
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{gender}</td>
      <td>{status}</td>
      <td className="flex gap-5 justify-center">
        <Link to={`/users/${_id}`}>
          <button className="btn btn-ghost shadow-lg" title="update user">
            <FaPencilAlt className="text-purple-700"></FaPencilAlt>
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-ghost shadow-lg"
          title="delete user"
        >
          <RxCross1 className="text-purple-700"></RxCross1>
        </button>
      </td>
    </tr>
  );
};

export default UserInfo;
