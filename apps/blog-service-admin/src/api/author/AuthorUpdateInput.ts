import { PostUpdateManyWithoutAuthorsInput } from "./PostUpdateManyWithoutAuthorsInput";

export type AuthorUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  posts?: PostUpdateManyWithoutAuthorsInput;
};
