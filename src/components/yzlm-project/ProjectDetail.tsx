import { useParams, useNavigate } from "react-router-dom";
import { discovery, iphonechip, sahnesen } from "../../utils";
import { IoArrowBack } from "react-icons/io5";

// Proje verilerini burada tanımlayın (veya context/API'den çekin)
const projectsData = [
  {
    id: 1,
    image: sahnesen,
    title: "Sahnesen",
    description: "Sahnesen projesi hakkında detaylı bilgi...",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/...",
    liveUrl: "https://...",
  },
  {
    id: 2,
    image: iphonechip,
    title: "iPhone Chip",
    description: "iPhone Chip projesi hakkında detaylı bilgi...",
    technologies: ["Next.js", "Three.js", "GSAP"],
    githubUrl: "https://github.com/...",
    liveUrl: "https://...",
  },
  {
    id: 3,
    image: discovery,
    title: "Discovery",
    description: "Discovery projesi hakkında detaylı bilgi...",
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/...",
    liveUrl: "https://...",
  },
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // ID'ye göre projeyi bul
  const project = projectsData.find((p) => p.id === Number(id));

  // Proje bulunamazsa
  if (!project) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Proje Bulunamadı</h1>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
          >
            Ana Sayfaya Dön
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen p-8">
      {/* Geri Butonu */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 mb-6 text-white/70 hover:text-white transition-colors"
      >
        <IoArrowBack className="text-xl" />
        <span>Geri Dön</span>
      </button>

      {/* Proje İçeriği */}
      <div className="max-w-6xl mx-auto">
        {/* Başlık */}
        <h1 className="text-5xl font-bold mb-6">{project.title}</h1>

        {/* Görsel */}
        <div className="w-full h-96 rounded-xl overflow-hidden mb-8">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Açıklama */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Proje Hakkında</h2>
          <p className="text-lg text-white/80 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Teknolojiler */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Kullanılan Teknolojiler</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white/10 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Linkler */}
        <div className="flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all"
            >
              GitHub'da Görüntüle
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-all"
            >
              Canlı Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;