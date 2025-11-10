import { IconType } from "react-icons";

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
  liveUrl: string;
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
  contentItems: unknown[];
  createdAt: string;
  description: string;
  githubUrl: string;
  id: number;
  liveUrl: string;
  mainImg: string;
  technologies: string[];
  title: string;
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
