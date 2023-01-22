import { getAuth } from "firebase/auth";

export function getUser() {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
        console.log(user);
        
        return user;
    }
    return null;
}
