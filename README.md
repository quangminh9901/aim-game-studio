# AIM Game Studio

A visual chat + point-and-click interface for managing game development projects. No coding required.

Built on top of [Claude Code Game Studios](https://github.com/Donchitos/Claude-Code-Game-Studios) framework.

## Features

- **Chat Interface** — Guided conversations instead of command-line tools
- **Point & Click** — All actions are clickable cards and buttons
- **Project Setup Wizard** — Step-by-step project configuration
- **Templates** — Pre-built setups for common game types
- **Project Management** — Save, export, and manage multiple projects
- **GitHub Pages** — No server or installation needed, just visit the URL
- **Non-dev Friendly** — Designed for everyone, not just developers

## Quick Start

1. **Fork this repo** on GitHub
2. Go to Settings > Pages > Source: "Deploy from a branch" > Branch: `main` / `root`
3. Visit `https://<your-username>.github.io/aim-game-studio/`
4. Start creating projects!

## How It Works

1. Open the site in your browser
2. Click **Create New Project** or pick a **Template**
3. Follow the guided steps (name, engine, genre, team, platform)
4. Get a ready-to-use `project.yaml` configuration
5. Download or copy the config into your CCGS project

## Supported Engines

| Engine | Language | Best For |
|--------|----------|----------|
| Godot 4 | GDScript | 2D games, lightweight 3D, indie |
| Unity | C# | Cross-platform, mobile, large ecosystem |
| Unreal 5 | C++ / Blueprint | AAA graphics, high-fidelity 3D |

## For Teams

Each team member can fork this repo and have their own instance. Projects are stored in the browser and can be exported as YAML files to share.

## License

MIT
