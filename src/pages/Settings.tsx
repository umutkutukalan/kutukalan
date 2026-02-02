import { useAudioPlayer } from "../context/AudioPlayerContext";
import { useUser } from "../hooks/useUserContext";
import UserDetail from "../components/settings/UserDetail";
import UserUpdated from "../components/settings/UserUpdated";
import PlaylistSettings from "../components/settings/PlaylistSettings";
import { useEffect, useRef, useState } from "react";

const Settings = () => {
  const { currentTrack } = useAudioPlayer();
  const { user } = useUser();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [profileImage, setProfileImage] = useState<string>("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [aboutMeItems, setAboutMeItems] = useState<string[]>([]);
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [instagram, setInstagram] = useState("");

  useEffect(() => {}, [user]);

  return (
    <>
      <div
        className={`pt-10 px-5 sm:px-10 xl:pb-5 ${
          currentTrack ? "pb-10" : "pb-5"
        }`}
      >
        <div className="flex flex-col gap-5 w-full">
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;

              const reader = new FileReader();
              reader.onloadend = () => {
                if (!reader.result) return;

                const base64 = reader.result as string;
                setProfileImage(base64); // Base64'ü state'e kaydet
              };
              reader.readAsDataURL(file);
              e.target.value = "";
            }}
          />
          <UserDetail
            profileImage={profileImage}
            fileInputRef={fileInputRef}
            user={user}
          />
          <UserUpdated
            user={user}
            profileImage={profileImage}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            username={username}
            setUsername={setUsername}
            email={email}
            setEmail={setEmail}
            job={job}
            setJob={setJob}
            phone={phone}
            setPhone={setPhone}
            city={city}
            setCity={setCity}
            aboutMe={aboutMe}
            setAboutMe={setAboutMe}
            aboutMeItems={aboutMeItems}
            setAboutMeItems={setAboutMeItems}
            linkedin={linkedin}
            setLinkedin={setLinkedin}
            github={github}
            setGithub={setGithub}
            instagram={instagram}
            setInstagram={setInstagram}
          />
          <PlaylistSettings />
        </div>
      </div>
    </>
  );
};

export default Settings;
