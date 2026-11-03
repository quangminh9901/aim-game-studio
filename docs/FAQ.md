# FAQ

Frequently asked questions about AIM Game Studio.

---

## General

### What is AIM Game Studio?

A CLI toolkit that wraps Claude Code with 49 specialized game development agents. Instead of manually typing Claude slash commands, you type simple `aim` commands and the right agent is assigned automatically.

### Do I need to know how to code?

For `aim init` (creating a project) — no. The wizard is point-and-click in terminal.

For actually building a game — the AI agents write most of the code, but you'll need basic understanding of your chosen engine to review and approve their work. The agents explain what they're doing, so it's also a learning experience.

### Is this free?

AIM Game Studio itself is free and open source (MIT license). However:

- **Claude Code** requires an Anthropic API key (paid) or Claude Pro/Max subscription
- **Game engines** are free (Godot) or have their own licensing (Unity, Unreal)

### What games can I build with this?

Any type of game supported by Godot 4, Unity, or Unreal Engine 5. The templates cover platformers, RPGs, FPS, puzzle, survival, horror, strategy, and casual games — but the system works for any genre.

---

## Setup

### How do I update AIM?

```bash
npm update -g aim-game-studio
```

Or if you cloned from GitHub:

```bash
cd aim-game-studio
git pull
npm install
```

### Can I use this on Windows/Mac/Linux?

Yes. AIM works anywhere Node.js and Claude Code run. All three platforms are supported.

### Does my project need internet access?

- `aim init` — yes (clones from GitHub)
- All other commands — yes (Claude Code calls the Claude API)

Without internet, you can still work directly in your game engine. AIM/Claude is a development assistant, not a runtime dependency.

---

## Commands

### What's the difference between `aim dev` and `aim chat`?

- `aim dev` opens Claude with a specific story context — the right agent is assigned, the GDD is loaded, and the scope is clear
- `aim chat` opens Claude with no preset — you have full freedom to do anything

Use `aim dev` for focused work. Use `aim chat` for exploration, debugging, or tasks that don't fit a specific command.

### Can I use Claude slash commands directly?

Yes. `aim chat` opens a raw Claude Code session where you can type any of the 74 CCGS slash commands directly (e.g., `/design-system`, `/dev-story`, `/architecture-decision`).

AIM commands are convenience wrappers — everything they do can also be done with slash commands.

### What happens if I run a command outside a project?

You'll get an error:

```
Not in a CCGS project directory.
Run this command from a Claude Code Game Studios project,
or create one with: aim init
```

Only `aim init` works outside a project directory.

---

## Projects

### Where is my project data stored?

In the project directory you created with `aim init`. It's a regular git repository. Nothing is stored in the cloud by AIM (Claude Code has its own data handling).

```
my-game/
├── project.yaml          # Your settings
├── design/               # Game design documents
├── src/ (or Assets/)     # Your game code
├── production/           # Sprint plans, status
└── ...
```

### Can multiple people work on the same project?

Yes. The project is a git repository. Each team member clones the repo and runs their own `aim` commands. Use standard git workflow for collaboration.

### How do I back up my project?

It's a git repo — push to GitHub/GitLab/Bitbucket:

```bash
cd my-game
git remote add origin <your-repo-url>
git push -u origin main
```

### Can I change the engine after setup?

Yes, but it requires re-running the engine setup:

1. Edit `project.yaml` — change `engine.name`
2. Run `aim start` again to reconfigure

Note: switching engines means rewriting game code. Design documents carry over.

---

## Troubleshooting

### Claude takes too long

Claude Code processes can take time for complex tasks. If it seems stuck:

1. Press `Ctrl+C` to cancel
2. Try again with a smaller scope
3. Use `aim chat` and break the task into smaller steps

### "Cannot find module" error

Reinstall dependencies:

```bash
npm install -g aim-game-studio
```

Or if using a clone:

```bash
cd aim-game-studio
npm install
npm link
```

### Agent gives wrong suggestions

The agents read `project.yaml` for context. Make sure your config is correct:

```bash
cat project.yaml
```

If it looks wrong, run `aim init` in a new directory or edit `project.yaml` manually.

### How do I report a bug?

Open an issue at [github.com/quangminh9901/aim-game-studio/issues](https://github.com/quangminh9901/aim-game-studio/issues).
