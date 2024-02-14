import classnames from 'classnames';
import { twMerge } from 'tailwind-merge';

export function cn(...args: classnames.ArgumentArray) {
  return twMerge(classnames(args));
}
