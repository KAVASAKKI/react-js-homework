export interface IFriend {
  avatar: string;
  name: string;
  isOnline: boolean;
  id: number;
}

export interface IProfile {
  username: string;
  tag: string;
  location: string;
  avatar: string;
  stats: {
    [key: string]: number;
  };
}

export interface IStatistic {
  id: string;
  label: string;
  percentage: number;
}

export interface ITransaction {
  [key: string]: string;
}
