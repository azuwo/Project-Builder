import {googleSignin,googleSignout,onAuthStateChange} from '../firebase/FirebaseOAuth'
import {useEffect,useState} from 'react'
import {ClassesNesting, useStyles} from './testtheme'

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

    const classes = useStyles();

    return(
        <>
        <div>
            {
                user && <>
                <img src={user.photoURL}/>
                <span>{user.displayName}</span>
                <button type="submit" onClick={() => { googleSignout() }}>Google Signout</button>
                <ClassesNesting></ClassesNesting>
                <button
                    classes={{
                        root: classes.root, // class name, e.g. `classes-nesting-root-x`
                        label: classes.label, // class name, e.g. `classes-nesting-label-x`
                    }}
                    >
                    classes loggin
                    </button>
            </>
            }
            {
                !user && <button type="submit" onClick={() => { handleLogin() }}>Google Signin</button>
            }
        </div>
        </>
    )
}