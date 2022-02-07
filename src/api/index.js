const axios = require('axios').default;



export function useGetUsers() {

    const users = 'https://reqres.in/api/users?page=1';

    try {
        const data = axios({
            method: 'get',
            url: users,
            // responseType: 'stream'
        })
            .then(function (data) {
                console.log(data.data.data)
            });

    } catch (error) {
        console.error(error)
    }
}

