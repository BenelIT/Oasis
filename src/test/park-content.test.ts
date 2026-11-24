import { describe, expect, it } from "vitest";
import { park } from "@/lib/park-content";

describe("Datos oficiales del parque", () => {
  it("la certificación ADVC es un objetivo futuro", () => {
    expect(park.advcStatus).toBe("future");
  });
  it("el plan de manejo contempla 15 hectáreas totales", () => {
    expect(park.areaHectares).toBe(15);
  });
});