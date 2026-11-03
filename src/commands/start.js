import chalk from 'chalk';
import { openClaude, checkClaude, checkProject } from '../claude.js';

export function startCommand() {
  checkClaude();
  checkProject();
  console.log(chalk.bold('\n  Starting guided onboarding...\n'));
  console.log(chalk.dim('  Claude will set up your engine, project structure,'));
  console.log(chalk.dim('  and create your first design document.\n'));
  openClaude('/start');
}
