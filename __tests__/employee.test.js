const { Employee } = require("/Users/davidhardin/Desktop/ch/ch10/lib/class")



describe("Employee", () => {
    describe("getName", () => {
        it("should be a function, nameof should match this.nameOf", () => {
            const bill = new Employee("bill", "42", "bill@email")

            expect(typeof bill.getName).toBe("function")
            expect(bill.nameOf).toMatch("bill")
        })})})
    describe("getName", () => {
        it("should run when called, console should log nameOf", () => {
            const bill = new Employee("bill", "42", "bill@email")

            const mock = jest.spyOn(bill, "getName")
            const mock2 = jest.spyOn(console, "log")
            mock2.mockImplementation(() => { })

            bill.getName()
            expect(mock).toHaveBeenCalled()
            expect(mock2).toBeCalledWith("bill")
        })})
    describe("getID", () => {
        it("should be a function, idof should match this.idOf", () => {
        const bill = new Employee("bill", "42", "bill@email")

        expect(typeof bill.getName).toBe("function")
        expect(bill.nameOf).toMatch("bill")
        })})

    describe("getID", () => {
        it("should run when called, console should log idOf", () => {
        const bill = new Employee("bill", "42", "bill@email")

        const mock = jest.spyOn(bill, "getID")
        const mock2 = jest.spyOn(console, "log")
        mock2.mockImplementation(() => { })

        bill.getID()
        expect(mock).toHaveBeenCalled()
        expect(mock2).toBeCalledWith("42")

    })})
   
        


    // describe("getEmail", () => {
    //     it("should return the employee's name as entered", () => {
    //     const bill = new Employee("bill", "42", "bill@email")

    // describe("getEmail", () => {
    //         it("should return the employee's name as entered", () => {
    //         const bill = new Employee("bill", "42", "bill@email")
    




