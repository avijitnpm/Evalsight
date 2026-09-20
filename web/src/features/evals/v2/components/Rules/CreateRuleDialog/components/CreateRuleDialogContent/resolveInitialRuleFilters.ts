import type { FilterState } from "@evalsight/shared";

export function resolveInitialRuleFilters(
  initialFilter?: FilterState,
): FilterState {
  return (
    initialFilter ?? [
      {
        column: "isRootObservation",
        type: "boolean",
        operator: "=",
        value: true,
      },
    ]
  );
}
