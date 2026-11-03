#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import { initCommand } from '../src/commands/init.js';
import { startCommand } from '../src/commands/start.js';
import { designCommand } from '../src/commands/design.js';
import { epicCommand } from '../src/commands/epic.js';
import { storyCommand } from '../src/commands/story.js';
import { devCommand } from '../src/commands/dev.js';
import { doneCommand } from '../src/commands/done.js';
import { reviewCommand } from '../src/commands/review.js';
import { testCommand } from '../src/commands/test.js';
import { sprintCommand } from '../src/commands/sprint.js';
import { statusCommand } from '../src/commands/status.js';
import { chatCommand } from '../src/commands/chat.js';
import { launchCommand } from '../src/commands/launch.js';
import { prototypeCommand } from '../src/commands/prototype.js';

const program = new Command();

program
  .name('aim')
  .version('1.0.0')
  .description(`${chalk.bold('AIM Game Studio')} — AI-powered game development toolkit

  Wraps Claude Code with 49 specialized game-dev agents.
  Each command calls Claude with the right skill automatically.

  ${chalk.dim('Quick start:')}
    ${chalk.cyan('aim init')}        Create a new game project
    ${chalk.cyan('aim start')}       Run guided onboarding
    ${chalk.cyan('aim dev')} ${chalk.dim('<story>')}  Start coding a story
    ${chalk.cyan('aim chat')}        Open Claude for freeform work`);

program
  .command('init')
  .description('Create a new game project (interactive wizard)')
  .option('-t, --template <name>', 'Use a template (platformer, rpg, fps, puzzle, survival, horror, strategy, casual)')
  .option('-n, --name <name>', 'Project name')
  .option('-e, --engine <engine>', 'Game engine (godot, unity, unreal)')
  .action(initCommand);

program
  .command('start')
  .description('Run guided onboarding — sets up engine, structure, first design doc')
  .action(startCommand);

program
  .command('design [system]')
  .description('Create a game design document for a system (e.g. "combat", "inventory")')
  .action(designCommand);

program
  .command('brainstorm')
  .description('Brainstorm game concepts and ideas')
  .action((opts) => { import('../src/claude.js').then(m => m.runClaude('/brainstorm')); });

program
  .command('epic')
  .description('Create feature epics from your game design')
  .action(epicCommand);

program
  .command('story [epic]')
  .description('Break an epic into development stories')
  .action(storyCommand);

program
  .command('dev [story]')
  .description('Start coding a story — assigns the right specialist agent')
  .action(devCommand);

program
  .command('done [story]')
  .description('Mark a story complete — runs QA checks and evidence collection')
  .action(doneCommand);

program
  .command('review')
  .description('Run code review on current changes')
  .action(reviewCommand);

program
  .command('test')
  .description('Run tests and smoke checks')
  .action(testCommand);

program
  .command('sprint')
  .description('Sprint planning — organize stories into a sprint')
  .action(sprintCommand);

program
  .command('status')
  .description('Show sprint and project status')
  .action(statusCommand);

program
  .command('prototype')
  .description('Quick prototype — throwaway code to test an idea')
  .action(prototypeCommand);

program
  .command('launch')
  .description('Launch checklist — verify everything before release')
  .action(launchCommand);

program
  .command('chat')
  .description('Open Claude in your project for freeform work')
  .action(chatCommand);

program
  .command('help-all')
  .description('Show all available CCGS slash commands')
  .action(() => { import('../src/claude.js').then(m => m.runClaude('/help')); });

program.parse();
