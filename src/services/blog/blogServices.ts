export type { IconType } from "react-icons";

import axios from "axios";
import { API_URL } from "../config";

export interface BlogContentItem {
  type: string;
  content: string;
  size?: string | null;
}

export interface BlogData {
  userId?: number;
  mainImg: string;
  title: string;
  description: string;
  tags: string[];
  contentItems: BlogContentItem[];
  youtubeUrl?: string | null;
}

export const CreateBlogService = async (blogData: BlogData) => {
  try {
    const response = await axios.post(`${API_URL}/blogs`, blogData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating blog:", error);
  }
};

export interface Blog {
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
  contentItems: BlogContentItem[];
  youtubeUrl?: string | null;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export const GetBlogService = async (page = 0, size = 5) => {
  try {
    const response = await axios.get(
      `${API_URL}/blogs?page=${page}&size=${size}&sort=createdAt,desc`,
      {
        withCredentials: true, // HttpOnly cookie gönder
      }
    );
    return response;
  } catch (error) {
    console.error("Bloglar çekilirken hata:", error);
    throw error;
  }
};

export const GetBlogByIdService = async (blogId: number) => {
  try {
    const response = await axios.get(`${API_URL}/blogs/${blogId}`, {
      withCredentials: true, // HttpOnly cookie gönder
    });
    return response.data;
  } catch (error) {
    console.error("Blog detayları çekilirken hata:", error);
    throw error;
  }
};
