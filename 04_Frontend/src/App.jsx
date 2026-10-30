
import CreationStudio from "./components/CreationStudio";
import "./App.css";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  AudioLines,
  Search,
  Bell,
  Plus,
  Compass,
  Heart,
  Bookmark,
  Headphones,
  PenTool,
  Palette,
  BookOpen,
  Radio,
  ArrowUpRight,
  Menu,
  X,
  Sparkles,
  Play,
  Check,
} from "lucide-react";
import "./index.css";
import CreationDetail from "./components/CreationDetail";

const categories = [
  { name: "Everything", icon: Compass },
  { name: "Poetry", icon: PenTool },
  { name: "Music", icon: Headphones },
  { name: "Visual Art", icon: Palette },
  { name: "Writing", icon: BookOpen },
  { name: "Podcasts", icon: Radio },
];

const creations = [
  {
    id: 1,
    type: "Poetry",
    title: "The Things We Never Said",
    creator: "Amara Wanjiku",
    handle: "@amarawrites",
    likes: 248,
    publishedAt: "2026-10-20T09:00:00Z",
    time: "4 min read",
    featured: true,
    image: "photo-1470252649378-9c29740c9fa8",
    color: "sunset",
    avatar: "A",
    description:
      "Some silences are louder than every word we could have spoken.",
      content: `There are conversations that never happen.

Words that sit behind our teeth for years, waiting for a moment that never arrives. Apologies that become memories. Questions that grow old without answers.

Sometimes silence is a choice. Sometimes it is fear wearing the clothes of patience.

I used to think that everything left unsaid would eventually find its way out. That time would soften the edges, that distance would make the truth easier to carry.

But some things remain.

They live in familiar songs, in streets we avoid, in the strange pause before saying someone's name.

Perhaps growing up is learning that not every story gets an ending.

And perhaps peace begins when we stop waiting for one.`,
  },
  {
    id: 2,
    type: "Music",
    title: "Midnight in Nairobi",
    creator: "Kito Sounds",
    handle: "@kitosounds",
    likes: 182,
    publishedAt: "2026-10-22T08:30:00Z",
    time: "3:42",
    featured: true,
    image: "photo-1519608487953-e999c86e7455",
    color: "night",
    avatar: "K",
    description: "A late-night instrumental for the long way home.",
    content: `Midnight in Nairobi.

The city changes its voice after dark.

Matatus disappear from the busiest roads, streetlights paint the pavements gold, and somewhere in the distance a train reminds you that the world is still moving.

This instrumental was built around that feeling.

A slow introduction, warm atmospheric textures, deep bass, and a rhythm that feels like driving through an almost-empty city with nowhere particular to be.

For the night thinkers.
For the long journeys.
For everyone who finds a little clarity when the rest of the world gets quiet.

Put on your headphones and take the long way home.`,
  },
  {
    id: 3,
    type: "Visual Art",
    title: "Fragments of Gold",
    creator: "Nia Okafor",
    handle: "@nia.creates",
    likes: 316,
    publishedAt: "2026-10-18T12:00:00Z",
    time: "Digital art",
    featured: false,
    image: "photo-1541961017774-22349e4a1262",
    color: "art",
    avatar: "N",
    description:
      "Finding beauty in the pieces we thought we had lost.",
      content: `Fragments of Gold is an exploration of beauty through imperfection.

The composition began with a simple question:

What if the pieces we try so hard to hide are actually the most interesting parts of us?

The layered textures represent memory, identity, and the things we carry long after their original meaning has faded.

Gold appears throughout the work as a symbol of transformation. Not because everything broken becomes beautiful, but because broken things still deserve to be seen.

There is no perfect arrangement here.

Only fragments, finding their place.`,
  },
  {
    id: 4,
    type: "Writing",
    title: "A City That Remembers",
    creator: "Eli Mwangi",
    handle: "@elimwangi",
    likes: 94,
    publishedAt: "2026-10-21T14:00:00Z",
    time: "7 min read",
    featured: false,
    image: "photo-1519501025264-65ba15a82390",
    color: "city",
    avatar: "E",
    description:
      "Every street has a story. Not every story wants to be told.",
      content: `Every city has two histories.

The one written in textbooks, monuments, and official records.

And the one carried by the people who live there.

A City That Remembers follows the second.

It follows the shopkeeper who has watched generations grow up, the old buildings that survived redevelopment, and the streets where people still remember a different version of home.

Cities are constantly rebuilding themselves. New buildings rise, familiar businesses disappear, and entire neighbourhoods change their names.

But memory is stubborn.

It remains in conversations, photographs, family stories, and places that mean more than their physical appearance suggests.

Perhaps a city is not simply where we live.

Perhaps it is everything we remember about living there.`,
  },
  {
    id: 5,
    type: "Music",
    title: "Soft Landing",
    creator: "Maya Blue",
    handle: "@mayablue",
    likes: 127,
    publishedAt: "2026-10-22T11:00:00Z",
    time: "4:08",
    featured: false,
    image: "photo-1516280440614-37939bbacd81",
    color: "blue",
    avatar: "M",
    description:
      "For the days when making it through is enough.",
      content: `Some days do not need a soundtrack for victory.

They need something gentle.

Soft Landing is a musical reflection on slowing down, accepting uncertainty, and allowing yourself to exist without constantly measuring your progress.

Built around warm keys, restrained percussion, and a spacious atmosphere, this piece leaves room for the listener to breathe.

You do not have to turn every difficult day into a lesson.

You do not have to make every struggle meaningful.

Sometimes getting through the day is enough.

And tomorrow can wait until tomorrow.`,
  },
  {
    id: 6,
    type: "Poetry",
    title: "Instructions for Beginning Again",
    creator: "Tari Njeri",
    handle: "@tarinjeri",
    likes: 203,
    publishedAt: "2026-10-19T10:00:00Z",
    time: "5 min read",
    featured: false,
    image: "photo-1470770841072-f978cf4d019e",
    color: "earth",
    avatar: "T",
    description:
      "First, forgive the version of you that was only surviving.",
      content: `First, forgive the version of you that was only surviving.

They did not have the answers.
They did not always make the right decisions.
They were working with what they had.

Second, stop treating every unfinished chapter as evidence of failure.

Some things take longer because you are learning how to carry them properly.

Third, begin small.

Make the call.
Open the book.
Clean the room.
Write the first sentence.
Take the walk.

Do not wait until you feel like an entirely different person.

You become that person through the ordinary decisions you make today.

And finally, remember this:

Beginning again does not mean starting from nothing.

You are bringing everything you learned with you.`,
  },
];

const creators = [
  {
    name: "Amara Wanjiku",
    handle: "@amarawrites",
    field: "Poet & storyteller",
    category: "Poetry",
    bio: "Turning quiet feelings into words that stay with you.",
    avatar: "A",
    color: "avatar-one",
  },
  {
    name: "Kito Sounds",
    handle: "@kitosounds",
    field: "Producer & musician",
    category: "Music",
    bio:
      "Building soundscapes for late nights, long journeys, and everything in between.",
    avatar: "K",
    color: "avatar-two",
  },
  {
    name: "Nia Okafor",
    handle: "@nia.creates",
    field: "Visual artist",
    category: "Visual Art",
    bio:
      "Exploring memory, identity, and beauty through visual storytelling.",
    avatar: "N",
    color: "avatar-three",
  },
];

function App() {
  const [category, setCategory] = useState("Everything");
  const [query, setQuery] = useState("");
  const [selectedCreator, setSelectedCreator] = useState(null);
  const [selectedCreation, setSelectedCreation] = useState(null);
  const creatorDetailRef = useRef(null);

  const [liked, setLiked] = useState(() => {
  try {
    const stored = JSON.parse(localStorage.getItem("sonora:liked") || "[]");
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
});

const [comments, setComments] = useState(() => {
  try {
    const stored = JSON.parse(localStorage.getItem("sonora:comments") || "[]");
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
});

  const [userCreations, setUserCreations] = useState(() => {
    try {
      const stored = JSON.parse(
        localStorage.getItem("sonora:creations") || "[]"
      );

      return Array.isArray(stored) ? stored : [];
    } catch {
      return [];
    }
  });

  const [studioOpen, setStudioOpen] = useState(false);

  const [saved, setSaved] = useState(() => {
    try {
      const stored = JSON.parse(
        localStorage.getItem("sonora:saved") || "[]"
      );

      return Array.isArray(stored) ? stored : [];
    } catch {
      return [];
    }
  });

  const [following, setFollowing] = useState(() => {
    try {
      const stored = JSON.parse(
        localStorage.getItem("sonora:following") || "[]"
      );

      return Array.isArray(stored) ? stored : [];
    } catch {
      return [];
    }
  });

  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeTab, setActiveTab] = useState("For you");
  const [creatorQuery, setCreatorQuery] = useState("");
  const [creatorCategory, setCreatorCategory] =
    useState("Everything");
  const [creatorView, setCreatorView] =
    useState("All Creators");

  // Keep the creation collection stable between renders.
  const allCreations = useMemo(
    () => [...userCreations, ...creations],
    [userCreations]
  );

  // Automatically bring the selected creator profile into view.
  useEffect(() => {
    if (!selectedCreator) return;

    const frame = requestAnimationFrame(() => {
      creatorDetailRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [selectedCreator]);

  // Save published creations in the browser.
  useEffect(() => {
    try {
      localStorage.setItem(
        "sonora:creations",
        JSON.stringify(userCreations)
      );
    } catch (error) {
      console.error(
        "Could not save published creations:",
        error
      );
    }
  }, [userCreations]);

  // Save bookmarks in the browser.
  useEffect(() => {
    try {
      localStorage.setItem(
        "sonora:saved",
        JSON.stringify(saved)
      );
    } catch (error) {
      console.error(
        "Could not save creations in this browser:",
        error
      );
    }
  }, [saved]);

  // Save followed creators in the browser.
  useEffect(() => {
    try {
      localStorage.setItem(
        "sonora:following",
        JSON.stringify(following)
      );
    } catch (error) {
      console.error(
        "Could not save followed creators:",
        error
      );
    }
  }, [following]);

  //save liked status.
  useEffect(() => {
  localStorage.setItem("sonora:liked", JSON.stringify(liked));
}, [liked]);

//save comments.
useEffect(() => {
  localStorage.setItem("sonora:comments", JSON.stringify(comments));
}, [comments]);

function openCreatorProfile(name, handle) {
  const creator = creatorDirectory.find(
    (person) =>
      person.name === name || person.handle === handle
  );

  if (creator) {
    setSelectedCreator(creator);
    setSelectedCreation(null);
    return;
  }

  setSelectedCreator({
    name,
    handle: handle || "",
    field: "Independent creator",
    category: "Writing",
    bio: "A member of the SONORA creative community.",
    avatar: name?.charAt(0) || "?",
    color: "avatar-one",
  });

  setSelectedCreation(null);
}

  function handlePublish(creation) {
    setUserCreations((previousCreations) => [
      creation,
      ...previousCreations,
    ]);

    setStudioOpen(false);
  }

  function toggleLike(id) {
    setLiked((old) =>
      old.includes(id)
        ? old.filter((n) => n !== id)
        : [...old, id]
    );
  }

  function toggleSave(id) {
    setSaved((old) =>
      old.includes(id)
        ? old.filter((n) => n !== id)
        : [...old, id]
    );
  }

  function toggleFollow(name) {
    setFollowing((old) =>
      old.includes(name)
        ? old.filter((n) => n !== name)
        : [...old, name]
    );
  }

  function addComment(creationId, text) {
  const cleanText = text.trim();

  if (!cleanText) return;

  const newComment = {
    id: crypto.randomUUID(),
    creationId,
    creator: "You",
    handle: "@you",
    text: cleanText,
    likes: [],
    createdAt: new Date().toISOString(),
    replies: [],
  };

  setComments((previous) => [newComment, ...previous]);
}

function addReply(commentId, text) {
  const cleanText = text.trim();

  if (!cleanText) return;

  const newReply = {
    id: crypto.randomUUID(),
    creator: "You",
    handle: "@you",
    text: cleanText,
    likes: [],
    createdAt: new Date().toISOString(),
  };

  setComments((previous) =>
    previous.map((comment) =>
      comment.id === commentId
        ? {
            ...comment,
            replies: [...(comment.replies || []), newReply],
          }
        : comment
    )
  );
}

function toggleCommentLike(commentId, replyId = null) {
  setComments((previous) =>
    previous.map((comment) => {
      if (comment.id !== commentId) return comment;

      if (!replyId) {
        const alreadyLiked = comment.likes.includes("you");

        return {
          ...comment,
          likes: alreadyLiked
            ? comment.likes.filter((like) => like !== "you")
            : [...comment.likes, "you"],
        };
      }

      return {
        ...comment,
        replies: comment.replies.map((reply) => {
          if (reply.id !== replyId) return reply;

          const alreadyLiked = reply.likes.includes("you");

          return {
            ...reply,
            likes: alreadyLiked
              ? reply.likes.filter((like) => like !== "you")
              : [...reply.likes, "you"],
          };
        }),
      };
    })
  );
}

function deleteComment(commentId) {
  setComments((previous) =>
    previous.filter((comment) => comment.id !== commentId)
  );
}

function deleteReply(commentId, replyId) {
  setComments((previous) =>
    previous.map((comment) =>
      comment.id === commentId
        ? {
            ...comment,
            replies: comment.replies.filter(
              (reply) => reply.id !== replyId
            ),
          }
        : comment
    )
  );
}

  const filtered = useMemo(() => {
    const term = query.toLowerCase().trim();

    const results = allCreations.filter((item) => {
      const matchesCategory =
        category === "Everything" ||
        item.type === category;

      const matchesQuery =
        !term ||
        [
          item.title,
          item.creator,
          item.type,
          item.description,
        ].some((value) =>
          String(value ?? "").toLowerCase().includes(term)
        );

      const matchesSaved =
        activeTab !== "Saved" ||
        saved.includes(item.id);

      return (
        matchesCategory &&
        matchesQuery &&
        matchesSaved
      );
    });

    if (activeTab === "Trending") {
      const now = Date.now();

      const trendingScore = (item) => {
        const publishedTime = new Date(
          item.publishedAt
        ).getTime();

        const ageHours = Number.isFinite(publishedTime)
          ? Math.max(0, (now - publishedTime) / 3_600_000)
          : 0;

        const recencyScore = 100 / (1 + ageHours / 24);
        const likeCount =
          (Number(item.likes) || 0) +
          Number(liked.includes(item.id));
        const featuredBonus = item.featured ? 5 : 0;

        return likeCount + recencyScore + featuredBonus;
      };

      results.sort(
        (a, b) => trendingScore(b) - trendingScore(a)
      );
    } else if (activeTab === "Latest") {
      results.sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() -
          new Date(a.publishedAt).getTime()
      );
    }

    return results;
  }, [
    category,
    query,
    activeTab,
    liked,
    saved,
    allCreations,
  ]);

  // Include the user's profile after they publish their first creation.
  const creatorDirectory = useMemo(() => {
    if (userCreations.length === 0) {
      return creators;
    }

    return [
      {
        name: "You",
        handle: "@you",
        field: "Independent creator",
        category: userCreations[0]?.type || "Writing",
        bio:
          "Sharing original work and exploring ideas on SONORA.",
        avatar: "Y",
        color: "avatar-one",
      },
      ...creators,
    ];
  }, [userCreations]);

  const filteredCreators = useMemo(() => {
    const term = creatorQuery.toLowerCase().trim();

    return creatorDirectory.filter((creator) => {
      const matchesQuery =
        !term ||
        [
          creator.name,
          creator.handle,
          creator.field,
          creator.category,
        ].some((value) =>
          String(value ?? "").toLowerCase().includes(term)
        );

      const matchesCategory =
        creatorCategory === "Everything" ||
        creator.category === creatorCategory;

      const matchesView =
        creatorView === "All Creators" ||
        following.includes(creator.name);

      return (
        matchesQuery &&
        matchesCategory &&
        matchesView
      );
    });
  }, [
    creatorDirectory,
    creatorQuery,
    creatorCategory,
    creatorView,
    following,
  ]);

  const selectedCreatorWorks = selectedCreator
    ? allCreations.filter(
        (item) => item.creator === selectedCreator.name
      )
    : [];

  const selectedCreatorLikes = selectedCreatorWorks.reduce(
    (total, item) =>
      total + (Number(item.likes) || 0),
    0
  );

  return (
    <div className="app-shell">
      <header className="topbar">
        <a href="#home" className="brand">
          <span className="brand-mark">
            <AudioLines size={23} />
          </span>
          <span>
            SONORA<span className="brand-dot">.</span>
          </span>
        </a>

        <nav
          className={`main-nav ${
            mobileMenu ? "nav-open" : ""
          }`}
        >
          <a
            className="nav-link active"
            href="#discover"
            onClick={() => setMobileMenu(false)}
          >
            Discover
          </a>
          <a
            className="nav-link"
            href="#creators"
            onClick={() => setMobileMenu(false)}
          >
            Creators
          </a>
          <a
            className="nav-link"
            href="#about"
            onClick={() => setMobileMenu(false)}
          >
            Our story
          </a>
        </nav>

        <div className="top-actions">
          <label className="search-box">
            <Search size={17} />
            <input
              aria-label="Search creations"
              placeholder="Search anything..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <kbd>⌘ K</kbd>
          </label>

          <button
            className="icon-button notification"
            aria-label="Notifications"
          >
            <Bell size={19} />
            <span />
          </button>

          <button
            className="button button-gold button-small"
            onClick={() => setStudioOpen(true)}
          >
            <Plus size={17} /> Create
          </button>

          <button
            className="mobile-toggle icon-button"
            aria-label="Toggle menu"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-glow" />

          <div className="hero-copy">
            <div className="eyebrow">
              <Sparkles size={14} />
              A HOME FOR CREATIVE EXPRESSION
            </div>

            <h1>
              Your art.
              <br />
              Your voice.
              <br />
              <span>Your universe.</span>
            </h1>

            <p className="hero-description">
              Discover the people making things that move you.
              A place for the unheard, the curious, and the
              endlessly creative.
            </p>

            <div className="hero-actions">
              <a
                className="button button-gold"
                href="#discover"
              >
                Explore creations
                <ArrowUpRight size={17} />
              </a>
              <a
                className="button button-ghost"
                href="#creators"
              >
                Meet the creators
              </a>
            </div>

            <div className="hero-proof">
              <div className="avatar-stack">
                <span className="mini-avatar a1">A</span>
                <span className="mini-avatar a2">K</span>
                <span className="mini-avatar a3">N</span>
                <span className="mini-avatar a4">M</span>
              </div>
              <p>
                <strong>A new world of creativity.</strong>
                <br />
                <span>
                  Made for creators. Open to everyone.
                </span>
              </p>
            </div>
          </div>

          <div className="hero-art">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="hero-image hero-image-back" />

            <div className="hero-image hero-image-front">
              <div className="hero-image-overlay" />
              <div className="hero-art-label">
                <span className="live-dot" />
                THE ART OF BEING HUMAN
              </div>
              <div className="hero-art-caption">
                <span>FEATURED CREATION</span>
                <h3>Between the lines.</h3>
                <p>Words by Amara Wanjiku</p>
              </div>
            </div>

            <div className="floating-note note-top">
              <AudioLines size={17} />
              <span>Sound that stays.</span>
            </div>

            <div className="floating-note note-bottom">
              <span className="note-star">✳</span>
              <span>Made with feeling.</span>
            </div>
          </div>

          <div className="hero-bottom-label">
            <span>01 / 04</span>
            <span className="hero-line" />
            <span>EXPLORE THE UNEXPECTED</span>
          </div>
        </section>

        <section
          className="discovery section-wrap"
          id="discover"
        >
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                THE CREATIVE UNIVERSE
              </div>
              <h2>
                Find your <span>next feeling.</span>
              </h2>
              <p>
                Fresh perspectives, made by real people.
              </p>
            </div>
            <a className="text-link" href="#creations">
              Explore all <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="category-row">
            {categories.map(({ name, icon: Icon }) => (
              <button
                key={name}
                className={`category-pill ${
                  category === name ? "selected" : ""
                }`}
                onClick={() => setCategory(name)}
              >
                <Icon size={16} /> {name}
              </button>
            ))}
          </div>

          <div className="feed-toolbar" id="creations">
            <div className="feed-tabs">
              {[
                "For you",
                "Trending",
                "Latest",
                "Saved",
              ].map((tab) => (
                <button
                  key={tab}
                  className={
                    activeTab === tab
                      ? "feed-tab active-tab"
                      : "feed-tab"
                  }
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <span className="results-label">
              {filtered.length} creations
            </span>
          </div>

          {filtered.length > 0 ? (
            <div className="creation-grid">
              {filtered.map((item) => (
                <article
  className="creation-card"
  key={item.id}
  onClick={() => setSelectedCreation(item)}
  onKeyDown={(event) => {
    if (
      event.target === event.currentTarget &&
      (event.key === "Enter" || event.key === " ")
    ) {
      event.preventDefault();
      setSelectedCreation(item);
    }
  }}
  tabIndex={0}
  aria-label={`Open ${item.title} by ${item.creator}`}
>
                
                  <div
                    className={`creation-image ${item.color}`}
                    style={{
                      backgroundImage: `url(https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=900&q=85)`,
                    }}
                  >
                    <span className="type-tag">
                      {item.type}
                    </span>

                    {item.type === "Music" && (
                      <button
                        className="play-button"
                        aria-label={`Play ${item.title}`}
                        onClick={(event) => {
  event.stopPropagation();
  alert(
    "Audio playback will be added when media hosting is connected."
  );
}}
                      >
                        <Play
                          size={19}
                          fill="currentColor"
                        />
                      </button>
                    )}

                    <button
                      className={`save-button ${
                        saved.includes(item.id)
                          ? "is-saved"
                          : ""
                      }`}
                      aria-label={
                        saved.includes(item.id)
                          ? "Remove saved creation"
                          : "Save creation"
                      }
                      aria-pressed={saved.includes(item.id)}
                      title={
                        saved.includes(item.id)
                          ? "Remove from saved"
                          : "Save creation"
                      }
                      onClick={(event)  => {
                        event.stopPropagation();
                      toggleSave(item.id)
                      }}
                    >
                      <Bookmark
                        size={17}
                        fill={
                          saved.includes(item.id)
                            ? "currentColor"
                            : "none"
                        }
                      />
                    </button>

                    <button
                      className={`like-button ${
                        liked.includes(item.id)
                          ? "is-liked"
                          : ""
                      }`}
                      aria-label={
                        liked.includes(item.id)
                          ? "Unlike creation"
                          : "Like creation"
                      }
                      aria-pressed={liked.includes(item.id)}
                      onClick={(event) => { 
                      event.stopPropagation();
                      toggleLike(item.id)
                      }}
                    >
                      <Heart
                        size={17}
                        fill={
                          liked.includes(item.id)
                            ? "currentColor"
                            : "none"
                        }
                      />
                    </button>

                    {item.featured && (
                      <span className="featured-tag">
                        <Sparkles size={12} /> FEATURED
                      </span>
                    )}
                  </div>

                  <div className="creation-body">
                    <h3>{item.title}</h3>
                    <p className="creation-description">
                      {item.description}
                    </p>

                    <div className="creation-footer">
                      <div className="creator-mini">
                        <span
                          className={`creator-avatar ${item.color}`}
                        >
                          {item.avatar}
                        </span>
                        <div>
                          <strong>{item.creator}</strong>
                          <span>{item.handle}</span>
                        </div>
                      </div>

                      <div className="creation-stats">
                        <Heart size={14} />
                        {item.likes +
                          Number(liked.includes(item.id))}
                        <span>·</span>
                        {item.time}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <Search size={28} />
              <h3>
                {activeTab === "Saved"
                  ? "No saved creations yet"
                  : "No creations found"}
              </h3>
              <p>
                {activeTab === "Saved"
                  ? "Bookmark creations you love and they will appear here."
                  : "Try a different search or category."}
              </p>
              <button
                className="button button-ghost"
                onClick={() => {
                  setQuery("");
                  setCategory("Everything");
                  setActiveTab("For you");
                }}
              >
                {activeTab === "Saved"
                  ? "Explore creations"
                  : "Clear filters"}
              </button>
            </div>
          )}
        </section>

        <section
          className="creator-section"
          id="creators"
        >
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <div className="eyebrow">
                  PEOPLE BEHIND THE MAGIC
                </div>
                <h2>
                  Meet the <span>makers.</span>
                </h2>
                <p>
                  Every great creation starts with a human.
                </p>
              </div>
              <a
                className="text-link"
                href="#creators"
              >
                Discover creators
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="creator-discovery">
              <div className="creator-search">
                <Search size={17} />
                <input
                  type="search"
                  value={creatorQuery}
                  onChange={(e) =>
                    setCreatorQuery(e.target.value)
                  }
                  placeholder="Search creators, handles, or disciplines..."
                  aria-label="Search creators"
                />
              </div>

              <div className="creator-filters">
                <div className="creator-category-filters">
                  {[
                    "Everything",
                    "Poetry",
                    "Music",
                    "Visual Art",
                    "Writing",
                  ].map((creatorCategoryOption) => (
                    <button
                      key={creatorCategoryOption}
                      className={`creator-filter ${
                        creatorCategory ===
                        creatorCategoryOption
                          ? "active"
                          : ""
                      }`}
                      onClick={() =>
                        setCreatorCategory(
                          creatorCategoryOption
                        )
                      }
                    >
                      {creatorCategoryOption}
                    </button>
                  ))}
                </div>

                <div className="creator-view-filters">
                  {[
                    "All Creators",
                    "Following",
                  ].map((view) => (
                    <button
                      key={view}
                      className={`creator-filter ${
                        creatorView === view
                          ? "active"
                          : ""
                      }`}
                      onClick={() => setCreatorView(view)}
                    >
                      {view}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {selectedCreator && (
              <div
                className="creator-detail"
                ref={creatorDetailRef}
                tabIndex={-1}
                aria-label={`${selectedCreator.name} profile`}
              >
                <button
                  className="button button-ghost creator-back-button"
                  onClick={() =>
                    setSelectedCreator(null)
                  }
                >
                  ← Back to creators
                </button>

                <div className="creator-detail-header">
                  <div
                    className={`creator-profile-avatar ${selectedCreator.color}`}
                  >
                    {selectedCreator.avatar}
                  </div>

                  <div>
                    <h3>{selectedCreator.name}</h3>
                    <p>{selectedCreator.handle}</p>
                    <span>{selectedCreator.field}</span>
                  </div>

                  <button
                    className={`follow-button ${
                      following.includes(selectedCreator.name)
                        ? "following"
                        : ""
                    }`}
                    onClick={() =>
                      toggleFollow(selectedCreator.name)
                    }
                  >
                    {following.includes(
                      selectedCreator.name
                    ) ? (
                      <>
                        <Check size={15} /> Following
                      </>
                    ) : (
                      <>
                        <Plus size={15} /> Follow
                      </>
                    )}
                  </button>
                </div>

                <p className="creator-bio">
                  {selectedCreator.bio}
                </p>

                <div
                  className="creator-stats"
                  aria-label="Creator statistics"
                >
                  <span>
                    <strong>
                      {selectedCreatorWorks.length}
                    </strong>{" "}
                    {selectedCreatorWorks.length === 1
                      ? "creation"
                      : "creations"}
                  </span>

                  <span>
                    <strong>{selectedCreatorLikes}</strong>{" "}
                    likes across published work
                  </span>
                </div>

                <h4>Creations</h4>

                <div className="creator-work-list">
                  {selectedCreatorWorks.map((item) => (
                    <article
                      className="creator-work-item"
                      key={item.id}
                    >
                      <div>
                        <span>{item.type}</span>
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                      </div>

                      <span className="creator-work-likes">
                        <Heart size={14} />
                        {item.likes}
                      </span>
                    </article>
                  ))}

                  {selectedCreatorWorks.length === 0 && (
                    <p>
                      This creator hasn't published any
                      creations yet.
                    </p>
                  )}
                </div>
              </div>
            )}

            <div className="creator-grid">
              {filteredCreators.length === 0 && (
                <div className="creator-empty">
                  <Search size={24} />
                  <h3>No creators found</h3>
                  <p>
                    Try another search or change your filters
                    to discover more people.
                  </p>
                  <button
                    className="creator-filter active"
                    onClick={() => {
                      setCreatorQuery("");
                      setCreatorCategory("Everything");
                      setCreatorView("All Creators");
                    }}
                  >
                    Clear filters
                  </button>
                </div>
              )}

              {filteredCreators.map((creator) => {
                const isFollowing = following.includes(
                  creator.name
                );

                return (
                  <article
                    className="creator-card"
                    key={creator.name}
                  >
                    <div
                      className={`creator-cover ${creator.color}`}
                    >
                      <Sparkles size={19} />
                    </div>

                    <div
                      className={`creator-profile-avatar ${creator.color}`}
                    >
                      {creator.avatar}
                    </div>

                    <div className="creator-info">
                      <button
                        className="creator-name-button"
                        onClick={() =>
                          setSelectedCreator(creator)
                        }
                        aria-label={`View ${creator.name}'s profile`}
                      >
                        {creator.name}
                      </button>
                      <p>{creator.handle}</p>
                      <span>{creator.field}</span>
                    </div>

                    <button
                      className={`follow-button ${
                        isFollowing ? "following" : ""
                      }`}
                      onClick={() =>
                        toggleFollow(creator.name)
                      }
                    >
                      {isFollowing ? (
                        <>
                          <Check size={15} /> Following
                        </>
                      ) : (
                        <>
                          <Plus size={15} /> Follow
                        </>
                      )}
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="join-section" id="about">
          <div className="join-glow" />

          <div className="join-content">
            <div className="eyebrow">
              <Sparkles size={14} /> YOUR PEOPLE ARE HERE
            </div>

            <h2>
              There is room
              <br />
              for <span>your voice.</span>
            </h2>

            <p>
              Start sharing what you make. Find people who feel
              what you feel. Be part of something still becoming.
            </p>

            <button
              className="button button-gold"
              onClick={() =>
                alert(
                  "Creator registration will be available in a future version."
                )
              }
            >
              Find your place
              <ArrowUpRight size={17} />
            </button>
          </div>

          <div className="join-decoration">
            <AudioLines size={100} strokeWidth={0.8} />
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="brand">
          <span className="brand-mark">
            <AudioLines size={20} />
          </span>
          <span>
            SONORA<span className="brand-dot">.</span>
          </span>
        </a>

        <p>A home for creative expression.</p>
        <span className="footer-copy">
          © 2026 SONORA · BUILT FOR THE FEELING
        </span>
      </footer>

      {selectedCreation && (
  <CreationDetail
    item={selectedCreation}
    onClose={() => setSelectedCreation(null)}
    isLiked={liked.includes(selectedCreation.id)}
    isSaved={saved.includes(selectedCreation.id)}
    onLike={toggleLike}
    onSave={toggleSave}
    comments={comments.filter(
      (comment) => comment.creationId === selectedCreation.id
    )}
    onAddComment={addComment}
    onAddReply={addReply}
    onToggleCommentLike={toggleCommentLike}
    onDeleteComment={deleteComment}
    onDeleteReply={deleteReply}
    onOpenCreator={openCreatorProfile}
    following={following}
    onToggleFollow={toggleFollow}
  />
)}

      {studioOpen && (
        <CreationStudio
          onClose={() => setStudioOpen(false)}
          onPublish={handlePublish}
        />
      )}
    </div>
  );
}

export default App;
