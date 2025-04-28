export type Note = {
  id: string;
  content: string;
  time: number;
};

export type VideoNotes = {
  videoId: string;
  notes: Note[];
};

export type NotesStore$ = {
  videoNotes: VideoNotes[];
};
