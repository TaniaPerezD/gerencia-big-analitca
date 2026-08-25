import Reveal from "./Reveal";

export default function VideoEmbed({ title, youtubeId }) {
  return (
    <Reveal className="video-embed">
      <div className="video-frame">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <p className="video-caption">{title}</p>
    </Reveal>
  );
}
