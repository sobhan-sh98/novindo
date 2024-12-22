export default function UserDetail({selectedUser}){
    return(
        <div className="user-details bg-white shadow rounded p-4 mb-4">
        <h2 className="text-xl font-bold">User Details</h2>
        <p>Email: {selectedUser.email}</p>
        <p>First Name: {selectedUser.first_name}</p>
        <p>Last Name: {selectedUser.last_name}</p>
      </div>
    )
}