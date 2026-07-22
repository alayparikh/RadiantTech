// Image with built-in placeholder support. When `placeholder` is set AND no real
// file has been dropped in yet, it renders a labeled navy block at the right
// aspect ratio. Swapping in a real photo later = remove the placeholder prop.
// Every prompt for these lives in docs/IMAGE-PROMPTS.md.
import './Image.css';

// Set of placeholder ids that still need a generated photo. Once the user drops
// the real file into public/img and updates the `src`, remove its id here.
// Real photos now exist for plc-panel, hmi-screen, field-service, wastewater,
// and ceo-portrait (scraped from the live site). Only these still want a
// generated image — see docs/IMAGE-PROMPTS.md.
const PENDING = new Set(['home-hero']);

export default function Image({
  src,
  alt,
  width,
  height,
  placeholder,
  className = '',
  eager = false,
  ...rest
}) {
  const ratio = width && height ? `${width} / ${height}` : undefined;

  if (placeholder && PENDING.has(placeholder)) {
    return (
      <div
        className={`img-placeholder ${className}`}
        style={{ aspectRatio: ratio }}
        role="img"
        aria-label={alt}
      >
        <span className="img-placeholder__grid" aria-hidden="true" />
        <span className="img-placeholder__label">
          <span className="img-placeholder__tag">Image</span>
          {alt}
          <span className="img-placeholder__meta">
            {placeholder} · {width}×{height}
          </span>
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={className}
      style={ratio ? { aspectRatio: ratio } : undefined}
      {...rest}
    />
  );
}
