/*
  CHARMERWAY ARCHIVE — content file.
  Edit this file to add to the archive; the page renders everything from it.
  Entries marked `todo: true` are placeholders waiting on your own records.
*/
window.ARCHIVE = {
  name: "CharmerWay",
  years: "2017–2022",
  place: "Baltimore, Maryland",
  tagline: "An artist collective from Baltimore, 2017–2022.",

  // What CharmerWay is today. Items with `copy: true` get a copy button;
  // items with a `url` become links. `status: "minecraft"` shows live server
  // status (via api.mcsrvstat.us). Fill in the Discord invite when ready.
  now: {
    text: "Today CharmerWay lives on as a Discord community and a Minecraft server.",
    items: [
      { label: "Minecraft server", value: "mc.charmerway.com", copy: true, status: "minecraft" },
      { label: "Discord", value: "Invite link", url: "", todo: true }
    ]
  },

  // The Minecraft server section. `status: false` hides the live status.
  minecraft: {
    address: "mc.charmerway.com",
    edition: "Minecraft: Java Edition",
    text: "CharmerWay runs a Minecraft server. Join on Java Edition with the address below.",
    steps: [
      "Open Minecraft: Java Edition and choose Multiplayer.",
      "Click Add Server.",
      "Enter mc.charmerway.com as the Server Address, then click Done.",
      "Select the server in your list and click Join Server."
    ]
  },

  about: [
    "CharmerWay was an artist collective from Baltimore, Maryland. It ran from 2017, the founders’ senior year of high school, to 2022, their senior year of college. Over those five years the same group of friends made clothing, two podcasts, music, and competitive gaming teams.",
    "It began when Nico and Tyler were in a high school televideo class. They screen-printed custom shirts under the Charmers name and recorded video skits. The first podcast, Charmers Cramped Closet Podcast, started in high school too.",
    "In college the collective grew. It launched CStar Presents, an interview series and its second podcast; CStar Sound, its music arm; and CStar eSports, its competitive gaming organization. It also did design and creative direction, talent management and marketing, and was based out of a studio at School 33 Art Center. CharmerWay was openly shaped by Black culture.",
    "This site is the full archive of CharmerWay: the story, music, episodes, photos and logos from 2017 to 2022."
  ],

  timeline: [
    { year: "2017", title: "Charmers begins", text: "In their senior year of high school, Nico and Tyler start screen-printing custom shirts and recording skits in a televideo class." },
    { year: "2019", title: "CStar Presents launches", text: "Episode 1 of the interview series, with Hasan Ghaziel Bey, is released in March." },
    { year: "2021", title: "ABCs of Activism", text: "Episode 14 of CStar Presents, with Jason Russell, is released in February." },
    { year: "2022", title: "Closing chapter", text: "CharmerWay wraps up in the founders’ senior year of college, five years after it began." }
  ],

  // `url` adds a "Visit" link; `todo: true` marks a placeholder.
  projects: [
    { name: "Charmers", kind: "Clothing line", years: "2017–", text: "CharmerWay’s clothing line and first project: custom screen-printed shirts, later sold through the Charmers Shop." },
    { name: "Charmers Cramped Closet Podcast", kind: "Podcast", years: "High school", text: "The podcast the group started in high school, the first of CharmerWay’s two shows." },
    { name: "CStar Presents", kind: "Interview series", years: "2019–2021", text: "The interview series started in college, CharmerWay’s second podcast: long-form conversations with Baltimore artists, activists and entrepreneurs. Released on YouTube, Spotify and Apple Podcasts." },
    { name: "CStar Sound", kind: "Music", years: "", text: "The music arm of the collective, with artists CStar Pluto, CStar Byrd, RosesForKam and CStar Waveman. The 2020 charmerway.com site listed it as CStar Records." },
    { name: "CStar eSports", kind: "Competitive gaming", years: "", text: "CharmerWay’s competitive gaming organization, with teams in Rocket League and Call of Duty. It later became Baltimore Clippers eSports." },
    { name: "Baltimore Clippers eSports", kind: "Competitive gaming", years: "", text: "CStar eSports’ next chapter: an effort to revive the branding of the Baltimore Clippers, the city’s old hockey team, as an esports organization." },
    { name: "Televideo skits", kind: "Video", years: "2017–", text: "Comedy and video skits made in the high school televideo class where it all began." },
    { name: "Moodboard", kind: "Blog", years: "", text: "The collective’s blog and visual reference board." }
  ],

  // Charmers Cramped Closet Podcast episodes (from the CharmerWay YouTube channel).
  closetEpisodes: [
    { no: 1, guest: "", title: "Charmers Cramped Closet Podcast Ep 1", date: "", url: "https://www.youtube.com/watch?v=zEUaBc0l-1E" },
    { no: 2, guest: "", title: "Charmers Cramped Closet Podcast Ep 2", date: "", url: "https://www.youtube.com/watch?v=H4P3Xa0WzVQ" }
  ],

  // Episode numbers left null where they aren't confirmed yet.
  // Episodes 9–24 and their links come from the CharmerWay YouTube channel.
  episodes: [
    { no: 1, guest: "Hasan Ghaziel Bey", title: "", date: "March 2019" },
    { no: null, guest: "Travis Chapman", title: "", date: "2019" },
    { no: null, guest: "Lorenzo Hagerty", title: "", date: "2019" },
    { no: null, guest: "Mahmud Cole", title: "", date: "" },
    { no: null, guest: "NTUIIT", title: "", date: "" },
    { no: 9, guest: "Jack Woods", title: "", date: "", url: "https://www.youtube.com/watch?v=XM9rKHk3P8E" },
    { no: 10, guest: "Drew Joiner", title: "The Love of The Game", date: "", url: "https://www.youtube.com/watch?v=Joc7DW2173g" },
    { no: 11, guest: "Sunrise Movement Baltimore", title: "Environmental Awareness", date: "", url: "https://www.youtube.com/watch?v=5gohkJCSiIc" },
    { no: 12, guest: "Cre3dtoons", title: "Bringing Creations to Life", date: "", url: "https://www.youtube.com/watch?v=_HdpVncmNy0" },
    { no: 13, guest: "Aditya", title: "Duality", date: "", url: "https://www.youtube.com/watch?v=_M_XSTA3NLo" },
    { no: 14, guest: "Jason Russell", title: "ABCs of Activism", date: "February 2021", url: "https://www.youtube.com/watch?v=Ozgb3gJeQR8" },
    { no: 15, guest: "Kekoa", title: "Between the Ropes", date: "", url: "https://www.youtube.com/watch?v=wFDKlZfr8qE" },
    { no: 16, guest: "Devin Moreno", title: "Buy the Block", date: "", url: "https://www.youtube.com/watch?v=e7yyGoaq5ws" },
    { no: 17, guest: "Evan Woodard", title: "Relics of the Past", date: "", url: "https://www.youtube.com/watch?v=oT86KIHFiq8" },
    { no: 18, guest: "Score F Swayze", title: "Trusting Yourself", date: "", url: "https://www.youtube.com/watch?v=wMFGfdux0LI" },
    { no: 19, guest: "Susan Weis-Bohlen", title: "Healing Yourself", date: "", url: "https://www.youtube.com/watch?v=AyHibYgmtwA" },
    { no: 20, guest: "Shawn Handley", title: "Interconnecting", date: "", url: "https://www.youtube.com/watch?v=x9q3Tx62OtQ" },
    { no: 21, guest: "", title: "Checking In", date: "", url: "https://www.youtube.com/watch?v=8FDGpMc_jZw" },
    { no: 22, guest: "Matthew Katidjo", title: "Focus", date: "", url: "https://www.youtube.com/watch?v=2FEhVAORlBU" },
    { no: 23, guest: "Bill Carl Boomer", title: "", date: "", url: "https://www.youtube.com/watch?v=EzJpf1cCuUs" },
    { no: 24, guest: "Logan Spires", title: "", date: "", url: "https://www.youtube.com/watch?v=Xb-P64SWKtE" }
  ],

  // CStar Sound, the music arm. Add a `url` to link an artist; list releases
  // as { title, artist, year, url } in `releases`.
  music: {
    artists: [
      { name: "CStar Pluto" },
      { name: "CStar Byrd" },
      { name: "RosesForKam" },
      { name: "CStar Waveman" }
    ],
    releases: [
      { title: "Songs and releases", artist: "CStar Sound artists", todo: true }
    ]
  },

  people: [
    { name: "Nico", role: "Co-founder" },
    { name: "Tyler", role: "Co-founder" },
    { name: "Add members", role: "Artists, collaborators, CStar Sound and CStar eSports rosters", todo: true }
  ],

  // Add images to ./media/ and list them here: { src: "media/file.jpg", caption: "…", year: "2018" }
  gallery: [],

  // Logos. `symbol: "mark"` uses the redrawn C mark built into the page;
  // for original files put them in ./media/ and use { name, src, note }.
  logos: [
    { name: "CharmerWay", symbol: "mark", note: "C mark, redrawn from the YouTube and X profile images" },
    { name: "Charmers", note: "Original logo file", todo: true },
    { name: "CStar", note: "Original logo file", todo: true },
    { name: "CStar Sound", note: "Original logo file", todo: true },
    { name: "CStar eSports", note: "Original logo file", todo: true },
    { name: "Baltimore Clippers eSports", note: "Original logo file", todo: true }
  ],

  links: [
    { label: "YouTube", url: "https://www.youtube.com/c/CharmerWay" },
    { label: "X / Twitter", url: "https://x.com/charmerway" },
    { label: "Instagram", url: "https://www.instagram.com/charmerway/" },
    { label: "School 33 Art Center studios", url: "https://school33.org/index.cfm?page=studios" },
    { label: "Old site, Nov 2020 (Wayback Machine)", url: "https://web.archive.org/web/20201101035630/http://charmerway.com/" }
  ]
};
