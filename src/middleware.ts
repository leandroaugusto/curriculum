import createMiddleware from "next-intl/middleware";
import { locales } from "./utils/locales";

export default createMiddleware({
  locales: locales,
  defaultLocale: 'pt',
});

export const config = {
  matcher: ["/", "/(en|pt)/:path*"],
};
