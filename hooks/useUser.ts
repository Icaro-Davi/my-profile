import { useEffect, useState } from "react"

import UserRequestor from '../services/requestor/User';
import { GitHubUser } from "../services/requestor/User/user.interface";

export const useUser = (username: string, onError?: (error?: any) => void) => {
    const [user, setUser] = useState<GitHubUser>();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        UserRequestor.getGitHubUser(username)
            .then(data => {
                setUser(data);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                onError && onError(error);
            });
    }, [username]);
    return { user, isLoading, onError };
}