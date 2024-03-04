import { cn } from '@lib/classnames';
import { Paper, Typography } from '@mui/material';

interface InfoItemProps {
  title: React.ReactNode | string;
  value: React.ReactNode | string;
  icon: React.ReactNode;
  iconClassName?: string;
}

export default function InfoItem({
  title,
  value,
  icon,
  iconClassName,
}: InfoItemProps) {
  return (
    <Paper className="grid h-24 w-full grid-cols-2 rounded-3xl p-4">
      <main className="flex h-full flex-col justify-between">
        <div className="flex gap-1">
          {typeof title === 'string' ? (
            <Typography className="text-nowrap font-medium opacity-70">
              {title}
            </Typography>
          ) : (
            title
          )}
        </div>
        <Typography variant="h6" className="font-semibold">
          {value}
        </Typography>
      </main>
      <div
        className={cn(
          'flex h-12 w-12 items-center justify-center self-center justify-self-end rounded-full bg-primary',
          iconClassName,
        )}
      >
        {icon}
      </div>
    </Paper>
  );
}
