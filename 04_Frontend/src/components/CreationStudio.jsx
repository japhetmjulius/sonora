
import { useState } from "react";
import {
  X,
  Eye,
  PenLine,
  Sparkles,
  Send,
  ChevronDown,
} from "lucide-react";

const disciplines = [
  "Poetry",
  "Music",
  "Visual Art",
  "Writing",
  "Podcasts",
];

function CreationStudio({ onClose, onPublish }) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Poetry");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [error, setError] = useState("");

  function handlePublish(event) {
    event.preventDefault();

    if (!title.trim()) {
      setError("Give your creation a title first.");
      return;
    }

    if (!content.trim()) {
      setError("Your creation needs some content.");
      return;
    }

    onPublish({
      id: `user-${Date.now()}`,
      type,
      title: title.trim(),
      description: description.trim() || content.trim().slice(0, 140),
      content: content.trim(),
      creator: "You",
      handle: "@you",
      likes: 0,
      publishedAt: new Date().toISOString(),
      time: type === "Music" ? "Audio coming soon" : "Just published",
      featured: false,
      image: "",
      color: "earth",
      avatar: "Y",
    });

    onClose();
  }

  return (
    <div
      className="studio-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="studio-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="studio-title"
      >
        <header className="studio-header">
          <div className="studio-brand">
            <span className="studio-icon">
              <Sparkles size={19} />
            </span>
            <div>
              <span className="studio-eyebrow">SONORA CREATIVE TOOLS</span>
              <h2 id="studio-title">Creation Studio</h2>
            </div>
          </div>

          <button
            type="button"
            className="studio-close"
            onClick={onClose}
            aria-label="Close Creation Studio"
          >
            <X size={21} />
          </button>
        </header>

        <div className="studio-body">
          <div className="studio-intro">
            <span className="eyebrow">
              <PenLine size={14} /> MAKE SOMETHING THAT MATTERS
            </span>
            <h3>Your idea deserves <span>a place.</span></h3>
            <p>
              Shape it, give it a name, and share it with the SONORA community.
            </p>
          </div>

          <form onSubmit={handlePublish} className="studio-form">
            <label className="studio-field">
              <span>Creative discipline</span>
              <div className="studio-select-wrap">
                <select
                  value={type}
                  onChange={(event) => setType(event.target.value)}
                >
                  {disciplines.map((discipline) => (
                    <option key={discipline} value={discipline}>
                      {discipline}
                    </option>
                  ))}
                </select>
                <ChevronDown size={16} />
              </div>
            </label>

            <label className="studio-field">
              <span>Title <span className="studio-required">*</span></span>
              <input
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                  setError("");
                }}
                maxLength={100}
                placeholder="Give your creation a name"
                required
              />
              <small>{title.length}/100</small>
            </label>

            <label className="studio-field">
              <span>Short description</span>
              <input
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                maxLength={180}
                placeholder="What should people know about it?"
              />
              <small>{description.length}/180</small>
            </label>

            <label className="studio-field">
              <span>
                Your creation <span className="studio-required">*</span>
              </span>
              <textarea
                value={content}
                onChange={(event) => {
                  setContent(event.target.value);
                  setError("");
                }}
                rows={8}
                maxLength={10000}
                placeholder={
                  type === "Poetry"
                    ? "Let the words find their rhythm..."
                    : type === "Music"
                      ? "Describe your track, its mood, or the story behind it..."
                      : type === "Visual Art"
                        ? "Describe your artwork and what inspired it..."
                        : type === "Podcasts"
                          ? "Introduce your episode, its topic, and its story..."
                          : "Start writing here..."
                }
                required
              />
              <small>{content.length}/10000</small>
            </label>

            {error && (
              <p className="studio-error" role="alert">
                {error}
              </p>
            )}

            {showPreview && (
              <div className="studio-preview">
                <div className="studio-preview-label">
                  <Eye size={15} /> PREVIEW
                </div>
                <span className="studio-preview-category">{type}</span>
                <h3>{title.trim() || "Your creation title"}</h3>
                <p className="studio-preview-description">
                  {description.trim() || "Your description will appear here."}
                </p>
                <div className="studio-preview-content">
                  {content.trim() || "Your content will appear here."}
                </div>
                <span className="studio-preview-author">By You · @you</span>
              </div>
            )}

            <footer className="studio-actions">
              <button
                type="button"
                className="button button-ghost"
                onClick={() => setShowPreview((value) => !value)}
              >
                <Eye size={16} />
                {showPreview ? "Hide preview" : "Preview"}
              </button>

              <button type="submit" className="button button-gold">
                <Send size={16} /> Publish creation
              </button>
            </footer>

            <p className="studio-note">
              Your creation will be saved in this browser. Shared publishing
              will require a SONORA account and backend.
            </p>
          </form>
        </div>
      ```
  </section>
</div>

);
}


export default CreationStudio;
