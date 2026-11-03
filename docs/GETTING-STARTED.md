# Getting Started

Step-by-step guide to set up AIM Game Studio and create your first game project.

---

## Prerequisites

You need 3 things installed on your computer:

### 1. Node.js (v18 or higher)

- Download from [nodejs.org](https://nodejs.org) — pick the **LTS** version
- After installing, verify in terminal:

```bash
node --version   # should show v18.x.x or higher
npm --version    # should show 9.x.x or higher
```

### 2. Git

- Download from [git-scm.com/downloads](https://git-scm.com/downloads)
- Verify:

```bash
git --version
```

### 3. Claude Code

- Requires an Anthropic API key or Claude Pro subscription
- Install globally:

```bash
npm install -g @anthropic-ai/claude-code
```

- Verify and authenticate:

```bash
claude --version
claude   # follow login prompts on first run
```

---

## Install AIM Game Studio

**Option A — npm (recommended):**

```bash
npm install -g aim-game-studio
```

**Option B — Clone from GitHub:**

```bash
git clone https://github.com/quangminh9901/aim-game-studio.git
cd aim-game-studio
npm install
npm link
```

Verify it works:

```bash
aim --version
aim --help
```

---

## Create Your First Project

### Step 1: Run the wizard

```bash
aim init
```

You'll be asked:
1. **Project name** — working title for your game
2. **Engine** — Godot 4, Unity, or Unreal Engine 5
3. **Genre** — platformer, RPG, FPS, puzzle, etc.
4. **Team size** — solo, small, medium, or large
5. **Platform** — PC, mobile, console, or web

Or use a template to skip the wizard:

```bash
aim init -t platformer -n "my-platformer"
aim init -t rpg
aim init -t fps
```

### Step 2: Enter the project

```bash
cd my-game
```

### Step 3: Run onboarding

```bash
aim start
```

This opens Claude Code with the `/start` skill, which:
- Confirms your engine and language
- Sets up the project directory structure
- Creates your first design document
- Introduces you to available commands

### Step 4: Start building

```bash
# Brainstorm your game concept
aim brainstorm

# Design a game system (e.g. combat, inventory, movement)
aim design combat

# Create feature epics from your design
aim epic

# Break an epic into development stories
aim story

# Start coding
aim dev

# When done, run QA
aim done
```

---

## What Happens Under the Hood

When you run any `aim` command (except `aim init`):

1. AIM checks that Claude Code is installed
2. AIM checks you're inside a CCGS project (has `CLAUDE.md`)
3. AIM calls `claude --prompt "/skill-name"` with the right slash command
4. Claude Code reads your `CLAUDE.md` and `project.yaml`
5. The appropriate AI agent (out of 49) handles your request
6. You interact with Claude — make decisions, approve changes

**You are always in control.** The agents ask before writing files, show drafts before committing, and wait for your approval on all changes.

---

## Troubleshooting

### "Claude Code is not installed"

```bash
npm install -g @anthropic-ai/claude-code
```

### "Not in a CCGS project directory"

Make sure you `cd` into your project folder first. The folder should contain `CLAUDE.md`.

```bash
cd my-game
aim start
```

### "Failed to clone"

Check your internet connection and git installation. The framework repo is public — no authentication needed.

### "Permission denied" on npm install -g

On Mac/Linux:

```bash
sudo npm install -g aim-game-studio
```

Or better, configure npm to install globally without sudo:

```bash
npm config set prefix ~/.npm-global
export PATH=~/.npm-global/bin:$PATH
```

---

## Next Steps

- Read the [Commands Reference](./COMMANDS.md) for detailed usage of every command
- See [Templates](./TEMPLATES.md) for pre-configured project setups
- Check [Workflow Guide](./WORKFLOW.md) for the recommended development process
- Read [Architecture](./ARCHITECTURE.md) to understand how AIM connects to Claude Code
