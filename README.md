# ⚡ Senior Quality Engineer Portfolio

> **"Built to demonstrate Quality, not just display it."**

![Portfolio Status](https://img.shields.io/badge/Status-System_Online-success?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-Next.js_|_Tailwind_|_WebdriverIO-blue?style=for-the-badge)
![CI/CD](https://img.shields.io/github/actions/workflow/status/firmansyah/portfolio/ci.yml?label=Automation%20Suite&style=for-the-badge)

Welcome to the source code of my personal portfolio. This project serves two purposes:

1.  **Showcase**: My professional experience and skills as a Senior SDET / Quality Engineer.
2.  **Live Demo**: The portfolio itself is a **Test Object**, complete with intentional "testable" elements and a comprehensive automation suite.

---

## 🛠️ Tech Stack

This project is built with modern web and testing technologies:

| Category        | Technology                                            | Usage                                                       |
| --------------- | ----------------------------------------------------- | ----------------------------------------------------------- |
| **Frontend**    | [Next.js 15](https://nextjs.org/)                     | React Framework for the UI.                                 |
| **Styling**     | [Tailwind CSS](https://tailwindcss.com/)              | For the custom **"Hacker/Terminal"** theme.                 |
| **E2E Testing** | [WebdriverIO](https://webdriver.io/)                  | **Primary automation tool** for Core & Integration testing. |
| **E2E Testing** | [Playwright](https://playwright.dev/)                 | Secondary suite for modern web capabilities comparison.     |
| **CI/CD**       | [GitHub Actions](https://github.com/features/actions) | Runs the full regression suite on every push.               |

---

## 🚀 Features

### 1. The "Terminal" Theme

The UI is designed to reflect a developer's workspace:

- **Hero Section**: Simulated terminal typing effects.
- **Skills**: Displayed as "Installed Packages" with ASCII progress bars.
- **Contact**: Modeled after a `ping` command and network handshake.

### 2. Interactive "TestMe" Module

I included a special section in the portfolio specifically for testing automation scripts. It includes:

- **Explicit Waits**: Buttons that simulate network latency.
- **Logic Validation**: Input fields that require specific string patterns.
- **Mobile Gestures**: A slider that only unlocks via "Swipe" interaction (verified by Touch Actions in the test suite).

---

## 🤖 Running the Automation Suite

This project adheres to a strict **"Automation First"** philosophy. The tests are located in the `tests/` directory, separated by framework.

### Prerequisites

- [Bun](https://bun.sh/) v1.0+

### Setup

```bash
bun install
# Optional: Only if you want to run the secondary suite
bunx playwright install --with-deps
```

### 1. WebdriverIO Suite (Primary)

Demonstrates robust Page Object Model (POM) pattern implementation and custom commands.

```bash
# Run all tests
bun run test:wdio
```

### 2. Playwright Suite (Secondary)

Used for checking modern browser capabilities and visual regression.

```bash
# Run all tests
bun run test:playwright

# Generate HTML Report
bun run report:playwright
```

---

## 📂 Project Structure

```bash
.
├── src/                # Next.js Source Code
├── tests/              # Automation Root
│   ├── playwright/     # Playwright Config & Specs
│   │   ├── pages/      # POM Implementation
│   │   ├── fixtures.ts # Custom Fixtures
│   │   └── report/     # Generated Reports
│   └── wdio/           # WebdriverIO Config & Specs
│       ├── pages/      # POM Implementation
│       └── logs/       # Execution Logs
├── .github/workflows/  # CI/CD Pipeline Configuration
└── package.json
```

---

## 👨‍💻 Author

**Firmansyah Rosid**

- **Role**: Senior Quality Engineer
- **Focus**: Test Infrastructure, CI/CD, Automation Strategy
- **Domain**: [firmanrosid.my.id](https://firmanrosid.my.id)

---

_Checked in with ❤️ by `sudo commit`_
