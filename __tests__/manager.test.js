const { Employee } = require("/Users/davidhardin/Desktop/ch/ch10/lib/class")
const { Manager } = require("/Users/davidhardin/Desktop/ch/ch10/lib/class")

describe("Manager", () => {
    describe("getName", () => {
        it("should be a function, nameof should match this.nameOf", () => {
            
            nameOf = "bill"
            idOf = "42"
            emailOf = "bill@email"
            const bill = new Manager("kolij")

            expect(typeof bill.getName).toBe("function")
            expect(bill.nameOf).toMatch("bill")
        })})})
    describe("getName", () => {
        it("should run when called, console should log nameOf", () => {
            
            nameOf = "bill"
            idOf = "42"
            emailOf = "bill@email"
            const bill = new Manager("kolij")

            const mock = jest.spyOn(bill, "getName")
            const mock2 = jest.spyOn(console, "log")
            mock2.mockImplementation(() => { })

            bill.getName()
            expect(mock).toHaveBeenCalled()
            expect(mock2).toBeCalledWith("bill")
        })})
    describe("getID", () => {
        it("should be a function, idof should match this.idOf", () => {
            nameOf = "bill"
            idOf = "42"
            emailOf = "bill@email"
            const bill = new Manager("kolij")

        expect(typeof bill.getID).toBe("function")
        expect(bill.idOf).toMatch("42")
        })})

    describe("getID", () => {
        it("should run when called, console should log idOf", () => {
            nameOf = "bill"
            idOf = "42"
            emailOf = "bill@email"
            const bill = new Manager("kolij")

            const mock = jest.spyOn(bill, "getID")
            const mock2 = jest.spyOn(console, "log")
            mock2.mockImplementation(() => { })

            bill.getID()
        expect(mock).toHaveBeenCalled()
        expect(mock2).toBeCalledWith("42")

    })})
    describe("getEmail", () => {
        it("should be a function, emailOf should match this.emailOf", () => {
            nameOf = "bill"
            idOf = "42"
            emailOf = "bill@email"
            const bill = new Manager("kolij")

        expect(typeof bill.getEmail).toBe("function")
        expect(bill.emailOf).toMatch("bill@email")
        })})

    describe("getEmail", () => {
        it("should run when called, console should log emailOf", () => {
            nameOf = "bill"
            idOf = "42"
            emailOf = "bill@email"
            const bill = new Manager("kolij")

            const mock = jest.spyOn(bill, "getEmail")
            const mock2 = jest.spyOn(console, "log")
            mock2.mockImplementation(() => { })

            bill.getEmail()
        expect(mock).toHaveBeenCalled()
        expect(mock2).toBeCalledWith("bill@email")

    })})
    describe("getRole", () => {
        it("should run when called, console should log manager!", () => {
            nameOf = "bill"
            idOf = "42"
            emailOf = "bill@email"
            const bill = new Manager("kolij")

            const mock = jest.spyOn(bill, "getRole")
            const mock2 = jest.spyOn(console, "log")
            mock2.mockImplementation(() => { })

            bill.getRole()
        expect(mock).toHaveBeenCalled()
        expect(mock2).toBeCalledWith("manager!")

    })})