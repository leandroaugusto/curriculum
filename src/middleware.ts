import createMiddleware from "next-intl/middleware";
import { LOCALES, locales } from "./utils/locales";

export default createMiddleware({
  locales: locales,
  defaultLocale: LOCALES.PT,
});

export const config = {
  matcher: ["/", "/(en|pt)/:path*"],
};
