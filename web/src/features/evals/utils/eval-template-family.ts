import { type EvalTemplate } from "@evalsight/shared";

export const getEvalTemplateFamilyKey = (
  template: Pick<EvalTemplate, "projectId" | "name" | "type">,
) => `${template.projectId ?? "langfuse"}:${template.type}:${template.name}`;
