import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router";

export function getUser() {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
        return user.uid;
    }
    return null;
}

export function redirect() {
    const navigate = useNavigate();
    return
}