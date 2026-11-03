import inquirer from 'inquirer';
import chalk from 'chalk';
import { execSync } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import { resolve, join } from 'path';
import { generateYaml, writeConfig, TEMPLATES } from '../config.js';

const CCGS_REPO = 'https://github.com/Donchitos/Claude-Code-Game-Studios.git';

export async function initCommand(opts) {
  console.log(chalk.bold('\n  AIM Game Studio — New Project\n'));

  if (opts.template && TEMPLATES[opts.template]) {
    return initFromTemplate(opts.template, opts.name);
  }

  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Project name:',
      default: opts.name || 'my-game',
      validate: v => v.trim() ? true : 'Name is required',
    },
    {
      type: 'list',
      name: 'engine',
      message: 'Game engine:',
      default: opts.engine,
      choices: [
        { name: 'Godot 4     — Free, GDScript, great for 2D & lightweight 3D', value: 'godot' },
        { name: 'Unity       — C#, huge ecosystem, cross-platform', value: 'unity' },
        { name: 'Unreal 5    — C++/Blueprint, AAA graphics', value: 'unreal' },
      ],
    },
    {
      type: 'list',
      name: 'genre',
      message: 'Game genre:',
      choices: [
        { name: 'Platformer', value: 'platformer' },
        { name: 'RPG', value: 'rpg' },
        { name: 'Action / FPS', value: 'action' },
        { name: 'Puzzle', value: 'puzzle' },
        { name: 'Survival', value: 'survival' },
        { name: 'Strategy', value: 'strategy' },
        { name: 'Horror', value: 'horror' },
        { name: 'Casual / Mobile', value: 'casual' },
        new inquirer.Separator(),
        { name: 'Other', value: 'other' },
      ],
    },
    {
      type: 'list',
      name: 'team',
      message: 'Team size:',
      choices: [
        { name: 'Solo         — just me', value: 'solo' },
        { name: 'Small (2-4)  — a few collaborators', value: 'small' },
        { name: 'Medium (5-10) — full indie team', value: 'medium' },
        { name: 'Large (10+)  — studio-sized', value: 'large' },
      ],
    },
    {
      type: 'list',
      name: 'platform',
      message: 'Target platform:',
      choices: [
        { name: 'PC (Windows/Mac/Linux)', value: 'pc' },
        { name: 'Mobile (iOS/Android)', value: 'mobile' },
        { name: 'Console', value: 'console' },
        { name: 'Web (HTML5)', value: 'web' },
      ],
    },
  ]);

  await createProject(answers);
}

async function initFromTemplate(templateName, projectName) {
  const tmpl = TEMPLATES[templateName];
  const name = projectName || templateName + '-game';

  console.log(chalk.dim(`  Using template: ${chalk.bold(templateName)}\n`));

  await createProject({ name, ...tmpl });
}

async function createProject(data) {
  const targetDir = resolve(process.cwd(), data.name);

  console.log(chalk.dim('\n  Setting up project...\n'));

  // Clone CCGS framework
  if (existsSync(targetDir)) {
    console.log(chalk.yellow(`  Directory "${data.name}" already exists.`));
    const { overwrite } = await inquirer.prompt([{
      type: 'confirm', name: 'overwrite', message: 'Continue anyway? (config will be updated)', default: false,
    }]);
    if (!overwrite) { console.log(chalk.dim('  Aborted.')); return; }
  } else {
    console.log(chalk.dim(`  Cloning CCGS framework into "${data.name}"...`));
    try {
      execSync(`git clone ${CCGS_REPO} "${data.name}"`, { stdio: 'inherit', cwd: process.cwd() });
    } catch (err) {
      console.error(chalk.red('  Failed to clone. Check your internet connection and git installation.'));
      process.exit(1);
    }
  }

  // Write project.yaml
  const config = generateYaml(data);
  writeConfig(targetDir, config);
  console.log(chalk.green('  project.yaml created'));

  // Summary
  console.log(chalk.bold('\n  Project ready!\n'));
  console.log(`  ${chalk.dim('Name:')}      ${data.name}`);
  console.log(`  ${chalk.dim('Engine:')}    ${data.engine}`);
  console.log(`  ${chalk.dim('Genre:')}     ${data.genre}`);
  console.log(`  ${chalk.dim('Team:')}      ${data.team}`);
  console.log(`  ${chalk.dim('Platform:')}  ${data.platform}`);
  console.log(`  ${chalk.dim('Location:')}  ${targetDir}`);

  console.log(chalk.bold('\n  Next steps:\n'));
  console.log(chalk.cyan(`    cd "${data.name}"`));
  console.log(chalk.cyan('    aim start'));
  console.log(chalk.dim('\n  This will run the guided onboarding with 49 AI agents.\n'));
}
