import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const ProfileList = () => {
  const { data: profiles } = useFetch("http://localhost:8000/profiles");

  return (
    <div className="profile">
      <h2>Profiles</h2>
      {profiles
        ? profiles.map((profile) => (
            <div className="profile-pre" key={profile.id}>
              <Link to={`/profile/${profile.id}`}>
                <h2>{profile.name}</h2>
                <p>Gender: {profile.gender}</p>
              </Link>
            </div>
          ))
        : "Loading . . ."}
    </div>
  );
};

export default ProfileList;
