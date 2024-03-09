import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'az', 'ru'],

  defaultLocale: 'en'
});

export const config = {
  matcher: ['/', '/(ru|en|az)/:path*']
};