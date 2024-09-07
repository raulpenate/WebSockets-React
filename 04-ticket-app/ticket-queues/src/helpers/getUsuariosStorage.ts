export interface iUserStorage {
  agent: string;
  desktop: string;
}

export const getUserStorage = (): iUserStorage => {
  const agent = localStorage.getItem("agent")!;
  const desktop = localStorage.getItem("desktop")!;

  return {
    agent,
    desktop,
  };
};

export const setUserStorage = ({ agent, desktop }: iUserStorage): void => {
  localStorage.setItem("agent", agent);
  localStorage.setItem("desktop", desktop);
};

export const cleanUserStorage = (): void => {
  localStorage.clear();
};
