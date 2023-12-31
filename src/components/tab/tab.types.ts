export interface TabProps {
  data: {
    id: number;
    company: {
      id: string;
      messageDefault: string;
    };
    work: {
      position: {
        id: string;
        messageDefault: string;
      };
      descriptions: {
        id: string;
        messageDefault: string;
      }[];
      date: {
        id: string;
        messageDefault: string;
      };
    };
  }[];
}
