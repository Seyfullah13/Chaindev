// src/router.jsx
import React from "react";
import {
  createBrowserHistory,
  createRouter,
  createRootRoute,
  createRoute,
  Outlet,
} from "@tanstack/react-router";
import Home from "../pages/Home";
import Navbar from "../Components/GlobalNav";
import Footer from "../Components/Footer";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import LegalNotice from "../pages/LegalNotice";
import About from "../pages/About";
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
// 3) Création du router
export const router = createRouter({
  routeTree: rootRoute.addChildren([
    homeRoute,
    privacyPolicyRoute,
    legalNoticeRoute,
    AboutRoute,
  ]),
  history: createBrowserHistory(),
});
