import chalk from 'chalk';
import { openClaude, checkClaude, checkProject } from '../claude.js';

export function launchCommand() {
  checkClaude();
  checkProject();
  console.log(chalk.bold('\n  Running launch checklist...\n'));
  console.log(chalk.dim('  Verifying everything is ready for release.\n'));
  openClaude('/launch-checklist');
}
