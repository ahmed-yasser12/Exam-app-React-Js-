export const DIPLOMA_KEY = {
  all: ["diplomas"],
  lists: (...filter: string[]) => [...DIPLOMA_KEY.all, "list", ...filter],
  details: (id: string) => [...DIPLOMA_KEY.all, "detail", id],
};
