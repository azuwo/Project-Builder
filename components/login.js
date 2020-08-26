import {googleSignin,googleSignout,onAuthStateChange} from '../firebase/FirebaseOAuth'
import {useEffect,useState} from 'react'
//import {useStyles} from '../styles/theme'
import {Button,Avatar,Menu,MenuItem,IconButton} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const Login = () =>{
    const [user, setUser] = useState(undefined)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

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

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };

    const handleClose = () => {
        setAnchorEl(null);
      };
    const handleSignOut = () => {
        setAnchorEl(null)
        googleSignout()
    }
//googleSignout()

    return(
        <>
        <div>
            {
                user && <>
                <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar alt={user.displayName} src={user.photoURL}/>
              </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleSignOut}>
                        SignOut
                        <FontAwesomeIcon icon={faSignOutAlt} />
                    </MenuItem>
                </Menu>
            </>
            }
            {
                !user && <Button color="inherit" onClick={() => { handleLogin() }}>
                    Sign In
                    <FontAwesomeIcon icon={faSignInAlt} />
                </Button>
            }
        </div>
        </>
    )
}

export {Login}