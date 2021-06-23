import React, { useContext } from 'react';
import { UserContext } from '../../App';
import './Profile.css';
import defaultPhoto from '../../assets/user.png';

const Profile = () => {
    // eslint-disable-next-line no-unused-vars
    const [authentication, setAuthentication] = useContext(UserContext);
    const style = {
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
    }

    return (
        <div className="App">
            <div className="App-header">
                <main className="parent">
                    <div className="col">
                        <div className="row-6 mb-4">
                            {
                                authentication.photoUrl === null
                                    ? <img style={style} src={defaultPhoto} alt="" />
                                    : <img style={style} src={authentication.photoUrl} alt="" />
                            }
                        </div>
                        <div className="row-3">
                            <h4>{authentication.displayName}</h4>
                        </div>
                        <div className="row-3">
                            <h4>{authentication.email}</h4>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Profile;