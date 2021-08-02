import { useEffect, useState } from "react"

import UserRequestor from '../services/requestor/User';
import { GitHubUser } from "../services/requestor/User/user.interface";

interface useUserProps {
    username: string;
    forceUntilGet?: boolean;
    intervalMs?: number;
    onError?: (error?: any) => void;
}

export const useUser = ({ username, forceUntilGet, onError, intervalMs }: useUserProps) => {
    const [user, setUser] = useState<GitHubUser>();
    const [isLoading, setLoading] = useState(true);

    const getUser = () => {
        return UserRequestor.getGitHubUser(username)
            .then(data => {
                setUser(data);
                setLoading(false);
                return true;
            })
            .catch(error => {
                setLoading(false);
                onError && onError(error);
                return false;
            });
    }

    useEffect(() => {
        let intervalId: NodeJS.Timeout = undefined;
        getUser().then(repeat => {
            if (!repeat && forceUntilGet)
                intervalId = setInterval(async () => {
                    if (await getUser()) clearInterval(intervalId);
                }, intervalMs || 5000);
        });
    }, [username]);

    return { user, isLoading, onError };
}