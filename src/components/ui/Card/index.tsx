import { cn } from '@lib/classnames';
import { Paper } from '@mui/material';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <Paper className={cn('rounded-3xl font-bold', className)}>{children}</Paper>
  );
}
