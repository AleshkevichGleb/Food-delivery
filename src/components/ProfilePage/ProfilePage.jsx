import { signOut } from "firebase/auth";
import Button from "../../common/Button/Button";
import Title from "../../common/Title/Title"
import "../../index.css";
import styles from "./ProfilePage.module.scss";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { useEffect } from "react";
import {onAuthStateChanged} from "firebase/auth";

const ProfilePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(!user) navigate('/')
        })
    }, []);

    const logOutProfile = async() => {
        await signOut(auth)
            .then(() => navigate('/'))
            .catch((err) => alert(err.message));
        }

    return (
        <div className="main">
            <Title title = 'Аккаунт'/>
            <Button 
                addStyles={styles.logOutButton} 
                title= 'Выйти из аккаунта'
                onClick={logOutProfile}
            />
        </div>
        
    )
}

export default ProfilePage;