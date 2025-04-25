import { useParams } from 'react-router-dom';

export default function ProjectPage() {
  const { slug } = useParams();
  const project = cards.find((c) => c.slug === slug);

  if (!project) return <div className="text-center text-xl mt-10">Project not found</div>;

  return (
    <div className="bg-white min-h-screen">
      <h1 className="text-5xl md:text-8xl font-bold w-full text-center py-20">
        {project.title}
      </h1>

      <div className="flex flex-wrap">
        {project.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${project.title} ${idx}`}
            className={`${
              // Conditional layout
              img.width > img.height
                ? 'w-full h-[60vh]'
                : 'w-1/2 h-[60vh]'
            } object-cover`}
          />
        ))}
      </div>
    </div>
  );
}
