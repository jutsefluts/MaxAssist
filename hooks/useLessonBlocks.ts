// hooks/useLessonBlocks.ts
import { useState, useEffect } from 'react';
import { fetchBlocksFromSupabase, storeBlockInSupabase } from '../services/lessonService';
import { LessonBlock } from '@lessonTypes/lesson';

// Custom hook for managing lesson blocks
export const useLessonBlocks = () => {
  const [blocks, setBlocks] = useState<LessonBlock[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch blocks from Supabase on component mount
  useEffect(() => {
    const fetchBlocks = async () => {
      const { data, error } = await fetchBlocksFromSupabase();
      if (data) setBlocks(data);
      setLoading(false);
    };

    fetchBlocks();
  }, []);

  // Add a new block and store it in Supabase
  const addBlock = async (block: LessonBlock) => {
    const { data, error } = await storeBlockInSupabase(block);
    if (data) setBlocks([...blocks, block]);  // Update local state after storing in DB
  };

  return { blocks, addBlock, loading };
};