import expensesModule from "./expenses";

describe("@/store/modules/expenses", () => {
  it("exports a valid Vuex module", () => {
    expect(expensesModule.actions).toBeTruthy();
    expect(expensesModule.getters).toBeTruthy();
    expect(expensesModule.state).toBeTruthy();
    expect(expensesModule.mutations).toBeTruthy();
  });
});
