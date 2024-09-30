// Define a TextBlock type with a string id, content, and lesson_phase
export type TextBlock = {
  id: string;   // Unique identifier, changed to string for nanoid
  type: 'TextBlock';
  content: string;
  lesson_phase: string; // New lesson_phase field
};

// Define an OpenQuestionBlock type with a string id, question, answer, and lesson_phase
export type OpenQuestionBlock = {
  id: string;   // Unique identifier, changed to string for nanoid
  type: 'OpenQuestionBlock';
  question: string;
  answer: string;
  lesson_phase: string; // New lesson_phase field
};

// Define a MultipleChoiceBlock type with a string id, question, options, correctAnswers, and lesson_phase
export type MultipleChoiceBlock = {
  id: string;   // Unique identifier, changed to string for nanoid
  type: 'MultipleChoiceBlock';
  question: string;
  options: string[];
  correctAnswers: boolean[];
  lesson_phase: string; // New lesson_phase field
};

// Define a union type for all block types, now with lesson_phase as a common property
export type LessonBlock = TextBlock | OpenQuestionBlock | MultipleChoiceBlock;

// Define the Lesson Phase which holds an array of blocks
export type LessonPhase = {
  phaseName: 'Introduction' | 'Instruction' | 'Practice' | 'Conclusion';
  blocks: LessonBlock[];
};
