import { Command } from "./commands";
import { ROBOT_API_URL } from "./config";

export const sendCommands = async (commands: Array<Command>) => {
  return fetch(`${ROBOT_API_URL}/commands`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commands),
  });
};
