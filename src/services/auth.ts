import {isNil} from 'lodash';
import router from '../router';

export default {
    isAuthenticated() {
        const user = localStorage.getItem('user');
        return !isNil(user);
    },

    login(creds, redirect: string) {
        // TODO: call token endpoint
        const user = {
            username: 'john',
            fullName: 'John Doe',
            email: 'joe@test.com',
        };
        localStorage.setItem('user', JSON.stringify(user));
        if (redirect) {
            router.push(redirect)
        }
    },

    // To log out
    logout: function () {
        localStorage.removeItem('user');
        router.push('/');
    }
}