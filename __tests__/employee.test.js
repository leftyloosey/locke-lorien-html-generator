const { Employee } = require("/Users/davidhardin/Desktop/ch/ch10/lib/class")

describe("Employee", () => {
    // investigate getNAme
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

    //investivate getID
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

    // investigate getEmail

    describe("getEmail", () => {
        it("should be a function, emailOf should match this.emailOf", () => {
        const bill = new Employee("bill", "42", "bill@email")

        expect(typeof bill.getName).toBe("function")
        expect(bill.emailOf).toMatch("bill@email")
        })})

    describe("getEmail", () => {
        it("should run when called, console should log emailOf", () => {
        const bill = new Employee("bill", "42", "bill@email")

        const mock = jest.spyOn(bill, "getEmail")
        const mock2 = jest.spyOn(console, "log")
        mock2.mockImplementation(() => { })

        bill.getEmail()
        expect(mock).toHaveBeenCalled()
        expect(mock2).toBeCalledWith("bill@email")

    })})

//investigate getRole

    describe("getRole", () => {
        it("should run when called, console should log employee!", () => {
          
            const bill = new Employee("bill", "42", "bill@email")

            const mock = jest.spyOn(bill, "getRole")
            const mock2 = jest.spyOn(console, "log")
            mock2.mockImplementation(() => { })

            bill.getRole()
        expect(mock).toHaveBeenCalled()
        expect(mock2).toBeCalledWith("employee!")

    })})