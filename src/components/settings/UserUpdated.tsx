import { useEffect } from "react";
import { useUpdatedUser } from "../../hooks/settings/useUpdatedUser";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AboutMeSettings from "./AboutMeSettings";

interface UserUpdatedProps {
  user: {
    email?: string;
    firstName: string;
    id?: number;
    lastName: string;
    profileImg?: string;
    role: string;
    username: string;
    job?: string;
    phone?: string;
    city?: string;
    aboutMe?: string;
    aboutMeItems?: string[];
    linkedin?: string;
    github?: string;
    instagram?: string;
  } | null;
  profileImage: string | null;
  firstName: string;
  setFirstName: (value: string) => void;
  lastName: string;
  setLastName: (value: string) => void;
  username: string;
  setUsername: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  job: string;
  setJob: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  city: string;
  setCity: (value: string) => void;
  aboutMe: string;
  setAboutMe: (value: string) => void;
  aboutMeItems: string[];
  setAboutMeItems: (value: string[]) => void;
  linkedin: string;
  setLinkedin: (value: string) => void;
  github: string;
  setGithub: (value: string) => void;
  instagram: string;
  setInstagram: (value: string) => void;
}

const UserUpdated = ({
  user,
  profileImage,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  username,
  setUsername,
  email,
  setEmail,
  job,
  setJob,
  phone,
  setPhone,
  city,
  setCity,
  aboutMe,
  setAboutMe,
  aboutMeItems,
  setAboutMeItems,
  linkedin,
  setLinkedin,
  github,
  setGithub,
  instagram,
  setInstagram,
}: UserUpdatedProps) => {
  // Kullanıcı verisi geldikten sonra input başlangıç değerlerini ayarla
  // Bu sayede controlled input kullanırız ve onChange ile güncelleriz
  // user null ise boş string kalır
  // Değişiklik durumu render sırasında state ile değil türetilmiş değerle hesaplanmalı

  const { updateUser, error, updateLoading } = useUpdatedUser();

  useEffect(() => {}, [user]);

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName ?? "");
      setLastName(user.lastName ?? "");
      setUsername(user.username ?? "");
      setEmail(user.email ?? "");
      setJob(user.job ?? "");
      setPhone(user.phone ?? "");
      setCity(user.city ?? "");
      setAboutMe(user.aboutMe ?? "");
      setAboutMeItems(user.aboutMeItems ?? []);
      setLinkedin(user.linkedin ?? "");
      setGithub(user.github ?? "");
      setInstagram(user.instagram ?? "");
    }
  }, [user]);

  const isChanged =
    firstName !== (user?.firstName ?? "") ||
    lastName !== (user?.lastName ?? "") ||
    username !== (user?.username ?? "") ||
    email !== (user?.email ?? "") ||
    profileImage !== "" ||
    job !== (user?.job ?? "") ||
    phone !== (user?.phone ?? "") ||
    city !== (user?.city ?? "") ||
    aboutMe !== (user?.aboutMe ?? "") ||
    aboutMeItems !== (user?.aboutMeItems ?? []) ||
    linkedin !== (user?.linkedin ?? "") ||
    github !== (user?.github ?? "") ||
    instagram !== (user?.instagram ?? "");

  const handleUpdate = async () => {
    if (user?.id) {
      const response = await updateUser(
        user.id,
        firstName,
        lastName,
        username,
        email,
        profileImage !== "" && profileImage
          ? profileImage
          : user.profileImg || null,
        job,
        phone,
        city,
        aboutMe,
        aboutMeItems,
        linkedin,
        github,
        instagram,
      );
      if (response) {
        window.location.reload();
      }
    }
  };

  if (updateLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <DotLottieReact
          className="w-20 h-20"
          src="https://lottie.host/c13e1dc0-f7ee-4254-835f-f023d14021b1/CsVgXfNTS6.lottie"
          loop
          autoplay
        />
      </div>
    );
  }

  if (error) {
    <div className="w-full h-screen flex items-center justify-center">
      <div className="bg-red-500 text-white text-xs px-3 py-2 rounded">
        {error.message}
      </div>
      ;
    </div>;
  }

  return (
    <>
      <div
        className="flex flex-col gap-4 h-full w-full border-b border-white/20 pb-5"
        onKeyDown={(e) => {
          if (e.key === "Enter" && isChanged) {
            e.preventDefault();
            handleUpdate();
          }
        }}
        tabIndex={-1}
      >
        <ul className="flex flex-col gap-4 w-full text-sm">
          <div className="flex flex-col gap-4 w-full border-b border-white/20 pb-5">
            <div className="grid grid-cols-2 gap-4 items-center">
              <li className="flex flex-col gap-1">
                <label className="text-gray-400 text-xs">*İsim</label>
                <input
                  type="text"
                  value={firstName}
                  className={`border border-white/20 rounded-lg p-2 focus:outline-none focus:ring-1 ${
                    user?.firstName !== firstName ? "ring-1 ring-green-500" : ""
                  } w-full bg-transparent text-gray-200 text-xs`}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </li>
              <li className="flex flex-col gap-1">
                <label className="text-gray-400 text-xs">*Soyisim</label>
                <input
                  type="text"
                  value={lastName}
                  className={`border border-white/20 rounded-lg p-2 focus:outline-none focus:ring-1 ${
                    user?.lastName !== lastName ? "ring-1 ring-green-500" : ""
                  } w-full bg-transparent text-gray-200 text-xs`}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </li>
            </div>
            <div className="grid grid-cols-2 gap-4 items-center">
              <li className="flex flex-col gap-1">
                <label className="text-gray-400 text-xs">*Username</label>
                <input
                  type="text"
                  value={username}
                  className={`border border-white/20 rounded-lg p-2 focus:outline-none focus:ring-1 ${
                    user?.username !== username ? "ring-1 ring-green-500" : ""
                  } w-full bg-transparent text-gray-200 text-xs`}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </li>
              <li className="flex flex-col gap-1">
                <label className="text-gray-400 text-xs">*E-Mail</label>
                <input
                  type="text"
                  value={email}
                  className={`border border-white/20 rounded-lg p-2 focus:outline-none focus:ring-1 ${
                    user?.email !== email ? "ring-1 ring-green-500" : ""
                  } w-full bg-transparent text-gray-200 text-xs`}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </li>
            </div>
            <div className="grid grid-cols-2 gap-4 items-center">
              <li className="flex flex-col gap-1">
                <label className="text-gray-400 text-xs">*Job</label>
                <input
                  type="text"
                  value={job}
                  className={`border border-white/20 rounded-lg p-2 focus:outline-none focus:ring-1 ${
                    user?.job !== job ? "ring-1 ring-green-500" : ""
                  } w-full bg-transparent text-gray-200 text-xs`}
                  onChange={(e) => setJob(e.target.value)}
                />
              </li>
              <li className="flex flex-col gap-1">
                <label className="text-gray-400 text-xs">*Phone</label>
                <input
                  type="text"
                  value={phone}
                  className={`border border-white/20 rounded-lg p-2 focus:outline-none focus:ring-1 ${
                    user?.phone !== phone ? "ring-1 ring-green-500" : ""
                  } w-full bg-transparent text-gray-200 text-xs`}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </li>
            </div>
            <div className="grid grid-cols-2 gap-4 items-center">
              <li className="flex flex-col gap-1">
                <label className="text-gray-400 text-xs">*City</label>
                <input
                  type="text"
                  value={city}
                  className={`border border-white/20 rounded-lg p-2 focus:outline-none focus:ring-1 ${
                    user?.city !== city ? "ring-1 ring-green-500" : ""
                  } w-full bg-transparent text-gray-200 text-xs`}
                  onChange={(e) => setCity(e.target.value)}
                />
              </li>
              <li className="flex flex-col gap-1">
                <label className="text-gray-400 text-xs">*GitHub</label>
                <input
                  type="text"
                  value={github}
                  className={`border border-white/20 rounded-lg p-2 focus:outline-none focus:ring-1 ${
                    user?.github !== github ? "ring-1 ring-green-500" : ""
                  } w-full bg-transparent text-gray-200 text-xs`}
                  onChange={(e) => setGithub(e.target.value)}
                />
              </li>
            </div>
            <div className="grid grid-cols-2 gap-4 items-center">
              <li className="flex flex-col gap-1">
                <label className="text-gray-400 text-xs">*Linkedin</label>
                <input
                  type="text"
                  value={linkedin}
                  className={`border border-white/20 rounded-lg p-2 focus:outline-none focus:ring-1 ${
                    user?.linkedin !== linkedin ? "ring-1 ring-green-500" : ""
                  } w-full bg-transparent text-gray-200 text-xs`}
                  onChange={(e) => setLinkedin(e.target.value)}
                />
              </li>
              <li className="flex flex-col gap-1">
                <label className="text-gray-400 text-xs">*Instagram</label>
                <input
                  type="text"
                  value={instagram}
                  className={`border border-white/20 rounded-lg p-2 focus:outline-none focus:ring-1 ${
                    user?.instagram !== instagram ? "ring-1 ring-green-500" : ""
                  } w-full bg-transparent text-gray-200 text-xs`}
                  onChange={(e) => setInstagram(e.target.value)}
                />
              </li>
            </div>
          </div>
          <AboutMeSettings
            aboutMe={aboutMe}
            aboutMeItems={aboutMeItems}
            setAboutMe={setAboutMe}
            setAboutMeItems={setAboutMeItems}
            user={user}
          />
        </ul>
        <div className="w-full flex items-end justify-end">
          {isChanged && (
            <button
              className="w-full text-xs px-3 py-2 rounded bg-blue-700 text-white cursor-pointer hover:bg-blue-600 transition-all"
              onClick={handleUpdate}
            >
              Güncelle
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default UserUpdated;
