import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncDeleteUser } from '../store/actions/userAction';

const ProfileCard = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const navigate = useNavigate();

    const updateAccount = () => {
        navigate('/update');
    };

    const deleteAccount = (id) => {
        if (window.confirm("Are you sure you want to delete your profile?")) {
            dispatch(asyncDeleteUser(id))
                .then(() => {
                    // Provide feedback to the user that deletion was successful
                    alert('Profile deleted successfully.');
                    // Optionally, navigate to a different page after deletion
                    navigate('/');
                })
                .catch((error) => {
                    // Handle error
                    console.error('Error deleting profile:', error);
                    alert('Error deleting profile. Please try again.');
                });
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                <img className="w-full" src={user?.avatar?.url || "https://via.placeholder.com/400x200"} alt="Profile" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{user?.name}</div>
                    <p className="text-gray-700 text-base">
                        Email: {user?.email} <br />
                        Phone: {user?.contact || "N/A"}
                    </p>
                </div>
              
                <div className="px-6 py-4 flex justify-between">
                    <button onClick={updateAccount} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Update Profile
                    </button>
                    <button onClick={() => deleteAccount(user._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                        Delete Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
