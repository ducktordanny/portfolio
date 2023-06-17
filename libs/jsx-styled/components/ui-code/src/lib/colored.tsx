export interface ColoredProps {
  children: React.ReactNode;
}

export const Component = ({ children }: ColoredProps) => (
  <span className="text-comp">{children}</span>
);

export const Prop = ({ children }: ColoredProps) => (
  <span className="text-prop">{children}</span>
);

export const Nmbr = ({ children }: ColoredProps) => (
  <span className="text-prop-nmbr">{children}</span>
);

export const Str = ({ children }: ColoredProps) => (
  <span className="text-prop-str">{children}</span>
);
