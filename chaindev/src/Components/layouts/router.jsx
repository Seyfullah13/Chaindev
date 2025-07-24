// src/router.jsx
import React from "react";
import {
  createBrowserHistory,
  createRouter,
  createRootRoute,
  createRoute,
  Outlet,
} from "@tanstack/react-router";
import Home from "../../pages/Home/Home";
import Navbar from "../layouts/GlobalNav";
import Footer from "../layouts/Footer";
import PrivacyPolicy from "../../pages/Privacypolicy/PrivacyPolicy";
import LegalNotice from "../../pages/Legalnotice/LegalNotice";
import About from "../../pages/About/About";
import Services from "../../pages/Services/Services";
import Contact from "../../pages/Contact/Contact";
// 1) Définition de la route "racine" (layout global)
const rootRoute = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  ),
});

// 2) Routes enfants
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const privacyPolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/politique-de-confidentialite",
  component: PrivacyPolicy,
});
const legalNoticeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/mentions-legales",
  component: LegalNotice,
});
const AboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/A-propos",
  component: About,
});
const ServicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/Services",
  component: Services,
});
const ContactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/Contact",
  component: Contact,
});
// 3) Création du router
export const router = createRouter({
  routeTree: rootRoute.addChildren([
    homeRoute,
    privacyPolicyRoute,
    legalNoticeRoute,
    AboutRoute,
    ServicesRoute,
    ContactRoute,
  ]),
  history: createBrowserHistory(),
});
