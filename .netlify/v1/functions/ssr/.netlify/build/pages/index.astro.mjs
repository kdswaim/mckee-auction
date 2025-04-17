import { e as createComponent, m as maybeRenderHead, i as renderScript, r as renderTemplate, h as addAttribute, j as renderComponent, f as createAstro, k as renderSlot, l as renderHead, s as spreadAttributes, n as Fragment, u as unescapeHTML } from '../chunks/astro/server_WtdF0IR9.mjs';
import 'kleur/colors';
/* empty css                                 */
import 'clsx';
import { getIconData, iconToSVG } from '@iconify/utils';
export { renderers } from '../renderers.mjs';

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="py-12 px-8 lg:px-8 bg-white"> <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4"> <!-- Logo & Description --> <div class="sm:col-span-2"> <a href="/" aria-label="Go home" title="Ron McKee Auction Service - since 2005" class="inline-flex items-center break-normal"> <span class="flex text-[#fe5b44] tracking-wide font-bold text-2xl break-normal gap-1"> <span class="font-brush">Ron McKee</span> <span class="font-sergio text-gray-800">Auction Service</span> </span> </a> <p class="text-gray-600 font-fry text-lg italic">“Fast talkin’, fair dealin’, McKee style!”</p> <div class="mt-6 lg:max-w-sm"> <p class="text-sm text-gray-800">
With years of experience and a reputation for honesty and fairness, Ron brings professional integrity to every sale.
</p> <p class="mt-4 text-sm text-gray-800">
Whether you're auctioning real estate, farm equipment, antiques, or entire estates, Ron’s honest approach and proven track record ensure every client feels confident, informed, and respected.
</p> <p class="mt-4 text-sm text-gray-800">
As a trusted Indiana auctioneer serving Terre Haute and beyond, Ron also offers antique appraisals and expert guidance for your next auction listing.
</p> <p class="mt-4 text-sm text-gray-800">
Contact Ron McKee Auction Service today to make your next auction easier.
</p> </div> </div> <!-- Contact Info + Visitor Counter Side by Side on Small Screens --> <div class="flex flex-col sm:center sm:flex-row sm:items-start sm:justify-between gap-8 sm:gap-16"> <!-- Contact Info --> <div class="space-y-2 text-sm"> <p class="text-base font-bold tracking-wide text-gray-900 font-fry">Contacts</p> <div class="flex"> <p class="mr-1 text-gray-800">Phone:</p> <a href="tel:850-123-5021">812-229-0711</a> </div> <div class="flex"> <p class="mr-1 text-gray-800">Email:</p> <a href="mailto:info@lorem.mail">rkee40@aol.com</a> </div> <div class="flex"> <p class="mr-1 text-gray-800">Address:</p> <a href="https://www.google.com/maps/place/Ron+McKee+Auctions+%26+Estate/@39.3908156,-87.2922618..." target="_blank" rel="noopener noreferrer">
8290 S SR 46
</a> </div> </div> <!-- Visitor Counter --> <div class="pt-4 sm:pt-0 w-40 h-20 text-center font-brush shrink-0">
You're Guest Number:
<div id="visitor-count"></div> ${renderScript($$result, "C:/Quality-Websites/Monarch-Media-LLC/mckee-auction-services/src/components/footer.astro?astro&type=script&index=0&lang.ts")} </div> </div> </div> <div class="flex flex-col-reverse justify-between pt-5 pb-5"> <p class="text-sm text-gray-600 text-center font-fry font-xl">
© <span id="year"></span> Ron McKee Auction Service, All rights reserved.
</p> ${renderScript($$result, "C:/Quality-Websites/Monarch-Media-LLC/mckee-auction-services/src/components/footer.astro?astro&type=script&index=1&lang.ts")} </div> <p class="text-gray-600 flex items-start justify-center font-fry">
Website by <img class="px-2 h-5 inline-block" alt="Monarch Media LLC" src="https://i.postimg.cc/yxKgn2TG/Monarch-inline-col.png"> </p> </div>`;
}, "C:/Quality-Websites/Monarch-Media-LLC/mckee-auction-services/src/components/footer.astro", void 0);

const $$Social = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section title="Upcoming Auctions" class="text-center pb-8 bg-[#f9f9f9]"> <!-- Place this at the top of your white-background section --> <h2 class="text-[#fe5b44] text-2xl md:text-3xl font-semibold mb-4 font-sergio pt-8">Follow Us On Facebook</h2> <div class="flex justify-center mx-0"> <div class="fb-page w-full" data-href="https://www.facebook.com/ronmckeeauctions/" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"> <blockquote cite="https://www.facebook.com/ronmckeeauctions/" class="fb-xfbml-parse-ignore"> <a href="https://www.facebook.com/ronmckeeauctions/">Ron McKee Auction Service</a> </blockquote> </div> </div> </section>`;
}, "C:/Quality-Websites/Monarch-Media-LLC/mckee-auction-services/src/components/social.astro", void 0);

const Logo = new Proxy({"src":"/_astro/RonMckeeASlogo.CRtK-dGe.png","width":387,"height":211,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Quality-Websites/Monarch-Media-LLC/mckee-auction-services/src/assets/RonMckeeASlogo.png";
							}
							
							return target[name];
						}
					});

const $$PrimaryButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap justify-center gap-6"> <a class="relative" target="_blank" href="https://www.auctionzip.com/IN-Auctioneers/95471.html" title="I Want To Buy!"> <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span> <span class="relative inline-block h-full w-full rounded border-2 border-black bg-white px-6 py-2 text-xl font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900 font-brush">I Wanna Buy!</span> </a></div>`;
}, "C:/Quality-Websites/Monarch-Media-LLC/mckee-auction-services/src/components/ui/primary-button.astro", void 0);

const $$SecondaryButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap justify-center gap-6"> <a class="relative" href="#sellers" title="I Want To Sell!"> <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span> <span class="relative inline-block h-full w-full rounded border-2 border-black bg-white px-6 py-2 text-xl font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900 font-brush">I Wanna Sell!</span> </a></div>`;
}, "C:/Quality-Websites/Monarch-Media-LLC/mckee-auction-services/src/components/ui/secondary-button.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="container"></div> <header title="Welcome" class="text-center text-white text-shadow-md"> <img${addAttribute(Logo.src, "src")} width="300" height="300" alt="Ron McKee Auction Service Logo" class="drop-shadow-md mx-auto"> <h1 title="Welcome">Ron McKee Auction Service</h1> <p class="font-fry">License#: AU10400108</p> <p class="font-fry text-2xl text-shadow">812-229-0711</p> <p class="font-fry text-xl text-shadow">8290 S State Road 46</p> <div class="buttons flex gap-4 justify-center py-6"> ${renderComponent($$result, "PrimaryButton", $$PrimaryButton, {})} ${renderComponent($$result, "SecondaryButton", $$SecondaryButton, {})} </div> </header>`;
}, "C:/Quality-Websites/Monarch-Media-LLC/mckee-auction-services/src/components/header.astro", void 0);

const $$WelcomeMessage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section title="Introduction" class="relative z-9 bg-[url('/newspaper-bg.jpg')] 
    brightness-110 
    shadow-2xl 
    rounded-sm 
    text-[#1f1f1f] 
    py-12 
    bg-cover 
    bg-center 
    bg-no-repeat 
    bg-blend-multiply 
    bg-gradient-to-r from-white/80 to-stone-100/80 
    contrast-150
    m-8"> <!-- Text Content --> <p class="first-letter:text-4xl px-10 m text-justify first-letter:font-bold first-letter:mr-2 first-letter:text-ron-red font-fry text-xl text-shadow">
Thank you for visiting our Auction Site. Whether you are seeking an honest & competent auction company to fulfill your needs…. or looking for an enjoyable auction to attend…. we think you can find it here.
</p> <br> <p class="font-fry text-xl text-justify px-10">
We specialize in auctions on Real Estate, Estates, Business Liquidations, Personal Property, & more. We also offer appraisals on Estates, Personal Property, & Antiques.
</p> <br> <p class="font-fry text-xl text-justify px-10">
Our Promise to You… If we cannot meet your needs, we will gladly help you with other recommendations. After all, It is about YOUR needs!
      Ron McKee Auction Service, Inc…. for your Complete Auction Service needs. We will always be Open, Honest, & Fair.
</p> <p class="font-fry pt-8 text-2xl text-right pr-10">Sincerely,</p> <p class="font-brush text-4xl text-right pr-10 text-[#fe5b44] text-shadow-xl">Ron McKee</p> <p class="font-brush text-xl text-right pr-10">Auctioneer</p> </section>`;
}, "C:/Quality-Websites/Monarch-Media-LLC/mckee-auction-services/src/components/welcome-message.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/mckee-favicon.png"><meta name="generator"', '><!-- SEO --><link rel="canonical" href="https://www.ronmckeeauctionservice.com"><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url" content="https://ronmckeeauctionservice.com"><meta property="og:title" content="Ron McKee Auction Service | Auctions, Estates, Liquidations & Appraisals | Terre Haute, IN"><meta property="og:description" content="Ron McKee Auction Service, Inc. specializes in real estate, estate, business liquidation, and personal property auctions, as well as professional appraisals of estates, antiques, and collectibles. Count on us for complete auction services that are always open, honest, and fair."><meta property="og:image" content="https://ronmckeeauctionservice.com/ron-og-image.png"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url" content="ronmckeeauctionservice.com"><meta property="twitter:title" content="Ron McKee Auction Service | Auctions, Estates, Liquidations & Appraisals | Terre Haute, IN"><meta property="twitter:description" content="Ron McKee Auction Service, Inc. specializes in real estate, estate, business liquidation, and personal property auctions, as well as professional appraisals of estates, antiques, and collectibles. Count on us for complete auction services that are always open, honest, and fair."><meta property="twitter:image" content="https://ronmckeeauctionservice.com\ron-og-image.png"><!-- Meta Tags Generated with https://metatags.io --><meta name="description" content="Ron McKee Auction Service, Inc. specializes in real estate, estate, business liquidation, and personal property auctions, as well as professional appraisals of estates, antiques, and collectibles. Count on us for complete auction services that are always open, honest, and fair."><meta name="keywords" content="estate auctions, \n    real estate auctions, \n    Indiana auctioneer, \n    auction service, \n    antique appraisals, \n    business liquidation, \n    personal property auctions, \n    Ron McKee Auction Service, \n    auctioneer Terre Haute, \n    auction listings\n"><title>Ron McKee Auction Service | Auctions, Estates, Liquidations & Appraisals | Terre Haute, IN </title>', `</head> <body class="bg-bg-main" data-astro-cid-sckkx6r4> <div class="bg-[url('../src/assets/ron-bg.jpg')] bg-cover bg-center bg-no-repeat pt-8 px-0" data-astro-cid-sckkx6r4> <div class="md:px-12 lg:px-16 md:pb-12" data-astro-cid-sckkx6r4> `, " ", ' </div> <svg xmlns="http://www.w3.org/2000/svg" class="block w-full" viewBox="0 0 1000 100" data-astro-cid-sckkx6r4><path d="M0 0C500 0 500 96 1000 96V100H0V0Z" fill="#fe5b44" data-astro-cid-sckkx6r4></path></svg> </div> ', ' <div data-aos="fade-up" class="layout-wrapper px-6 md:px-12 lg:px-16" data-astro-cid-sckkx6r4> ', ' </div> <script data-goatcounter="https://mckee-auction.goatcounter.com/count" async src="//gc.zgo.at/count.js"><\/script> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" data-astro-cid-sckkx6r4><path d="M0 0C500 0 500 96 1000 96V100H0V0Z" fill="#f9f9f9" class="block w-full" data-astro-cid-sckkx6r4></path></svg> <div class="w-full bg-[#f9f9f9] -mt-1 pb-12" data-astro-cid-sckkx6r4> ', " </div> ", ' <div id="fb-root" data-astro-cid-sckkx6r4></div> <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v22.0"><\/script> </body> </html> '], ['<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/mckee-favicon.png"><meta name="generator"', '><!-- SEO --><link rel="canonical" href="https://www.ronmckeeauctionservice.com"><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url" content="https://ronmckeeauctionservice.com"><meta property="og:title" content="Ron McKee Auction Service | Auctions, Estates, Liquidations & Appraisals | Terre Haute, IN"><meta property="og:description" content="Ron McKee Auction Service, Inc. specializes in real estate, estate, business liquidation, and personal property auctions, as well as professional appraisals of estates, antiques, and collectibles. Count on us for complete auction services that are always open, honest, and fair."><meta property="og:image" content="https://ronmckeeauctionservice.com/ron-og-image.png"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url" content="ronmckeeauctionservice.com"><meta property="twitter:title" content="Ron McKee Auction Service | Auctions, Estates, Liquidations & Appraisals | Terre Haute, IN"><meta property="twitter:description" content="Ron McKee Auction Service, Inc. specializes in real estate, estate, business liquidation, and personal property auctions, as well as professional appraisals of estates, antiques, and collectibles. Count on us for complete auction services that are always open, honest, and fair."><meta property="twitter:image" content="https://ronmckeeauctionservice.com\\ron-og-image.png"><!-- Meta Tags Generated with https://metatags.io --><meta name="description" content="Ron McKee Auction Service, Inc. specializes in real estate, estate, business liquidation, and personal property auctions, as well as professional appraisals of estates, antiques, and collectibles. Count on us for complete auction services that are always open, honest, and fair."><meta name="keywords" content="estate auctions, \n    real estate auctions, \n    Indiana auctioneer, \n    auction service, \n    antique appraisals, \n    business liquidation, \n    personal property auctions, \n    Ron McKee Auction Service, \n    auctioneer Terre Haute, \n    auction listings\n"><title>Ron McKee Auction Service | Auctions, Estates, Liquidations & Appraisals | Terre Haute, IN </title>', `</head> <body class="bg-bg-main" data-astro-cid-sckkx6r4> <div class="bg-[url('../src/assets/ron-bg.jpg')] bg-cover bg-center bg-no-repeat pt-8 px-0" data-astro-cid-sckkx6r4> <div class="md:px-12 lg:px-16 md:pb-12" data-astro-cid-sckkx6r4> `, " ", ' </div> <svg xmlns="http://www.w3.org/2000/svg" class="block w-full" viewBox="0 0 1000 100" data-astro-cid-sckkx6r4><path d="M0 0C500 0 500 96 1000 96V100H0V0Z" fill="#fe5b44" data-astro-cid-sckkx6r4></path></svg> </div> ', ' <div data-aos="fade-up" class="layout-wrapper px-6 md:px-12 lg:px-16" data-astro-cid-sckkx6r4> ', ' </div> <script data-goatcounter="https://mckee-auction.goatcounter.com/count" async src="//gc.zgo.at/count.js"><\/script> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" data-astro-cid-sckkx6r4><path d="M0 0C500 0 500 96 1000 96V100H0V0Z" fill="#f9f9f9" class="block w-full" data-astro-cid-sckkx6r4></path></svg> <div class="w-full bg-[#f9f9f9] -mt-1 pb-12" data-astro-cid-sckkx6r4> ', " </div> ", ' <div id="fb-root" data-astro-cid-sckkx6r4></div> <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v22.0"><\/script> </body> </html> '])), addAttribute(Astro2.generator, "content"), renderHead(), renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true }), renderComponent($$result, "WelcomeMessage", $$WelcomeMessage, { "data-astro-cid-sckkx6r4": true }), renderComponent($$result, "AOSWrapper", null, { "client:only": "react", "client:component-hydration": "only", "data-astro-cid-sckkx6r4": true, "client:component-path": "C:/Quality-Websites/Monarch-Media-LLC/mckee-auction-services/src/components/ui/AOSWrapper.jsx", "client:component-export": "default" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Social", $$Social, { "data-astro-cid-sckkx6r4": true }), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true }));
}, "C:/Quality-Websites/Monarch-Media-LLC/mckee-auction-services/src/layouts/Layout.astro", void 0);

const icons = {"local":{"prefix":"local","lastModified":1744909563,"icons":{"appraisals":{"body":"<g fill=\"none\" fill-rule=\"evenodd\"><path d=\"m12.593 23.258-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z\"/><path fill=\"currentColor\" d=\"M11.5 3a4.5 4.5 0 0 1 4.336 3.292l.052.205 1.87-.467a1 1 0 0 1 1.233.84L19 7v1.81a6.5 6.5 0 0 1 1.364 1.882l.138.308H21a1 1 0 0 1 .993.883L22 12v3a1 1 0 0 1-.445.832l-.108.062-1.168.585a6.5 6.5 0 0 1-2.02 2.325l-.259.174V20a1 1 0 0 1-.883.993L17 21h-3a1 1 0 0 1-.993-.883L13 20h-1a1 1 0 0 1-.883.993L11 21H8a1 1 0 0 1-.993-.883L7 20v-1.022a6.5 6.5 0 0 1-2.854-4.101 3 3 0 0 1-2.14-2.693L2 12v-.5a1 1 0 0 1 1.993-.117L4 11.5v.5q.002.224.09.415a6.5 6.5 0 0 1 2.938-4.411A4.5 4.5 0 0 1 11.5 3m4.5 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-4.5-6a2.5 2.5 0 0 0-2.478 2.169A6.5 6.5 0 0 1 10.5 7h3.377l.07-.017A2.5 2.5 0 0 0 11.5 5\"/></g>"},"arrow":{"body":"<path fill=\"currentColor\" d=\"m14 20-.354.354.354.353.354-.353zM6 3.5a.5.5 0 0 0 0 1zm2.646 11.854 5 5 .708-.708-5-5zm5.708 5 5-5-.708-.708-5 5zM14.5 20V10h-1v10zM8 3.5H6v1h2zm6.5 6.5A6.5 6.5 0 0 0 8 3.5v1a5.5 5.5 0 0 1 5.5 5.5z\"/>"},"auctions":{"body":"<g fill=\"none\"><path d=\"m12.593 23.258-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z\"/><path fill=\"currentColor\" d=\"M2.686 10.462a2.5 2.5 0 0 0 0 3.536l2.829 2.828a2.5 2.5 0 0 0 4.095-2.681l.791-.791 6.407 7.392a2.793 2.793 0 1 0 3.94-3.94l-7.392-6.407.791-.79a2.5 2.5 0 0 0 2.681-4.096L14 2.684a2.5 2.5 0 0 0-4.095 2.681L5.368 9.902a2.5 2.5 0 0 0-2.682.56\"/></g>"},"chunky-arrow":{"body":"<path fill=\"#2E2E2E\" d=\"m51 2 .75 3.5c.942 4.25 1.991 8.468 3.063 12.688 1.646 6.498 3.157 13.02 4.624 19.562 2.203 9.81 4.588 19.566 7.07 29.31Q67.26 70.027 68 73c3.796-.38 6.693-.846 10.125-2.562C81.088 68.956 82.748 68.713 86 69l1 4h2c1.656 2.012 1.656 2.012 3.5 4.688l1.844 2.636c4.654 7.52 4.833 15.318 4.781 23.926l-.015 2.547c-.098 10.248-.33 19.858-5.11 29.203-4.08 2.72-7.289 2.61-12 2-15.3-3.733-37.657-10.657-49-22-.079-2.844.472-4.435 2.422-6.52 3.632-3.174 7.509-5.9 11.578-8.48-3.332-3.423-6.643-6.761-10.375-9.75C31.715 87.137 27.968 81.991 24 77a590 590 0 0 0-3.062-3.562C19 71 19 71 19 69h-2c-4-5.412-4-5.412-4-8l-3-1c-1.973-2.18-1.973-2.18-4.062-4.875l-2.098-2.68A117 117 0 0 1 0 47c.758-2.277.758-2.277 2.125-4.937 2.05-4.078 3.24-7.677 4.188-12.126 2.56-8.11 9.69-10.936 16.704-14.792 2.786-1.609 5.306-3.504 7.858-5.457C43.93.014 43.93.014 51 2\"/><path fill=\"#FAFAFA\" d=\"M38 28v5h2l1-3c1 1 1 1 1.098 3.723l-.035 3.34-.028 3.347L42 43l3-1 1 10 3 1v8l3 1 1 10h2l.375 1.938L56 76l2 1c.414 2.066.414 2.066.625 4.563l.227 2.503L59 86l3-1c1.5 1.375 1.5 1.375 3 3v2q2.595-1.404 5.188-2.812l2.917-1.583c2.907-1.547 2.907-1.547 5.508-3.43C81 81 81 81 83.207 81.576c3.967 3.153 4.516 8.482 5.2 13.277C89.51 106.968 90.49 120.222 87 132c-5.723.241-10.292-.358-15.687-2.375l-2.153-.782c-6.315-2.374-12.435-5.155-18.535-8.03l-2.757-1.297-2.579-1.246-2.29-1.107c-2.022-1.176-3.434-2.437-4.999-4.163 4.73-4.123 9.734-7.594 15-11-.525-3.989-2.299-5.462-5.312-8-8.86-7.72-17.003-15.85-24.32-25.059-3.334-4.142-6.815-8.153-10.296-12.171C10.608 53.915 8.21 51.06 6 48l2.168-1.18c6.56-3.683 12.507-7.665 18.378-12.355C34.656 28 34.656 28 38 28\"/><path fill=\"#F2F2F2\" d=\"m41 7 2 1-1.059 1.723-1.379 2.34-1.37 2.285c-1.39 2.716-1.39 2.716-1.54 6.23C37 24 37 24 34.875 26.012L32 27.687l-3.242 1.981-1.8 1.091c-4.592 2.91-8.945 6.191-13.345 9.38l-2.12 1.517-1.896 1.37C8 44 8 44 6 44a224 224 0 0 1 2.129-6.371c.907-2.578.907-2.578 1.398-5.102 2.01-7.5 6.744-10.188 13.107-13.895q2.142-1.223 4.292-2.433c3.123-1.805 6.085-3.803 9.074-5.824l2.938-1.977z\"/><path fill=\"#464646\" d=\"m46 1 5 1 .75 3.5c1.001 4.52 2.118 9.01 3.25 13.5 4.3 17.149 4.3 17.149 4 23l-3-1-.437 3.125A406 406 0 0 1 54 54l-2-1c-.414-2.066-.414-2.066-.625-4.562l-.227-2.504L51 44h-2l1-15-2 5h-2c.82-12.127.82-12.127 3-17l2-1c-1.966.147-1.966.147-4 1-1.138 2.08-1.138 2.08-1.75 4.563l-.734 2.503L44 26c-2-2-2-2-2.047-3.988.555-4.347 1.354-7.95 3.047-12.012.168-2.709.168-2.709 0-5l3 1c1.188 3.063 1.188 3.063 2 6L49 2z\"/><path fill=\"#1D1D1D\" d=\"m10 25 3 1c-.645 4.333-2.19 7.867-4.062 11.813l-1.66 3.519L6 44l1.649-1.13 7.476-5.12 2.594-1.777A1033 1033 0 0 1 31 27l2 1c-2.518 5.545-7.044 8.297-11.875 11.688-1.205.87-1.205.87-2.434 1.76C14.873 44.167 11.423 46.37 7 48v2c-1.937-.312-1.937-.312-4-1-2.114-6.342 1.286-13.202 4-19h3z\"/><path fill=\"#3B3B3B\" d=\"m40 4 2 1Zm-2 1 2 1c-2.41 5.152-5.904 7.21-10.625 10l-2.17 1.314A729 729 0 0 1 21 21l-2.984 1.793C13.67 25.328 13.67 25.328 12 26l-2-1v5H8c.383-2.794.677-4.562 2-7 1.807-1.246 1.807-1.246 4.04-2.348 4.945-2.585 9.383-5.634 13.898-8.902q2.23-1.604 4.464-3.203l1.953-1.411C36 6 36 6 38 5\"/><path fill=\"#1D1D1D\" d=\"M43 2h6l2 10-2 1-2-7-2 4h-2l-2 1V8l-3 1 2-4h2z\"/><path fill=\"#DADADA\" d=\"m45 5 3 1c1.716 6.578-.035 11.007-3 17l-2 3c-1.728-3.456-.646-7.286 0-11a206 206 0 0 1 2-5c.168-2.709.168-2.709 0-5\"/><path fill=\"#262626\" d=\"m10 25 3 1c-.628 3.95-1.865 7.199-3.562 10.813l-1.38 2.957L7 42l-3-1c.672-3.806 1.727-7.352 3-11h3z\"/><path fill=\"#666\" d=\"m46 1 5 1c1.74 6.43 2.25 12.35 2 19h-2v-5h-3v-3l2-1-1-10z\"/><path fill=\"#434343\" d=\"m20 17 2 1c-1.385 3.427-2.675 4.73-6 6.313l-2.125 1.05L12 26l-2-1v5H8c.386-2.816.652-4.553 2-7 2.823-2.072 5.844-3.506 9-5z\"/><path fill=\"#D5D5D5\" d=\"m49 17 2 1c-.48 5.569-1.3 10.67-3 16h-2c.779-11.522.779-11.522 3-17\"/><path fill=\"#0D0D0D\" d=\"m5 40 1 4 4-1c-.573 2.867-.861 3.861-3 6l-3 1c-1.187-1.625-1.187-1.625-2-4 1.375-3.25 1.375-3.25 3-6\"/><path fill=\"#2E2E2E\" d=\"m47 14 1 2h3l-.875 2.063C48.874 21.329 47.925 24.628 47 28l-4-2z\"/><path fill=\"#575757\" d=\"M3 41c1.333 2.667.671 4.167 0 7l2.813 1.25C8.88 50.934 10.19 52.085 12 55H8l-1-3-1.875-.437C2.293 50.813 1.55 49.403 0 47z\"/><path fill=\"#C2C2C2\" d=\"M51 29h2c.226 5.419-.533 9.775-2 15h-2c.964-10.558.964-10.558 2-15\"/><path fill=\"#C4C4C4\" d=\"M54 40h1c.083 4.833-.047 9.237-1 14l-2-1q.21-2.97.438-5.937c.08-1.103.162-2.205.246-3.34C53 41 53 41 54 40\"/><path fill=\"#141414\" d=\"M46 2h3l2 10-2 1-.367-1.934-.508-2.504-.492-2.496L47 4l-2-1z\"/><path fill=\"#2D2D2D\" d=\"m49 27 2 2c-.023 2.164-.023 2.164-.375 4.625l-.336 2.477L50 38l-4-2v-2h2z\"/><path fill=\"#333\" d=\"M48 102c-.75 2.938-.75 2.938-2 6-2.125.875-2.125.875-4 1a101 101 0 0 1 2-6c2-1 2-1 4-1\"/><path fill=\"#535353\" d=\"m40 4 2 1Zm-2 1 2 1-3 5-5-1c3.75-3.875 3.75-3.875 6-5\"/><path fill=\"#C4C4C4\" d=\"M47 23h1c1.286 7.429 1.286 7.429 0 11h-2z\"/><path fill=\"#D5D5D5\" d=\"M56 53h2l1 6h-2l-1 3z\"/><path fill=\"#464646\" d=\"M5 36h3l-1 6-3-1z\"/><path fill=\"#767676\" d=\"m10 23 5 1-3 2-2-1v5H8z\"/>","width":100,"height":138},"realestate":{"body":"<path fill=\"currentColor\" d=\"M2 3a1 1 0 0 1 2 0h13a1 1 0 1 1 0 2H4v12.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 5 13.5zm3 7a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-2.55a1 1 0 0 0-.336-.748L11.332 8.13a.5.5 0 0 0-.664 0L8.336 10.2a1 1 0 0 0-.336.75z\"/>","width":20,"height":20}},"width":24,"height":24}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$1 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, desc, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  const { viewBox } = normalizedProps;
  if (includeSymbol) {
    delete normalizedProps.viewBox;
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${desc && renderTemplate`<desc>${desc}</desc>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}${addAttribute(viewBox, "viewBox")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "href")}></use> ` })}`} </svg>`;
}, "C:/Quality-Websites/Monarch-Media-LLC/mckee-auction-services/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Astro = createAstro();
const $$PromiseCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PromiseCard;
  const { iconName, header, content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class=" h-full p-6 bg-[#f9f9f9] rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl"> ${iconName && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": iconName, "class": "mx-auto", "size": "48", "aria-ignore": true })}`} <h3 class="text-2xl font-fry font-semibold mt-6">${header}</h3> <p class="text-gray-600 mt-4">${content}</p> </div>`;
}, "C:/Quality-Websites/Monarch-Media-LLC/mckee-auction-services/src/components/promise-card.astro", void 0);

const $$Promises = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section title="Our Services" class="mt-[-3px] py-8 text-center bg-[#fe5b44] z-0 w-full "> <h2 class="text-white font-sergio text-shadow-sm">Our Services</h2> <p class="font-fry text-xl">We can assist you in more ways than one. Find out below how we can help you today!</p> <div class="pt-8 grid grid-cols-1 md:grid-cols-3 gap-8"> ${renderComponent($$result, "PromiseCard", $$PromiseCard, { "iconName": "auctions", "header": "Complete Auction Service", "content": "We offer Auctions on Real Estate, Estates, Business Liquidations, Personal Property, and more." })} ${renderComponent($$result, "PromiseCard", $$PromiseCard, { "iconName": "appraisals", "header": "Estate Appraisals", "content": "Whether it is an estate, personal property, or antiques we can appraise it. We will always be open, honest, and fair." })} ${renderComponent($$result, "PromiseCard", $$PromiseCard, { "iconName": "realestate", "header": "Real Estate Sales", "content": "Having trouble with a Real Estate sale? No worries for us, it falls under our auctioneer expertise." })} </div> </section>`;
}, "C:/Quality-Websites/Monarch-Media-LLC/mckee-auction-services/src/components/promises.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Auctions = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<section title="Upcoming Auctions" class="py-6 px-4 text-center w-full" data-astro-cid-z5jf3r52> <h2 class="flex items-center justify-center gap-2 md:gap-4 whitespace-nowrap font-semibold" data-astro-cid-z5jf3r52> ', "\nUpcoming Auctions\n", ' </h2> <script type="text/javascript">\n    // <![CDATA[\n    var az_feed_uid=0;\n    var az_feed=129;\n    // ]]>\n    <\/script> <script src="//www.auctionzip.com/includes/xmlfeed.js" type="text/javascript"><\/script> </section> '])), maybeRenderHead(), renderComponent($$result, "Icon", $$Icon, { "name": "chunky-arrow", "class": "contrast-200 w-10 h-10 sm:w-14 sm:h-14 md:w-[150px] md:h-[150px] shrink-0", "data-astro-cid-z5jf3r52": true }), renderComponent($$result, "Icon", $$Icon, { "name": "chunky-arrow", "class": "contrast-200 rotate-[65deg] w-10 h-10 sm:w-14 sm:h-14 md:w-[150px] md:h-[150px] shrink-0", "data-astro-cid-z5jf3r52": true }));
}, "C:/Quality-Websites/Monarch-Media-LLC/mckee-auction-services/src/components/auctions.astro", void 0);

const $$SellerForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- <form 
  name="seller-contact" 
  method="POST" 
  netlify 
  class="space-y-4 bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto"
> -->${maybeRenderHead()}<section title="For Sellers" class="py-8 px-4" id="sellers"> <form name="seller-contact" method="POST" class="space-y-4 bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto"> <input type="hidden" name="form-name" value="seller-contact"> <h3 class="text-[#fe5b44] font-fru text-center">
For Sellers
</h3> <p class="font-fry text-xl pb-4">
Please leave your name and a call-back number, and you'll hear back from Ron soon.
</p> <div> <label class="block text-sm font-medium mb-1" for="name">Name</label> <input required type="text" id="name" name="name" placeholder="Bidney Spears" class="w-full border rounded-md p-2"> </div> <div> <label class="block text-sm font-medium mb-1" for="phone">Phone Number</label> <input required type="tel" id="phone" name="phone" pattern="[0-9]{10}" placeholder="1234567890" class="w-full border rounded-md p-2"> <div class="py-2 font-fry"> <label class="block text-sm font-medium mb-1" for="phone"></label> <textarea placeholder="Optional: What are you selling?" class="text-lg p-2 w-full"></textarea> </div> <div class="flex justify-center"> <button type="submit" title="Send Info to Ron" class="bg-black text-white text-xl font-brush px-4 py-2 rounded hover:bg-[#fe5b44]">
Send Info to Ron
</button> </div> </div></form></section>`;
}, "C:/Quality-Websites/Monarch-Media-LLC/mckee-auction-services/src/components/seller-form.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div data-aos="slide-up" class="-mt-1"> ${renderComponent($$result2, "Promises", $$Promises, {})} </div> <div data-aos="slide-up"> ${renderComponent($$result2, "Auctions", $$Auctions, {})} </div> <div data-aos="slide-left"> ${renderComponent($$result2, "SellerForm", $$SellerForm, {})} </div> ` })}`;
}, "C:/Quality-Websites/Monarch-Media-LLC/mckee-auction-services/src/pages/index.astro", void 0);

const $$file = "C:/Quality-Websites/Monarch-Media-LLC/mckee-auction-services/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
