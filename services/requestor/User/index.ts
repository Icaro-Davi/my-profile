import axios from 'axios';
import { GitHubUser } from './user.interface';

class User {
    private static endpoints = {
        gitHub: 'https://api.github.com'
    };

    static async getGitHubUser(username) {
        try {
            const { data } = await axios.get<GitHubUser>(`${this.endpoints.gitHub}/users/${username}`);            
            return data;
        } catch (error) {
            throw error;
        }
    }
}

export default User;