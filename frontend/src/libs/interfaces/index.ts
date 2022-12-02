import React from 'react'

export interface INote {
  id: number;
  title: string;
  createdAt: string;
  description: string;
  important: boolean;
}

export interface IPostNote {
  title: string;
  description: string;
}

export interface IPutNote {
  id?: number;
  title?: string;
  description?: string;
  important?: boolean;
}

export interface IChildren {
  children: React.ReactNode;
}

export interface IContextNote {
  createdNote: (newNote: IPostNote) => Promise<void>;
  loadNotes: () => Promise<void>;
  loadNote: (id: number) => Promise<void>;
  upgradeNote: (editNote: IPutNote) => Promise<void>;
  toggleImportantNote: (id: number, important: boolean) => Promise<void>;
  deletedNote: (id: number) => Promise<void>;
  notes: INote[];
  note: INote;
  isEdit: boolean;
  setIsEdit: (isEdit: boolean) => void;
}

export interface IForm {
  isEdit?: boolean;
}
