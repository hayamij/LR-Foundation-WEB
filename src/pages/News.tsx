/**
 * News Page
 */

import Hero from '../components/ui/Hero';
import Section from '../components/ui/Section';
import { NewsCard } from '../components/features';
import { NEWS } from '../config/constants';

export default function News() {
  return (
    <>
      <Hero
        title="Tin Tức & Hoạt Động"
        description="Cập nhật những hoạt động mới nhất và câu chuyện truyền cảm hứng"
        image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200"
        overlay="dark"
        height="md"
      />

      <Section background="gray" padding="lg">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEWS.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
