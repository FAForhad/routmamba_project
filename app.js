// set server host
routemamba.registerServerHost("https://faforhad.github.io/routmamba_project/");
routemamba.registerMetaUrl("components/meta/meta-content.html");

routemamba.register_http_routes([
  {
    method: "GET",
    meta_loader: true,
    content_url: "components/home.html",
    container: "#outlet",
    preloader: "loading...",
    error_content: "error",
    http_url_change: false,
    http_url: "",
  },
  {
    method: "GET",
    meta_loader: true,
    content_url: "components/about.html",
    container: "#outlet",
    preloader: "loading...",
    error_content: "error",
    http_url_change: false,
    http_url: "about.html",
  },
  {
    method: "GET",
    meta_loader: true,
    content_url: "components/contact.html",
    container: "#outlet",
    preloader: "loading...",
    error_content: "error",
    http_url_change: false,
    http_url: "contact.html",
  },
  {
    method: "GET",
    meta_loader: true,
    content_url: "components/cycle.html",
    container: "#outlet",
    preloader: "loading...",
    error_content: "error",
    http_url_change: false,
    http_url: "cycle.html",
  },
  {
    method: "GET",
    meta_loader: true,
    content_url: "components/news.html",
    container: "#outlet",
    preloader: "loading...",
    error_content: "error",
    http_url_change: false,
    http_url: "news.html",
  },
  {
    method: "GET",
    meta_loader: true,
    content_url: "components/home.html",
    container: "#outlet",
    preloader: "loading...",
    error_content: "error",
    http_url_change: false,
    http_url: "index.html",
  },
]);
// header
routemamba.register_routes_headers([
  {
    content_url: "components/header.html",
    container: "#header",
    preloader: "loading...",
    error_content: "error",
    http_url: [""],
  },
  {
    content_url: "components/header.html",
    container: "#header",
    preloader: "loading...",
    error_content: "error",
    http_url: ["index.html"],
  },
  {
    content_url: "components/header.html",
    container: "#header",
    preloader: "loading...",
    error_content: "error",
    http_url: ["about.html"],
  },
  {
    content_url: "components/header.html",
    container: "#header",
    preloader: "loading...",
    error_content: "error",
    http_url: ["cycle.html"],
  },
  {
    content_url: "components/header.html",
    container: "#header",
    preloader: "loading...",
    error_content: "error",
    http_url: ["contact.html"],
  },
  {
    content_url: "components/header.html",
    container: "#header",
    preloader: "loading...",
    error_content: "error",
    http_url: ["news.html"],
  },
]);

// footer
routemamba.register_routes_footers([
  {
    content_url: "components/footer.html",
    container: "#footer",
    preloader: "loading...",
    error_content: "error",
    http_url: [""],
  },
  {
    content_url: "components/footer.html",
    container: "#footer",
    preloader: "loading...",
    error_content: "error",
    http_url: ["index.html"],
  },
  {
    content_url: "components/footer.html",
    container: "#footer",
    preloader: "loading...",
    error_content: "error",
    http_url: ["about.html"],
  },
  {
    content_url: "components/footer.html",
    container: "#footer",
    preloader: "loading...",
    error_content: "error",
    http_url: ["contact.html"],
  },
  {
    content_url: "components/footer.html",
    container: "#footer",
    preloader: "loading...",
    error_content: "error",
    http_url: ["cycle.html"],
  },
  {
    content_url: "components/footer.html",
    container: "#footer",
    preloader: "loading...",
    error_content: "error",
    http_url: ["news.html"],
  },
]);

routemamba.render();
