import Image from './Image';
import Reveal from './Reveal';
import './TwoCol.css';

// Alternating image + text row. `reverse` swaps sides.
export default function TwoCol({
  image,
  imageAlt,
  imagePlaceholder,
  imgW = 640,
  imgH = 480,
  reverse = false,
  eyebrow,
  title,
  children,
}) {
  return (
    <div className={`twocol ${reverse ? 'twocol--reverse' : ''}`}>
      <Reveal className="twocol__media">
        <Image
          src={image}
          alt={imageAlt}
          width={imgW}
          height={imgH}
          placeholder={imagePlaceholder}
        />
      </Reveal>
      <Reveal className="twocol__body" delay={80}>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        {title && <h2>{title}</h2>}
        <div className="twocol__content">{children}</div>
      </Reveal>
    </div>
  );
}
