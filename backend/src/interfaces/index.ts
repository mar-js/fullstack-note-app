export interface INote {
  id: number;
  title: string;
  createdAt: string;
  description: string;
  important: boolean;
}

export interface INotePost {
  title: string;
  description: string;
}

export interface INoteUpdate {
  title: string;
  description: string;
  important?: boolean;
}
