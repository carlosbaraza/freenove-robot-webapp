type HeadCommand = {
  command: "move-head";
  angle0: number;
  angle1: number;
};

export type Command = HeadCommand;

export const moveHead = (angle0: number, angle1: number): Command => {
  return {
    command: "move-head",
    angle0,
    angle1,
  };
};
