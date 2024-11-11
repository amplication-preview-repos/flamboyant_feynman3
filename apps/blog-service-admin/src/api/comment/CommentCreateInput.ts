import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentCreateInput = {
  authorName?: string | null;
  content?: string | null;
  post?: PostWhereUniqueInput | null;
};
