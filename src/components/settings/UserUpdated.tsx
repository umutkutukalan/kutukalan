import { useEffect } from "react";
import { useUpdatedUser } from "../../hooks/settings/useUpdatedUser";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface UserUpdatedProps {
  user: {
    email?: string;
    firstName: string;
    id?: number;
    lastName: string;
    profileImg?: string;
    role: string;
    username: string;
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
}: UserUpdatedProps) => {
  // Kullanıcı verisi geldikten sonra input başlangıç değerlerini ayarla
  // Bu sayede controlled input kullanırız ve onChange ile güncelleriz
  // user null ise boş string kalır
  // Değişiklik durumu render sırasında state ile değil türetilmiş değerle hesaplanmalı

  const { updateUser, error, updateLoading } = useUpdatedUser();

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName ?? "");
      setLastName(user.lastName ?? "");
      setUsername(user.username ?? "");
      setEmail(user.email ?? "");
    }
  }, [user]);

  const isChanged =
    firstName !== (user?.firstName ?? "") ||
    lastName !== (user?.lastName ?? "") ||
    username !== (user?.username ?? "") ||
    email !== (user?.email ?? "") ||
    profileImage !== "";

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
          : user.profileImg || null
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
