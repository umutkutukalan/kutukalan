export type { IconType } from "react-icons";

import axios from "axios";
import { API_URL } from "../config";

export interface ProjectContentItem {
  type: string;
  content: string;
  size?: string | null;
}

export interface ProjectData {
  mainImg: string;
  title: string;
  description: string;
  githubUrl: string;
  // liveUrl: string;
  technologies: string[];
  contentItems: ProjectContentItem[];
}

export const CreateProjectService = async (projectData: ProjectData) => {
  try {
    const response = await axios.post(`${API_URL}/projects`, projectData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating project:", error);
  }
};

export interface Project {
  id: number;
  user: {
    firstName: string;
    lastName: string;
    username: string;
    profileImg: string;
  };
  mainImg: string;
  title: string;
  description: string;
  contentItems: ProjectContentItem[];
  githubUrl: string;
  liveUrl: string;
  technologies: string[];
  createdAt: string;
  updatedAt: string;
}

export const GetProjectService = async (page = 0, size = 5) => {
  try {
    const response = await axios.get(
      `${API_URL}/projects?page=${page}&size=${size}&sort=createdAt,desc`,
      {
        withCredentials: true, // HttpOnly cookie gönder
      }
    );
    return response;
  } catch (error) {
    console.error("Projeler çekilirlen hata:", error);
    throw error;
  }
};

export const GetProjectByIdService = async (projectId: number) => {
  try {
    const response = await axios.get(`${API_URL}/projects/${projectId}`, {
      withCredentials: true, // HttpOnly cookie gönder
    });
    return response.data;
  } catch (error) {
    console.error("Proje detayları çekilirken hata:", error);
    throw error;
  }
};
