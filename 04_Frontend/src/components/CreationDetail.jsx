import { useEffect } from "react";
import {
  X,
  Heart,
  Bookmark,
  Share2,
  Music2,
  FileText,
  Image,
  CalendarDays,
  UserRound,
} from "lucide-react";

function CreationDetail({
  item,
  onClose,
  isLiked,
  isSaved,
  onLike,
  onSave,
}) {
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  if (!item) return null;

  const formattedDate = item.publishedAt
    ? new Date(item.publishedAt).toLocaleDateString(undefined, {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Recently published";

  const TypeIcon =
    item.type === "Music"
      ? Music2
      : item.type === "Visual Art"
        ? Image
        : FileText;

  async function handleShare() {
    const shareData = {
      title: item.title,
      text: `Check out "${item.title}" by ${item.creator} on SONORA.`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(
          `${shareData.text} ${shareData.url}`
        );
        alert("Share text copied to clipboard.");
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Sharing failed:", error);
      }
    }
  }

  return (
    <div
      className="creation-detail-overlay"
      onClick={onClose}
      role="presentation"
    >
      <article
        className="creation-detail"
        role="dialog"
        aria-modal="true"
        aria-labelledby="creation-detail-title"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="creation-detail-header">
          <div className="detail-brand">
            <span className="detail-brand-mark">S.</span>
            <span>SONORA</span>
          </div>

          <button
            className="detail-close-button"
            onClick={onClose}
            aria-label="Close post"
          >
            <X size={21} />
          </button>
        </header>

        <div className="creation-detail-scroll">
          <div className={`detail-artwork ${item.color || "earth"}`}>
            {item.image ? (
              <img
  src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=1400&q=90`}
  alt={item.title}
/>
            ) : (
              <div className="detail-artwork-placeholder">
                <TypeIcon size={54} strokeWidth={1.2} />
                <span>{item.type}</span>
              </div>
            )}
          </div>

          <div className="creation-detail-content">
            <div className="detail-type">
              <TypeIcon size={15} />
              <span>{item.type}</span>
            </div>

            <h1 id="creation-detail-title">{item.title}</h1>

            <div className="detail-author">
              <div className={`detail-avatar ${item.color || "earth"}`}>
                {item.avatar || item.creator?.charAt(0)}
              </div>

              <div>
                <strong>{item.creator}</strong>
                <span>{item.handle}</span>
              </div>
            </div>

            <div className="detail-metadata">
              <span>
                <CalendarDays size={15} />
                {formattedDate}
              </span>
              <span>
                <Heart size={15} />
                {item.likes || 0} likes
              </span>
            </div>

            {item.description && (
              <p className="detail-description">
                {item.description}
              </p>
            )}

            <div className="detail-divider" />

            <section className="detail-full-content">
              <h2>The creation</h2>

              {item.content ? (
                <p>{item.content}</p>
              ) : (
                <p className="detail-missing-content">
                  The full content for this creation hasn't been
                  added yet.
                </p>
              )}
            </section>

            {item.type === "Music" && (
              <div className="detail-audio-notice">
                <Music2 size={20} />
                <div>
                  <strong>Audio experience</strong>
                  <p>
                    Audio playback will be available when SONORA's
                    media player is implemented.
                  </p>
                </div>
              </div>
            )}

            <div className="detail-divider" />

            <section className="detail-actions">
              <h2>Interact with this creation</h2>

              <div className="detail-action-buttons">
                <button
                  className={isLiked ? "active" : ""}
                  onClick={() => onLike(item.id)}
                >
                  <Heart
                    size={19}
                    fill={isLiked ? "currentColor" : "none"}
                  />
                  {isLiked ? "Liked" : "Like"}
                </button>

                <button
                  className={isSaved ? "active" : ""}
                  onClick={() => onSave(item.id)}
                >
                  <Bookmark
                    size={19}
                    fill={isSaved ? "currentColor" : "none"}
                  />
                  {isSaved ? "Saved" : "Save"}
                </button>

                <button onClick={handleShare}>
                  <Share2 size={19} />
                  Share
                </button>
              </div>
            </section>
          </div>
        </div>
      </article>
    </div>
  );
}

export default CreationDetail;
