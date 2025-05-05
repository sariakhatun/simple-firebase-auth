
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../Firebase.init';



const Login = () => {
    let [user,setUser] = useState(null)
    let provider = new GoogleAuthProvider();
    let githubProvider = new GithubAuthProvider()
    let handleGoogleSignIn = () =>{
        console.log('google sign in clicked ')
        signInWithPopup(auth,provider)
        .then(res=>{
            console.log(res.user)
            setUser(res.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    let handleSignOut=()=>{
        signOut(auth).then(()=>{
            console.log('sign out completed')
            setUser(null)
        }).catch(error=>{
            console.log(error)
        })
    }
    let handleGithubSignIn = ()=>{
        signInWithPopup(auth,githubProvider)
        .then(res=>{
           let loggedInUser = res.user;
           console.log(loggedInUser)
           
           if(!loggedInUser.email && loggedInUser?.providerData?.length){
            console.log('user email is not directly provided')
            if(loggedInUser.providerData[0].email){
                loggedInUser.email = loggedInUser.providerData[0].email
                setUser(loggedInUser)
            }
           
           }
        }).catch(error=>{
            console.log(error)
        })
        
    }

    return (
        <div>
            <h2>Please Login</h2>
            
            
            {
                user ? <button onClick={handleSignOut}>Sign Out</button> :<>
                     <button onClick={handleGoogleSignIn}>Sign In With Google</button>
                     <button onClick={handleGithubSignIn}>Sign In With Github</button>
                </>
            }
           {
            user &&  <div>
            <h3>Name : {user.displayName}</h3>
           <p>Email : {user.email}</p> 
           <img src={user.
photoURL} alt="" />
       </div>
           }
        </div>
    );
};

export default Login;