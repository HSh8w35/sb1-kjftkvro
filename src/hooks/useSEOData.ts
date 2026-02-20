import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface SEOData {
  title: string;
  description: string;
  keywords: string;
}

export function useSEOData(pageKey: string): SEOData | null {
  const [seoData, setSeoData] = useState<SEOData | null>(null);

  useEffect(() => {
    async function fetchSEOData() {
      const [metaResult, keywordsResult] = await Promise.all([
        supabase
          .from('page_meta')
          .select('meta_title, meta_description')
          .eq('page_key', pageKey)
          .eq('is_active', true)
          .maybeSingle(),
        supabase
          .from('seo_keywords')
          .select('keyword')
          .eq('page', pageKey)
          .eq('is_active', true)
          .order('display_order')
      ]);

      if (metaResult.data && keywordsResult.data) {
        const keywords = keywordsResult.data.map(k => k.keyword).join(', ');
        setSeoData({
          title: metaResult.data.meta_title,
          description: metaResult.data.meta_description,
          keywords
        });
      }
    }

    fetchSEOData();
  }, [pageKey]);

  return seoData;
}
