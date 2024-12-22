import axios from "axios";

export default function UsersList({setFormData,users,setUsers,setSelectedUser}){

    const fetchUserDetails = async (id) => {
        try {
          const response = await axios.get(`https://reqres.in/api/users/${id}`);
          setSelectedUser(response.data.data);
        } catch (err) {
          console.log('Failed to fetch user details.');
          console.log(err);
        }
      };


      const deleteUser = async (id) => {
        try {
          await axios.delete(`https://reqres.in/api/users/${id}`);
          setUsers(users.filter((user) => user.id !== id));
        } catch (err) {
          console.log('Failed to delete user.');
          console.log(err);
        }
      };



    return(
    <ul className="bg-white shadow rounded p-4">
    {users.map((user) => (
      <li
        key={user.id}
        className="flex justify-between items-center border-b py-2"
      >
        {user.first_name} {user.last_name}
        <div>
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
            onClick={() => fetchUserDetails(user.id)}
          >
            Details
          </button>
          <button
            className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
            onClick={() =>{setSelectedUser(null) ;setFormData({ email: user.email, first_name: user.first_name, last_name: user.last_name, id: user.id })}}
          >
            Edit
          </button>
          <button
            className="bg-red-500 text-white px-3 py-1 rounded"
            onClick={() => deleteUser(user.id)}
          >
            Delete
          </button>
        </div>
      </li>
    ))}
  </ul>)
}