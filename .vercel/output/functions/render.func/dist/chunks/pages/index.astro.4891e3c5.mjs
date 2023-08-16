import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, m as maybeRenderHead, f as renderComponent } from '../astro.eff5881d.mjs';
import 'html-escaper';
/* empty css                           */import 'cookie';
import 'kleur/colors';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const $$Astro$5 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="Astro description">
		<meta name="viewport" content="width=device-width">
	<link rel="shortcut icon" href="/public/favicon.svg" type="image/x-icon">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title}</title>
	${renderHead()}</head>
	<body>
		${renderSlot($$result, $$slots["default"])}
	</body></html>`;
}, "C:/Users/wilir/ ASTRO/src/layouts/Layout.astro", void 0);

const $$Astro$4 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`
${maybeRenderHead()}<header class="astro-HPNW4VWY">
    <h1 id="h2" class="h1 astro-HPNW4VWY">Everything you need to start a website</h1>
    <p class="astro-HPNW4VWY">Astro comes batteries included, it takes the best parts of state-of-the-art tools and adds its own innovations.</p>
    <section class="grid astro-HPNW4VWY">
        <div class="gridone astro-HPNW4VWY">
            ${renderComponent($$result, "icono-box", "icono-box", { "class": "astro-HPNW4VWY" }, { "default": () => renderTemplate`<i class="ri-briefcase-4-fill astro-HPNW4VWY"></i>` })}
            <div class="flex astro-HPNW4VWY">
                <h1 class="astro-HPNW4VWY">Bring your own framework</h1>
                <p class="astro-HPNW4VWY">Build your site using React, Svelte, Vue, Preact, Web components, orjust plain ol HTML + JavaScript</p>
            </div>
        </div>
        <div class="gridtwo astro-HPNW4VWY">
            ${renderComponent($$result, "icono-box", "icono-box", { "class": "astro-HPNW4VWY" }, { "default": () => renderTemplate`<i class="ri-window-2-line astro-HPNW4VWY"></i>` })}
            <div class="flex astro-HPNW4VWY">
                <h1 class="astro-HPNW4VWY">100% Static HTML, No JS</h1>
                <p class="astro-HPNW4VWY">Astro renders your entire page to static HTML, removing all JavaScript from your final build by default</p>
            </div>
        </div>
        <div class="gridthree astro-HPNW4VWY">
            ${renderComponent($$result, "icono-box", "icono-box", { "class": "astro-HPNW4VWY" }, { "default": () => renderTemplate`<i class="ri-database-2-fill astro-HPNW4VWY"></i>` })}
            <div class="flex astro-HPNW4VWY">
                <h1 class="astro-HPNW4VWY">On-Demand Components</h1>
                <p class="astro-HPNW4VWY">Need some JS? Astro can automatically hydrate interactive components when they become visible on the page</p>
            </div>
        </div>
        <div class="gridfour astro-HPNW4VWY">
            ${renderComponent($$result, "icono-box", "icono-box", { "class": "astro-HPNW4VWY" }, { "default": () => renderTemplate`<i class="ri-aliens-line astro-HPNW4VWY"></i>` })}
            <div class="flex astro-HPNW4VWY">
                <h1 class="astro-HPNW4VWY">Broad integration</h1>
                <p class="astro-HPNW4VWY">Astro supports TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind, Markdown, MDX, and any other npm packages</p>
            </div>
        </div>
        <div class="gridfive astro-HPNW4VWY">
            ${renderComponent($$result, "icono-box", "icono-box", { "class": "astro-HPNW4VWY" }, { "default": () => renderTemplate`<i class="ri-folder-unknow-line astro-HPNW4VWY"></i>` })}
            <div class="flex astro-HPNW4VWY">
                <h1 class="astro-HPNW4VWY">SEO Enabled</h1>
                <p class="astro-HPNW4VWY">Automatic sitemaps, RSS feeds, pagination and collections take the pain out of SEO and syndication. It just works!</p>
            </div>
        </div>
        <div class="gridsix astro-HPNW4VWY">
            ${renderComponent($$result, "icono-box", "icono-box", { "class": "astro-HPNW4VWY" }, { "default": () => renderTemplate`<i class="ri-user-fill astro-HPNW4VWY"></i>` })}
            <div class="flex astro-HPNW4VWY">
                <h1 class="astro-HPNW4VWY">Community</h1>
                <p class="astro-HPNW4VWY">Astro is an open source project powered by hundreds of contributors making thousands of individual contributions.</p>
            </div>
        </div>
    </section>
</header>`;
}, "C:/Users/wilir/ ASTRO/src/components/header.astro", void 0);

const $$Astro$3 = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Nav;
  return renderTemplate`
${maybeRenderHead()}<nav class="nav astro-DMQPWCEC">
    <h2 class="h2 astro-DMQPWCEC">Astro<span class="text-gradient astro-DMQPWCEC">SHIP</span></h2>
    <!--?xml version="1.0" ?--><svg class="open astro-DMQPWCEC" height="32px" id="open" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" class="astro-DMQPWCEC"></path></svg>
	<!--?xml version="1.0" ?--><svg class="close astro-DMQPWCEC" id="close" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" class="astro-DMQPWCEC"></path><path d="M0 0h48v48h-48z" fill="none" class="astro-DMQPWCEC"></path></svg>
    <ul id="nav" class="astro-DMQPWCEC">
        <li class="astro-DMQPWCEC">features</li>
		<li class="astro-DMQPWCEC">pricing</li>
        <li class="astro-DMQPWCEC">about</li>
        <li class="astro-DMQPWCEC">blog</li>
        <li class="astro-DMQPWCEC">contact</li>
		<section class="botones astro-DMQPWCEC">
			<button class="buton astro-DMQPWCEC">log in</button>
			<button class="buton astro-DMQPWCEC">sign up</button>
		</section>
    </ul>
    
</nav>`;
}, "C:/Users/wilir/ ASTRO/src/components/Nav.astro", void 0);

const $$Astro$2 = createAstro();
const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Main;
  return renderTemplate`
${maybeRenderHead()}<header class="astro-IVDEV4KK">
    <div class="info astro-IVDEV4KK">
        <h1 id="h1" class="astro-IVDEV4KK">Marketing website done with Astro
            </h1>
            <p class="astro-IVDEV4KK">
                Astroship is a starter template for startups, marketing websites & <br class="astro-IVDEV4KK"> landing pages. Built with Astro.build and TailwindCSS. You can <br class="astro-IVDEV4KK"> quickly create any website with this starter.
            </p>
            <div class="botones-info astro-IVDEV4KK">
                <div class="boton astro-IVDEV4KK"><i class="ri-download-cloud-fill astro-IVDEV4KK">  </i>Download for free</div>
                <div class="boton astro-IVDEV4KK"><i class="ri-github-fill astro-IVDEV4KK"></i> GitHub Repo</div>
            </div>
    </div>
    <picture class="picture-image astro-IVDEV4KK">
        <img src="/public/astro.webp" alt="" class="astro-IVDEV4KK">
    </picture>
</header>`;
}, "C:/Users/wilir/ ASTRO/src/components/Main.astro", void 0);

const $$Astro$1 = createAstro();
const $$Foter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Foter;
  return renderTemplate`${maybeRenderHead()}<footer class="astro-6R56HE73">
  <p class="p astro-6R56HE73">Works with your technologies</p>
  <div class="icons astro-6R56HE73">
    <img src="/public/svg/react.svg" alt="" class="astro-6R56HE73">
    <img src="/public/svg/svelte.svg" alt="" class="astro-6R56HE73">
    <img src="/public/svg/tailwind.svg" alt="" class="astro-6R56HE73">
    <img src="/public/svg/javascrt.svg" alt="" class="astro-6R56HE73">
    <img src="/public/svg/triangle.svg" alt="" class="astro-6R56HE73">
    <img src="/public/svg/astro.svg" alt="" class="astro-6R56HE73">
  </div>
  <section class="astro-6R56HE73">
    <h1 class="h1 astro-6R56HE73">Build Faster Websites.</h1>
    <p class="pset astro-6R56HE73">Pull content from anywhere and serve it fast with Astro's next-gen island architecture</p>
    <div class="buton astro-6R56HE73">Get Started</div>
  </section>
  <br class="astro-6R56HE73">
  <br class="astro-6R56HE73">
  <br class="astro-6R56HE73">
  <br class="astro-6R56HE73">
</footer>`;
}, "C:/Users/wilir/ ASTRO/src/components/foter.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate`
	<link href="https://cdn.jsdelivr.net/npm/remixicon@3.4.0/fonts/remixicon.css" rel="stylesheet">
	${maybeRenderHead()}<main class="main">
		${renderComponent($$result2, "Nav", $$Nav, {})}
	
			${renderComponent($$result2, "Main", $$Main, {})}
		${renderComponent($$result2, "Header", $$Header, {})}
		${renderComponent($$result2, "Footer", $$Foter, {})}

		
	</main>
` })}`;
}, "C:/Users/wilir/ ASTRO/src/pages/index.astro", void 0);

const $$file = "C:/Users/wilir/ ASTRO/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
