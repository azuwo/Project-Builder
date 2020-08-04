import {googleSignin,googleSignout,onAuthStateChange} from '../firebase/FirebaseOAuth'
import {useEffect,useState} from 'react'
import {useStyles} from '../styles/theme'


export const Login = () =>{
    const [user, setUser] = useState(undefined)

    const handleLogin = async () =>{
        googleSignin().then(result =>{
        const {credential, user} = result
        const {accessToken} = credential

        console.log(user,accessToken)
        })
    }

    useEffect(() =>{
        onAuthStateChange(setUser)
    }, [])

    return(
        <>
        <div>
            {
            user && <>
                <img src={user.photoURL}/>
                <span>{user.displayName}</span>
                <button type="submit" onClick={() => { googleSignout() }}>Google Signout</button> 3
            </>
            }
            {
                !user && <button className={useStyles().root} type="submit" onClick={() => { handleLogin() }}>Google Signin</button>
            }
                
        </div>
        
            
        </>
    )
}