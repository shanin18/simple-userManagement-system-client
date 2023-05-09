import { Link } from "react-router-dom";
import { FaLessThan } from "react-icons/fa";
import Swal from "sweetalert2";

const AddUser = () => {
  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const gender = form.gender.value;
    const status = form.status.value;
    const newUser = { email, name, gender, status };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("data inserted successfully!");
          form.reset();
        }
      });
  };

  return (
    <div>
      <Link to="/allUsers">
        <button className="text-purple-600 font-bold text-lg ml-20 my-16 flex items-center gap-2">
          <span className="flex items-center">
            <FaLessThan></FaLessThan>
            <FaLessThan></FaLessThan>
          </span>
          All Users
        </button>
      </Link>
      <div className="container mx-auto">
        <div className="text-center my-10">
          <h2 className="font-bold text-2xl mb-2">New User</h2>
          <p>Use the below form to create a new account</p>
        </div>

        <div>
          <form onSubmit={handleAddUser}>
            <div>
              <label htmlFor="name" className="text-xl">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="enter your name"
                className="w-full border px-5 py-3 rounded-md mt-3 mb-5"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xl">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="enter your email"
                className="w-full border px-5 py-3 rounded-md mt-3 mb-5"
                required
              />
            </div>
            <div className="flex gap-5 mt-5 mb-5">
              <h4 className="font-semibold text-lg">Gender</h4>
              <div className="flex items-center gap-10">
                <div className="flex item-center gap-2">
                  <input type="radio" id="male" name="gender" value="Male" />
                  <label htmlFor="male" className="cursor-pointer">
                    Male
                  </label>
                </div>
                <div className="flex item-center gap-2">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="Female"
                  />
                  <label htmlFor="female" className="cursor-pointer">
                    Female
                  </label>
                </div>
              </div>
            </div>
            <div className="flex gap-5 mt-5 mb-5">
              <h4 className="font-semibold text-lg">Status</h4>
              <div className="flex items-center gap-10">
                <div className="flex item-center gap-2">
                  <input
                    type="radio"
                    id="active"
                    name="status"
                    value="Active"
                  />
                  <label htmlFor="active" className="cursor-pointer">
                    Active
                  </label>
                </div>
                <div className="flex item-center gap-2">
                  <input
                    type="radio"
                    id="inactive"
                    name="status"
                    value="Inactive"
                  />
                  <label htmlFor="inactive" className="cursor-pointer">
                    Inactive
                  </label>
                </div>
              </div>
            </div>
            <button className="btn btn-block bg-green-500 text-lg">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
