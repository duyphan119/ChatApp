declare type CreateChatMessageBody = {
  user1Id: string;
  user2Id: string;
  content?: string;
  files?: ChatMessageFile[];
  images?: ChatMessageImage[];
  path?: string;
};

declare type ChatMessageFile = {
  url: string;
  type: string;
};

declare type ChatMessageImage = {
  url: string;
  width: string;
  height: string;
};
