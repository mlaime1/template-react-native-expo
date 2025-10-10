# React Native Starter Template

Professional base template for React Native projects with Expo + TypeScript.

## Objective

Provide a clean and modern architecture ready for any project or production. You can add specific features in `src/features/` without worrying about initial setup.

## 🛠️ Tech Stack

- **Expo SDK** (latest version)
- **TypeScript** (strict mode)
- **Expo Router** (file-based navigation)
- **Zustand** (global state management)
- **AsyncStorage** (local persistence)
- **ESLint + Prettier** (linting and formatting)

## 📦 Installation

```bash
npm install
```

## 🚀 How to Start

```bash
# Start the development server
npm run start

# Run on Android
npm run android

# Run on iOS
npm run ios

# Run on Web
npm run web
```

Open the app in **Expo Go** or use an emulator/simulator.

## 📂 Project Structure

```
rn-starter/
├── src/
│   ├── app/                 # App routes (expo-router)
│   │   ├── _layout.tsx      # Main layout
│   │   └── index.tsx        # Home screen
│   ├── components/
│   │   └── ui/              # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── Text.tsx
│   │       ├── Screen.tsx
│   │       └── Input.tsx
│   ├── hooks/               # Custom hooks
│   │   └── useColorScheme.ts
│   ├── lib/                 # Utilities and configuration
│   │   ├── theme.ts         # Design tokens (light/dark)
│   │   ├── storage.ts       # AsyncStorage helpers
│   │   └── logger.ts        # Development logger
│   ├── services/            # External services (API, etc.)
│   │   └── api.client.placeholder.ts
│   ├── store/               # Global state (Zustand)
│   │   └── app.store.ts     # Example store
│   ├── styles/              # Global styles
│   │   └── globals.ts       # Spacing, typography, radius
│   └── features/            # 🎯 ADD YOUR FEATURES HERE
└── assets/                  # Images, fonts, etc.
```

## How to Add a New Screen

With **expo-router**, simply create a file in `src/app/`:

```tsx
// src/app/profile.tsx
import React from 'react';
import Screen from '@/components/ui/Screen';
import Text from '@/components/ui/Text';

export default function Profile() {
  return (
    <Screen>
      <Text>My Profile</Text>
    </Screen>
  );
}
```

The route will automatically be `/profile`.

## 📐 Absolute Imports

Use `@/*` to import from `src/`:

```tsx
import Button from '@/components/ui/Button';
import { storage } from '@/lib/storage';
import { useAppStore } from '@/store/app.store';
```

## 🎨 Theming

The theme system is in `src/lib/theme.ts`:

```ts
theme.light; // { bg, text, muted, primary, border }
theme.dark; // { bg, text, muted, primary, border }
```

Use `useColorScheme()` to detect system mode.

## 💾 Local Persistence

Ready-to-use helpers in `src/lib/storage.ts`:

```ts
await storage.set('key', value);
const value = await storage.get<Type>('key');
await storage.remove('key');
```

## 🗂️ Global State (Zustand)

Example store in `src/store/app.store.ts`:

```ts
const ready = useAppStore((state) => state.ready);
const setReady = useAppStore((state) => state.setReady);
```

Create your own stores for specific features.

## ✅ Best Practices

1. **Global state**: Create specific stores in `src/store/`
2. **Utilities**: Add helpers in `src/lib/`
3. **UI Components**: Keep generic components in `src/components/ui/`
4. **Features**: Organize business logic in `src/features/[feature-name]/`
5. **Services**: API configuration in `src/services/`

## 🧹 Available Scripts

```bash
npm run start     # Start development
npm run lint      # Run ESLint
npm run format    # Format code with Prettier
```

---

**Ready to start your project!** 🚀

