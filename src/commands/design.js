import chalk from 'chalk';
import { openClaude, checkClaude, checkProject } from '../claude.js';

export function designCommand(system) {
  checkClaude();
  checkProject();
  const prompt = system ? `/design-system ${system}` : '/design-system';
  console.log(chalk.bold('\n  Opening design system creator...\n'));
  if (system) {
    console.log(chalk.dim(`  Creating GDD for: ${system}\n`));
  } else {
    console.log(chalk.dim('  Claude will ask which system to design.\n'));
  }
  openClaude(prompt);
}
