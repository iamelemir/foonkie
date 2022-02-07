import Home from '../components/home'
import { useGetUsers } from '../api/index'


function Users() {

    const users = useGetUsers();
    console.log(users)
    return (
        <h1>ssss</h1>
        // <Home >
        // </Home>
    );
}

export default Users;