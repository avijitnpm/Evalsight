import { expect, it, vi } from "vitest";
import { env } from "@evalsight/shared/src/env";
import { clickhouseClient } from "@evalsight/shared/src/server";
import teardown from "../../teardown";

it("closes clients through the same source-module identity", async () => {
  const client = clickhouseClient({ url: env.CLICKHOUSE_URL });
  const close = vi.spyOn(client, "close");

  try {
    await teardown();

    expect(close).toHaveBeenCalledOnce();
  } finally {
    close.mockRestore();
  }
});
