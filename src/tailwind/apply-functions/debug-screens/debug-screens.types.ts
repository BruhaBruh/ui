type Position = 'top' | 'left' | 'right' | 'bottom';

export type DebugScreensOptions = Partial<{
  selector: string;
  prefix: string;
  ignore: string[];
  position: [Position, Position];
  userStyles: Record<string, string>;
}>;
