import type { AutomationDomain } from "@evalsight/shared";

/** Selects the first available automation for a new monitor. */
export function getInitialMonitorTriggerIds(
  automations: AutomationDomain[],
): string[] {
  const firstTriggerId = automations[0]?.trigger.id;
  return firstTriggerId ? [firstTriggerId] : [];
}
