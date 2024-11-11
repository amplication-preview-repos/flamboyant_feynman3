import { PostCreateNestedManyWithoutAuthorsInput } from "./PostCreateNestedManyWithoutAuthorsInput";

export type AuthorCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  posts?: PostCreateNestedManyWithoutAuthorsInput;
};
