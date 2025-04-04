import { NextResponse } from 'next/server';
import { nanoid } from 'nanoid';
export function middleware(request) {
  const url = request.nextUrl.clone();
  const nonce = nanoid();
  const mode = 'dev';
  if (url.pathname === '/Enterprise/Apollo-Onboarding') {
    const searchParam = url?.search;

    url.pathname = '/enterprise/Apollo-Onboarding';

    url.search = searchParam;
    return NextResponse.redirect(url, 301);
  }
  const cspDev =
    `default-src 'self' 'unsafe-eval' https://api.razorpay.com https://maps.gstatic.com https://maps.googleapis.com https://www.youtube.com https://s3.ap-south-1.amazonaws.com https://td.doubleclick.net https://www.googletagmanager.com blob:;` +
    `script-src 'self' 'unsafe-eval' https://in1.clevertap-prod.com https://checkout.razorpay.com https://cdn.jsdelivr.net https://www.googletagmanager.com https://maps.googleapis.com https://www.youtube.com https://cdnjs.cloudflare.com https://static.hotjar.com https://connect.facebook.net https://www.clarity.ms https://googleads.g.doubleclick.net https://script.hotjar.com blob: 'nonce-${nonce}'; ` +
    `style-src 'self' https://fonts.googleapis.com https://cdnjs.cloudflare.com https://www.googletagmanager.com 'unsafe-inline'; ` +
    `font-src 'self' https://fonts.gstatic.com;` +
    `img-src 'self' data: https://fonts.gstatic.com https://maps.googleapis.com https://maps.gstatic.com https://d2ts1vii79fe9b.cloudfront.net https://testing.emoha.com https://emoha-production.s3.ap-south-1.amazonaws.com https://testing-emoha.s3.ap-south-1.amazonaws.com https://testing.api.emoha.com https://api.emoha.com https://uat.api.emoha.com https://newapi.emoha.com https://images.unsplash.com https://www.emoha.com https://test.emoha.com https://www.placekitten.com https://d3vbzr3ojcog4z.cloudfront.net https://emoha-website-assest-cloudfront-bucket.s3.ap-south-1.amazonaws.com https://i.ytimg.com https://d1510fwumr3byl.cloudfront.net https://cdnjs.cloudflare.com https://www.facebook.com https://www.google.com https://www.google.co.in https://www.googletagmanager.com;` +
    `connect-src 'self' https://www.google-analytics.com https://in1.clevertap-prod.com https://www.google.com https://testing.api.emoha.com https://api.emoha.com https://uat.api.emoha.com https://newapi.emoha.com https://metrics.hotjar.io https://checkout.razorpay.com https://lumberjack.razorpay.com https://lumberjack-cx.razorpay.com https://maps.googleapis.com https://www.youtube.com https://ipinfo.io https://s3.ap-south-1.amazonaws.com https://k.clarity.ms wss://ws.hotjar.com https://content.hotjar.io https://google.com https://v.clarity.ms https://e.clarity.ms;`;

  const cspProd =
    `default-src 'self'  https://api.razorpay.com https://maps.gstatic.com https://maps.googleapis.com https://www.youtube.com https://s3.ap-south-1.amazonaws.com https://td.doubleclick.net https://www.googletagmanager.com blob:;` +
    `script-src 'self'  https://in1.clevertap-prod.com https://checkout.razorpay.com https://cdn.jsdelivr.net https://www.googletagmanager.com https://maps.googleapis.com https://www.youtube.com https://cdnjs.cloudflare.com https://static.hotjar.com https://connect.facebook.net https://www.clarity.ms https://googleads.g.doubleclick.net https://script.hotjar.com blob: 'unsafe-inline'; ` +
    `style-src 'self' https://fonts.googleapis.com https://cdnjs.cloudflare.com https://www.googletagmanager.com 'unsafe-inline'; ` +
    `font-src 'self' https://fonts.gstatic.com;` +
    `img-src 'self' data: https://fonts.gstatic.com https://maps.googleapis.com https://maps.gstatic.com https://d2ts1vii79fe9b.cloudfront.net https://testing.emoha.com https://emoha-production.s3.ap-south-1.amazonaws.com https://testing-emoha.s3.ap-south-1.amazonaws.com https://testing.api.emoha.com https://uat.api.emoha.com https://api.emoha.com https://newapi.emoha.com https://images.unsplash.com https://www.emoha.com https://test.emoha.com https://www.placekitten.com https://d3vbzr3ojcog4z.cloudfront.net https://emoha-website-assest-cloudfront-bucket.s3.ap-south-1.amazonaws.com https://i.ytimg.com https://d1510fwumr3byl.cloudfront.net https://cdnjs.cloudflare.com https://www.facebook.com https://www.google.com https://www.google.co.in https://www.googletagmanager.com;` +
    `connect-src 'self' https://www.google-analytics.com https://in1.clevertap-prod.com https://www.google.com https://testing.api.emoha.com https://api.emoha.com https://uat.api.emoha.com https://newapi.emoha.com https://metrics.hotjar.io https://checkout.razorpay.com https://lumberjack.razorpay.com https://lumberjack-cx.razorpay.com https://maps.googleapis.com https://www.youtube.com https://ipinfo.io https://s3.ap-south-1.amazonaws.com https://k.clarity.ms wss://ws.hotjar.com https://content.hotjar.io https://google.com https://v.clarity.ms https://e.clarity.ms;`;

  const csp = mode === 'prod' ? cspProd : cspDev;
  const res = NextResponse.next();
  res.headers.set('Content-Security-Policy', csp.trim());
  res.headers.set('x-nonce', nonce);
  res.cookies.set('nonce', nonce);
  return res;
}
