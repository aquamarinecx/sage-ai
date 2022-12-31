import { supabase } from '../utils/supabase';
import Link from 'next/link';

const Home = ({ lessons }) => {
  return (
    <div className="w-full max-w-3xl mx-auto my-16 px-2">
      {lessons.map(lesson => (
        <Link key={lesson.id} href={`/${lesson.id}`}>
          <h2 className="p-8 h-40 mb-4 rounded shadow text-xl flex">
            {lesson.title}
          </h2>
        </Link>
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const { data: lessons } = await supabase.from('lesson').select('*');

  return {
    props: {
      lessons,
    },
  }
}

export default Home;
