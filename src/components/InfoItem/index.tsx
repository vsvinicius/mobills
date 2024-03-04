import { Paper, Typography } from '@mui/material';

import { cn } from '@lib/classnames';

interface InfoItemProps {
  icon: React.ReactNode;
  iconClassName?: string;
  title: React.ReactNode | string;
  value: React.ReactNode | string;
}

export default function InfoItem({
  icon,
  iconClassName,
  title,
  value,
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
        <Typography className="font-semibold" variant="h6">
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
