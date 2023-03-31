// set server host
routemamba.registerServerHost("http://127.0.0.1:5500/");
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
    http_url: "index.html",
  },
]);

routemamba.render();
