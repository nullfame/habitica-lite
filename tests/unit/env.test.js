describe("Check values of .env", () => {
  describe("Required values", () => {
    it("HABITICA_ID is defined and has a value", () => {
      expect(process.env.HABITICA_ID).toBeDefined();
      expect(process.env.HABITICA_ID).not.toBe("");
    });
    it("HABITICA_API_TOKEN is defined and has a value", () => {
      expect(process.env.HABITICA_API_TOKEN).toBeDefined();
      expect(process.env.HABITICA_API_TOKEN).not.toBe("");
    });
  });
});
