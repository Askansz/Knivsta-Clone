$vizzit$ = typeof $vizzit$ != "undefined" ? $vizzit$ : {};
$vizzit$ = {
  keys: $vizzit$.keys || {},
  client: $vizzit$.client || {},
  config: $vizzit$.config || {},
  endpoint: $vizzit$.endpoint || {},
  page: $vizzit$.page || {}
};
$vizzit$.integration = {
  init: function init() {
    $vizzit$.integration.run();
  },
  run: function run() {
    if ($vizzit$.lib.window.loaded) {
      $vizzit$.lib.script();
    } else {
      $vizzit$.lib.window.onload();
    }
  }
};
$vizzit$.lib = {
  script: function script() {
    var b = $vizzit$.endpoint.integration || "https://cdn.vizzit.se/integration/";
    var a = document.createElement("script");
    a.setAttribute("src", b);
    document.getElementsByTagName("head")[0].appendChild(a);
  },
  window: {
    onload: function onload() {
      window.addEventListener("load", $vizzit$.lib.script);
    },
    loaded: function loaded() {
      return document.readyState === "complete";
    }
  }
};