// src/types/UserItem.ts
export interface UserItem {
  name: string;
  score: string;
  email: string;
  joinedDate: string;
  increase: boolean;
  image: () => Promise<{ default: string }>;
}

export interface BoardItem {
  label: string;
  value: string;
}

export interface GroupItem {
  name: string;
  score: string;
  image: () => Promise<{ default: string }>;
  increase: boolean;
}

export interface TopicItem {
  label: string;
  value: string;
  image: string; // The image is a string URL
}
