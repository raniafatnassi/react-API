import React, {useState, useEffect} from 'react';
import axios from 'axios';

const UserList = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const result = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            );
            setData(result.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2 className='users' >Users Data</h2>
            <table > 
                <tr>
                <th>Name</th>
                <th>Username</th>
                <th>email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Company</th>
                </tr>
                {data.map(el => (
                        <tr key={el.id}>
                        <td> {el.name}</td>
                        <td> {el.username} </td>
                        <td> {el.email} </td>
                        <td> {el.address.street}, {el.address.suite}, {el.address.city}, {el.address.zipcode} </td>
                        <td> {el.phone} </td>
                        <td> <a href={el.website}> {el.website} </a> </td>
                        <td> {el.company.name} </td>
                        </tr>
                ))}
            </table>
        </div>
    )
}

export default UserList
