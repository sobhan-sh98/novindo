import axios from "axios";

export default function UserForm({formData,setFormData,setUsers,users}){
    const createUser = async () => {
        try {
          const response = await axios.post('https://reqres.in/api/users', formData);
          setUsers([...users, response.data]);
          setFormData({ email: '', first_name: '', last_name: '' });
        } catch (err) {
          console.log('Failed to create user.');
          console.log(err);
        }
      };
      const updateUser = async (id) => {
        try {
          await axios.put(`https://reqres.in/api/users/${id}`, formData);
          setUsers(users.map((user) => (user.id === id ? { ...user, ...formData } : user)));
          setFormData({ email: '', first_name: '', last_name: '' });
        } catch (err) {
          console.log('Failed to update user.');
          console.log(err);
        }
      };
    return(
        <div className="user-form bg-white shadow rounded p-4">
        <h2 className="text-xl font-bold mb-4">{formData.id ? 'Edit User' : 'Create User'}</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formData.id ? updateUser(formData.id) : createUser();
          }}
        >
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3"
            type="text"
            placeholder="First Name"
            value={formData.first_name}
            onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3"
            type="text"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            type="submit"
          >
            {formData.id ? 'Update' : 'Create'}
          </button>
          {formData.id &&
                <button
                className="bg-red-500 text-white px-4 py-2 rounded ml-2"
                type="reset"
                onClick={()=>{setFormData({ email: '', first_name: '', last_name: '' });}}
              >
                Cancel
              </button>
          }
        </form>
      </div>
    )
}