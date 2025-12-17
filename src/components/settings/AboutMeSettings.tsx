import { LuTrash2 } from "react-icons/lu";

interface AboutMeSettingsProps {
  aboutMe: string;
  aboutMeItems: string[];
  setAboutMe: (aboutMe: string) => void;
  setAboutMeItems: (items: string[]) => void;
  user: {
    aboutMe?: string;
    aboutMeItems?: string[];
  } | null;
}

const AboutMeSettings = ({
  aboutMe,
  aboutMeItems,
  setAboutMe,
  setAboutMeItems,
  user,
}: AboutMeSettingsProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 items-center">
      <li className="flex flex-col gap-1">
        <label className="text-gray-400 text-xs">*About Me</label>
        <input
          type="text"
          value={aboutMe}
          className={`border border-white/20 rounded-lg p-2 focus:outline-none focus:ring-1 ${
            user?.aboutMe !== aboutMe ? "ring-1 ring-green-500" : ""
          } w-full bg-transparent text-gray-200 text-xs`}
          onChange={(e) => setAboutMe(e.target.value)}
          onKeyDown={(e) => {
            if (e.code === "Space" || e.key === " " || e.key === "Spacebar") {
              e.stopPropagation();
            }
          }}
          placeholder="Hakkımda kısa bir metin"
        />
      </li>
      <li className="flex flex-col gap-2">
        <label className="text-gray-400 text-xs">*About Me Items</label>
        <ul className="flex flex-col gap-2">
          {aboutMeItems.map((item, index) => {
            const original = user?.aboutMeItems?.[index] ?? "";
            const changed = original !== item;
            return (
              <li key={index} className="flex items-center gap-2">
                <input
                  type="text"
                  value={item}
                  onChange={(e) => {
                    const next = [...aboutMeItems];
                    next[index] = e.target.value;
                    setAboutMeItems(next);
                  }}
                  onKeyDown={(e) => {
                    if (e.code === "Space" || e.key === " " || e.key === "Spacebar") {
                      e.stopPropagation();
                    }
                  }}
                  className={`flex-1 border border-white/20 rounded-lg p-2 focus:outline-none focus:ring-1 ${
                    changed ? "ring-1 ring-green-500" : ""
                  } w-full bg-transparent text-gray-200 text-xs`}
                  placeholder={`Öğe #${index + 1}`}
                />
                <button
                  type="button"
                  className="text-xs px-2 py-2 rounded bg-red-600 text-white cursor-pointer hover:bg-red-500"
                  onClick={() => {
                    const next = aboutMeItems.filter((_, i) => i !== index);
                    setAboutMeItems(next);
                  }}
                  aria-label={`Öğe ${index + 1}'i sil`}
                >
                  <LuTrash2 />
                </button>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center justify-start">
          <button
            type="button"
            className="text-xs px-3 py-2 rounded bg-blue-700 text-white cursor-pointer hover:bg-blue-600"
            onClick={() => setAboutMeItems([...(aboutMeItems || []), ""])}
          >
            + Yeni Öğe Ekle
          </button>
        </div>
      </li>
    </div>
  );
};

export default AboutMeSettings;
