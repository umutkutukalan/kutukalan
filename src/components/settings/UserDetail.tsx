interface UserDetailProps {
  profileImage: string;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  user: {
    firstName: string;
    lastName: string;
    username: string;
    role: string;
    profileImg?: string;
  } | null;
}

const UserDetail = ({ profileImage, fileInputRef, user }: UserDetailProps) => {
  return (
    <div className="flex items-center sm:items-end gap-2 border-b border-white/20 pb-5">
      <div
        className={`w-35 h-35 flex items-center justify-center rounded-full bg-white/40 overflow-hidden cursor-pointer hover:opacity-80 transition-all flex-shrink-0 ${
          profileImage !== user?.profileImg ? "border-3 border-green-500" : ""
        }`}
        onClick={() => {
          if (fileInputRef.current) {
            fileInputRef.current.click(); // Finder açılır
          }
        }}
      >
        {profileImage || user?.profileImg ? (
          <img
            src={profileImage || user?.profileImg}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="">?</div>
        )}
      </div>
      <div className="w-full flex flex-col p-5">
        <p className="text-gray-400 text-sm">📌 Hoş geldin,</p>
        <h2 className="text-4xl font-semibold text-white">
          {user?.firstName} {user?.lastName}
        </h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <h4 className="text-[10px] text-gray-400">@{user?.username}</h4>
            <span>·</span>
            <h4 className="text-[10px] text-gray-400">
              {user?.role === "ADMIN" ? "Admin" : "User"}
            </h4>
          </div>
          {}
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
