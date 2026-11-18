/* CharmerWay archive: renders everything from window.ARCHIVE (data.js). */
(function () {
  "use strict";

  var A = window.ARCHIVE || {};

  // --- tiny DOM helper -------------------------------------------------
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v == null || v === false) return;
        if (k === "class") node.className = v;
        else if (k === "text") node.textContent = v;
        else node.setAttribute(k, v);
      });
    }
    (children || []).forEach(function (c) {
      if (c == null || c === "") return;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  }

  function todoTag() {
    return el("span", { class: "todo-tag", text: "To add" });
  }

  function isTodo(item) { return item && item.todo === true; }

  function fill(id, nodes) {
    var root = document.getElementById(id);
    if (!root) return;
    root.textContent = "";
    nodes.forEach(function (n) { root.appendChild(n); });
  }

  function emptyNote(text) {
    return el("p", { class: "empty" }, [todoTag(), " " + text]);
  }

  function externalLink(url, label, cls) {
    return el("a", { href: url, class: cls, target: "_blank", rel: "noopener" }, [label]);
  }

  // --- copy button -----------------------------------------------------
  function selectText(node) {
    var r = document.createRange(); r.selectNodeContents(node);
    var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
  }
  function copyButton(value, valueNode, cls) {
    var btn = el("button", { type: "button", class: cls, "aria-label": "Copy " + value }, ["Copy"]);
    btn.addEventListener("click", function () {
      var done = function () {
        btn.textContent = "Copied";
        setTimeout(function () { btn.textContent = "Copy"; }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(done, function () { selectText(valueNode); });
      } else {
        selectText(valueNode);
      }
    });
    return btn;
  }

  // --- live Minecraft status ---------------------------------------------
  // From the public mcsrvstat.us API. It caches for a few minutes, so one
  // shared check per host runs on load and every 2 minutes while visible.
  var mcWatchers = {};
  function watchMinecraft(host, onUpdate) {
    var w = mcWatchers[host];
    if (w) { w.subs.push(onUpdate); if (w.last) onUpdate(w.last); return; }
    w = mcWatchers[host] = { subs: [onUpdate], last: null };
    function emit(st) { w.last = st; w.subs.forEach(function (fn) { fn(st); }); }
    function check() {
      if (!window.fetch) return emit({ state: "unknown", summary: "Status unavailable" });
      fetch("https://api.mcsrvstat.us/3/" + encodeURIComponent(host))
        .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
        .then(function (d) {
          if (!d || !d.online) return emit({ state: "offline", summary: "Offline right now" });
          var players = d.players && typeof d.players.online === "number"
            ? d.players.online + (d.players.max ? " / " + d.players.max : "") : "";
          var version = d.version ? String(d.version).slice(0, 24) : "";
          var parts = ["Online"];
          if (players) parts.push(players + " players");
          if (version) parts.push(version);
          emit({ state: "online", summary: parts.join(" · "), players: players, version: version });
        })
        .catch(function () { emit({ state: "unknown", summary: "Status unavailable" }); });
    }
    check();
    setInterval(function () { if (!document.hidden) check(); }, 120000);
  }

  // --- simple fields ----------------------------------------------------
  document.querySelectorAll("[data-field]").forEach(function (node) {
    var v = A[node.getAttribute("data-field")];
    if (v) node.textContent = v;
  });
  if (A.name) document.title = A.name + " Archive";

  // --- now (what CharmerWay is today) -----------------------------------
  (function () {
    var now = A.now;
    var box = document.getElementById("now");
    if (!box || !now || (!now.text && !(now.items || []).length)) return;
    box.hidden = false;
    var text = document.getElementById("now-text");
    if (now.text) text.textContent = now.text; else text.remove();

    fill("now-items", (now.items || []).map(function (it) {
      var value = it.value || it.url || "";
      var valueNode;
      if (it.url) valueNode = externalLink(it.url, value, "now__value");
      else valueNode = el(it.copy ? "code" : "span", { class: "now__value", text: value });

      var copyBtn = it.copy && value ? copyButton(value, valueNode, "now__copy") : null;
      var statusNode = null;
      if (it.status === "minecraft" && value) {
        statusNode = el("span", { class: "now__status is-loading", role: "status", "aria-live": "polite" }, [
          el("span", { class: "now__status-dot", "aria-hidden": "true" }),
          el("span", { class: "now__status-text", text: "Checking server…" })
        ]);
        (function (node) {
          var text = node.querySelector(".now__status-text");
          watchMinecraft(value, function (st) {
            node.className = "now__status is-" + st.state;
            text.textContent = st.summary;
          });
        })(statusNode);
      }

      return el("li", { class: "now__item" + (isTodo(it) ? " is-todo" : "") + (statusNode ? " has-status" : "") }, [
        el("span", { class: "now__label" }, [it.label || "", isTodo(it) ? todoTag() : null]),
        el("span", { class: "now__row" }, [valueNode, copyBtn]),
        statusNode
      ]);
    }));

  })();

  // --- minecraft server --------------------------------------------------
  (function () {
    var mc = A.minecraft;
    var section = document.getElementById("minecraft");
    var navLink = document.querySelector('.nav a[href="#minecraft"]');
    if (!section) return;
    if (!mc || !mc.address) { section.remove(); if (navLink) navLink.remove(); return; }
    section.hidden = false;

    var addr = el("code", { class: "mc__address", text: mc.address });
    var stateDot = el("span", { class: "mc__dot", "aria-hidden": "true" });
    var stateText = el("span", { text: "Checking…" });
    var playersVal = el("dd", { text: "—" });
    var versionVal = el("dd", { text: "—" });

    var card = el("div", { class: "mc__card" }, [
      el("p", { class: "mc__edition", text: mc.edition || "Minecraft server" }),
      el("div", { class: "mc__addr-row" }, [addr, copyButton(mc.address, addr, "mc__copy")]),
      mc.status === false ? null : el("dl", { class: "mc__stats", role: "status", "aria-live": "polite" }, [
        el("div", {}, [el("dt", { text: "Status" }), el("dd", { class: "mc__state is-loading" }, [stateDot, stateText])]),
        el("div", {}, [el("dt", { text: "Players" }), playersVal]),
        el("div", {}, [el("dt", { text: "Version" }), versionVal])
      ])
    ]);

    var steps = (mc.steps || []).map(function (step) {
      // Show the server address in steps as code.
      var parts = String(step).split(mc.address);
      var li = el("li");
      parts.forEach(function (p, i) {
        if (i) li.appendChild(el("code", { text: mc.address }));
        if (p) li.appendChild(document.createTextNode(p));
      });
      return li;
    });

    fill("minecraft-body", [
      mc.text ? el("p", { class: "section__lede mc__lede", text: mc.text }) : null,
      el("div", { class: "mc" }, [
        card,
        steps.length ? el("div", { class: "mc__join" }, [
          el("h3", { class: "mc__join-title", text: "How to join" }),
          el("ol", { class: "mc__steps" }, steps)
        ]) : null
      ])
    ].filter(Boolean));

    if (mc.status !== false) {
      watchMinecraft(mc.address, function (st) {
        stateText.parentNode.className = "mc__state is-" + st.state;
        stateText.textContent = st.state === "online" ? "Online" : st.summary;
        playersVal.textContent = st.players || "—";
        versionVal.textContent = st.version || "—";
      });
    }
  })();

  // --- about -----------------------------------------------------------
  var about = (A.about || []).map(function (p, i) {
    return el("p", { class: i === 0 ? "about__lead" : null, text: p });
  });
  fill("about-body", about.length ? about : [emptyNote("Add paragraphs to `about` in data.js.")]);

  // --- timeline --------------------------------------------------------
  var tl = (A.timeline || []).map(function (t) {
    return el("li", { class: "timeline__item" + (isTodo(t) ? " is-todo" : "") }, [
      el("span", { class: "timeline__year", text: t.year || "—" }),
      el("div", { class: "timeline__body" }, [
        el("h3", { class: "timeline__title" }, [t.title || "Untitled", isTodo(t) ? todoTag() : null]),
        t.text ? el("p", { text: t.text }) : null
      ])
    ]);
  });
  fill("timeline-list", tl.length ? tl : [el("li", {}, [emptyNote("Add events to `timeline` in data.js.")])]);

  // --- projects --------------------------------------------------------
  var projects = (A.projects || []).map(function (p, i) {
    var meta = [p.kind, p.years].filter(Boolean).join(" · ");
    return el("article", { class: "card card--" + (i % 4) + (isTodo(p) ? " is-todo" : "") }, [
      meta ? el("p", { class: "card__meta", text: meta }) : null,
      el("h3", { class: "card__title" }, [p.name || "Untitled", isTodo(p) ? todoTag() : null]),
      p.text ? el("p", { class: "card__text", text: p.text }) : null,
      p.url ? externalLink(p.url, "Visit →", "card__link") : null
    ]);
  });
  fill("projects-list", projects.length ? projects : [emptyNote("Add projects to `projects` in data.js.")]);

  // --- podcast ---------------------------------------------------------
  (function () {
    var cstar = (A.projects || []).filter(function (p) { return p.name === "CStar Presents"; })[0];
    var lede = document.getElementById("podcast-lede");
    if (lede) {
      if (cstar && cstar.text) lede.textContent = cstar.text + (cstar.years ? " (" + cstar.years + ")" : "");
      else lede.remove();
    }
  })();

  var episodes = (A.episodes || []).map(function (ep) {
    var hasNo = ep.no !== null && ep.no !== undefined && ep.no !== "";
    var headline = ep.title || ep.guest || "Untitled episode";
    var sub = ep.title && ep.guest ? "with " + ep.guest : "";
    var titleNode = ep.url
      ? externalLink(ep.url, headline, "ep__link")
      : el("span", { text: headline });
    return el("li", { class: "ep" + (isTodo(ep) ? " is-todo" : "") + (ep.url ? " has-url" : "") }, [
      el("span", { class: "ep__no" + (hasNo ? "" : " is-unknown"), title: hasNo ? null : "Episode number not confirmed yet" },
        [hasNo ? String(ep.no).padStart(2, "0") : "—"]),
      el("div", { class: "ep__body" }, [
        el("h3", { class: "ep__title" }, [titleNode, isTodo(ep) ? todoTag() : null]),
        sub ? el("p", { class: "ep__guest", text: sub }) : null
      ]),
      el("span", { class: "ep__date", text: ep.date || "" }),
      ep.url ? el("span", { class: "ep__watch", "aria-hidden": "true", text: "▶" }) : null
    ]);
  });
  fill("episode-list", episodes.length ? episodes : [el("li", {}, [emptyNote("Add episodes to `episodes` in data.js.")])]);

  // --- people ----------------------------------------------------------
  var people = (A.people || []).map(function (p) {
    var initial = isTodo(p) ? "+" : (p.name || "?").trim().charAt(0).toUpperCase();
    return el("li", { class: "person" + (isTodo(p) ? " is-todo" : "") }, [
      p.photo
        ? el("img", { class: "person__avatar", src: p.photo, alt: "", loading: "lazy" })
        : el("span", { class: "person__avatar", "aria-hidden": "true", text: initial }),
      el("div", {}, [
        el("h3", { class: "person__name" }, [p.name || "Unnamed", isTodo(p) ? todoTag() : null]),
        p.role ? el("p", { class: "person__role", text: p.role }) : null
      ])
    ]);
  });
  fill("people-list", people.length ? people : [el("li", {}, [emptyNote("Add members to `people` in data.js.")])]);

  // --- gallery ---------------------------------------------------------
  var gallery = A.gallery || [];
  if (gallery.length) {
    fill("gallery-body", [el("div", { class: "gallery" }, gallery.map(function (g, i) {
      var cap = [g.caption, g.year].filter(Boolean).join(" · ");
      return el("figure", { class: "shot shot--" + (i % 3) }, [
        el("img", { src: g.src, alt: g.alt || g.caption || "", loading: "lazy" }),
        cap ? el("figcaption", { text: cap }) : null
      ]);
    }))]);
  } else {
    fill("gallery-body", [el("div", { class: "gallery-empty" }, [
      el("p", { class: "gallery-empty__title" }, [todoTag(), " No images yet"]),
      el("ol", { class: "gallery-empty__steps" }, [
        el("li", {}, ["Put photos, flyers or scans in the ", el("code", { text: "media/" }), " folder."]),
        el("li", {}, ["List each one in ", el("code", { text: "gallery" }), " in ", el("code", { text: "data.js" }), ":"]),
      ]),
      el("pre", {}, [el("code", { text: '{ src: "media/flyer.jpg", caption: "Show flyer", year: "2018" }' })])
    ])]);
  }

  // --- links -----------------------------------------------------------
  var links = (A.links || []).map(function (l) {
    var host = "";
    if (!l.url) {
      // No URL yet: show a placeholder instead of a broken link.
      return el("li", {}, [
        el("div", { class: "link is-todo" }, [
          el("span", { class: "link__label" }, [l.label || "Link", todoTag()]),
          el("span", { class: "link__host", text: "Link coming soon" })
        ])
      ]);
    }
    try { host = new URL(l.url).hostname.replace(/^www\./, ""); } catch (e) {}
    return el("li", {}, [
      el("a", { class: "link", href: l.url, target: "_blank", rel: "noopener" }, [
        el("span", { class: "link__label", text: l.label || l.url }),
        host ? el("span", { class: "link__host", text: host }) : null,
        el("span", { class: "link__arrow", "aria-hidden": "true", text: "↗" })
      ])
    ]);
  });
  fill("links-list", links.length ? links : [el("li", {}, [emptyNote("Add links to `links` in data.js.")])]);

  // --- theme toggle ----------------------------------------------------
  var root = document.documentElement;
  var btn = document.querySelector(".theme-toggle");
  function currentTheme() {
    if (root.dataset.theme) return root.dataset.theme;
    return window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function syncButton() {
    var t = currentTheme();
    btn.setAttribute("aria-pressed", t === "dark" ? "true" : "false");
    btn.title = t === "dark" ? "Switch to light theme" : "Switch to dark theme";
  }
  if (btn) {
    syncButton();
    btn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try { localStorage.setItem("cw-theme", next); } catch (e) {}
      syncButton();
    });
  }
})();
