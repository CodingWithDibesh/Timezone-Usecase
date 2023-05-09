# Handling date time in different rendering paradigms

[👈 Back](../../ReadMe.md)

If you have been working with production based frontend frameworks like NextJs you have come across rendering paradigms like Server Side Rendering (SSR). Well then it's normal for you to see hydration mismatch errors and it mostly occurs while we are handling time related data. When server renders a time in a template and that same template when hydrated by client side then its pron of error as such because time calculated might not be as same as calculated by client side. There are several factors that cause this error bust some of common factors are.

1. Mismatched time calculation in milliseconds/seconds
   This situation is common because the time server calculates time and client calculates time will be different.
2. Mismatched time calculation due to change in timezone
   When we are working with different timezones be it server and client or multiple timezones for client then the date time value could differ.

A common solution for this kind of problem is to use Client Side Rendering (CSR) but this might not help if you really need SSR. So in such a situation we need to implement a walk around that solves the problem.

1. Render the time in server in Universal Standard Time (UTC) format
2. Implement Cascading Style Sheet (CSS) that makes it hidden but still present in layout (display none) to ignore Cumulative Layout Shift (CLS)
3. Update correct time in client as per timezone and make time visible.

## Reference

- [NextJS Discussion 👉 Hydration errors - Text content does not match server-rendered HTML](https://github.com/vercel/next.js/discussions/38263)
