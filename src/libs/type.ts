import * as Diff from "diff";

export type ImproveResult = {
  originalText: string;
  improvedText: string;
  changes: Diff.Change[];
};
