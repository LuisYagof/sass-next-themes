# EXTERNAL LIBRARIES

### Table of contents

- [Internationalization](#next-intl)
- [Themes](#next-themes)
- [Shared states](#zustand)

## next-intl

For internationalization this project uses `next-intl`.

Its configuration is spread across this files and directories:

- **next.config.mjs**, where the function `createNextIntlPlugin` gets as param the custom path to another important file: `i18n.ts`. If there's no custom path to this file, this function will search for it at the root of the `/src` folder by default.

- **src/middleware.ts**

- And every file under **src/locales/config**

The international dictionaries are placed under `src/locales/messages`.

### Implementation

To configure the internationalization via app routing the directory `src/app` has to be structured like this:

```sh
src
 |
 |--app
    |
    |--[locales]
        |
        |--page.tsx
        |--layout.tsx
        |--etc
```

This way the `RouteLayout` gets the current locale via url params and passes it to its children:

```ts
// src/app/[locale]/layout.tsx

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // ...
}
```

By this point, server rendered components are internationalized.

#### CLIENT SIDE RENDERING

To implement the internationalization on client rendered components we need to create a `context`. In this project this context is created in `RouteLayout`.

```ts
// src/app/[locale]/layout.tsx

import { NextIntlClientProvider, useMessages } from "next-intl";

export default function RootLayout(
  {
    /* ... */
  }
) {
  /*
   * Inside the component template
   */

  <NextIntlClientProvider messages={useMessages()}>
    {children}
  </NextIntlClientProvider>;
}
```

## next-themes

To implement dark/light mode this project makes use of `next-themes`.

Implementation files:

- **src/context/ThemeProvider.tsx**, in this file a theme context for the app is created.
- **src/app/layout.tsx**, in this file is where the context is passed to its children.
- **src/styles/globals.scss**
- **src/styles/themes/dark.scss**
- **src/styles/themes/light.scss**
- **src/styles/variables/colors.css**, very important: `next-themes` is not sensitive to sass variables, only to css variables.

## zustand

To implement shared states in the app this project uses `zustand`. This library is pretty self-explanatory and straight-forward, no config files needed.

Modularized stores are created under `src/stores` directory and used in client side components.
