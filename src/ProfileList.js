import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const ProfileList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dbRef = ref(getDatabase(), "profiles");

      onValue(dbRef, (snapshot) => {
        const profiles = snapshot.val();

        if (profiles) {
          const usersArray = Object.values(profiles).map((profile) => ({
            id: profile.id,
            username: profile.username,
            password: profile.password,
            name: profile.name,
            mobile: profile.mobile,
            gender: profile.gender,
            email: profile.email,
          }));
          setUsers(usersArray);
        }
      });
    };

    fetchData();

    return () => {};
  }, []);

  return (
    <div className="profile">
      <h2>Profiles</h2>
      {users.map((profile) => (
        <div className="profile-pre" key={profile.id}>
          <Link to={`/profile/${profile.id}`}>
            <h2>{profile.name}</h2>
            <p>Gender: {profile.gender}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProfileList;
