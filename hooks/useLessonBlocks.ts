import { useState, useEffect } from 'react';
import { fetchBlocksFromSupabase, storeBlockInSupabase } from '../services/lessonService';
import { LessonBlock } from '@lessonTypes/lesson';

// Custom hook for managing lesson blocks
export const useLessonBlocks = () => {
  const [blocks, setBlocks] = useState<LessonBlock[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensure component is mounted

    const fetchBlocks = async () => {
      if (!isMounted) return; // Prevent fetching if component is not mounted
      const { data, error } = await fetchBlocksFromSupabase();
      if (data) setBlocks(data);
      setLoading(false);
    };

    fetchBlocks();
  }, [isMounted]); // Effect dependent on mounting state

  const addBlock = async (block: LessonBlock) => {
    const { data, error } = await storeBlockInSupabase(block);
    if (data) setBlocks([...blocks, block]);  // Update local state after storing in DB
  };

  return { blocks, addBlock, loading };
};
