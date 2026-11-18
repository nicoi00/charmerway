/*
  CHARMERWAY ARCHIVE — content file.
  Edit this file to add to the archive; the page renders everything from it.
  Entries marked `todo: true` are placeholders waiting on your own records.
*/
window.ARCHIVE = {
  name: "CharmerWay",
  years: "2017–2022",
  place: "Baltimore, Maryland",
  tagline: "An art collective from Baltimore, 2017–2022.",

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
    "CharmerWay started in 2017, when Nico and Tyler were in a high school televideo class. They screen-printed custom shirts under the Charmers name and recorded video skits.",
    "It grew into a creative collective and company: design and creative direction, talent management, marketing, a podcast, and a record imprint, CStar Records. CharmerWay was based out of a studio at School 33 Art Center and was openly shaped by Black culture.",
    "This site preserves the group’s projects, people and moments from 2017 to 2022."
  ],

  timeline: [
    { year: "2017", title: "Charmers begins", text: "Nico and Tyler start screen-printing custom shirts and recording skits in a high school televideo class." },
    { year: "2019", title: "CStar Presents launches", text: "Episode 1 of the podcast, with Hasan Ghaziel Bey, is released in March." },
    { year: "2021", title: "ABCs of Activism", text: "Episode 14 of CStar Presents, with Jason Russell, is released in February." },
    { year: "2022", title: "Closing chapter", text: "CharmerWay wraps up its active years.", todo: true }
  ],

  projects: [
    { name: "Charmers", kind: "Apparel", years: "2017–", text: "Custom screen-printed shirts, CharmerWay’s first project, later sold through the Charmers Shop." },
    { name: "Televideo skits", kind: "Video", years: "2017–", text: "Comedy and video skits made in the high school televideo class where it all began." },
    { name: "CStar Presents", kind: "Podcast", years: "2019–2021", text: "Long-form conversations with Baltimore artists, activists and entrepreneurs. Released on YouTube, Spotify and Apple Podcasts." },
    { name: "CStar Records", kind: "Label & management", years: "", text: "CharmerWay’s music imprint and artist roster." },
    { name: "Moodboard", kind: "Blog", years: "", text: "The collective’s blog and visual reference board." }
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

  people: [
    { name: "Nico", role: "Co-founder" },
    { name: "Tyler", role: "Co-founder" },
    { name: "Add members", role: "Artists, collaborators, CStar Records roster", todo: true }
  ],

  // Add images to ./media/ and list them here: { src: "media/file.jpg", caption: "…", year: "2018" }
  gallery: [],

  links: [
    { label: "YouTube", url: "https://www.youtube.com/c/CharmerWay" },
    { label: "X / Twitter", url: "https://x.com/charmerway" },
    { label: "Instagram", url: "https://www.instagram.com/charmerway/" },
    { label: "School 33 Art Center studios", url: "https://school33.org/index.cfm?page=studios" },
    { label: "Old site, Nov 2020 (Wayback Machine)", url: "https://web.archive.org/web/20201101035630/http://charmerway.com/" }
  ]
};
