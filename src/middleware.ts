import createMiddleware from "next-intl/middleware";
import { locales } from "./constants/locales";

export default createMiddleware({
  locales: locales,
  defaultLocale: 'pt',
});

export const config = {
  matcher: ["/", "/(en|pt)/:path*"],
};
