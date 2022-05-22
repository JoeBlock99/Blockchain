const Computers = artifacts.require("Computers");

contract("Computers", async accounts => {
    it("should store correct amount of computers and get the last computer", async () => {
        num = 10
        const computers = await Computers.deployed();
        const created = await computers.registerComputers(num);
        const lastCOM = await computers.getComputer(num)
        if (lastCOM != null){
            assert.it
            console.log("Computer: ",lastCOM);
        }
    });
    it("should use the last computer", async () => {
        num = 10
        const computers = await Computers.deployed();
        const created = await computers.useComputer(num);
        const lastCOM = await computers.getComputer(num)
        if (lastCOM[0] == true){
            assert.it
            console.log("Computer: ",lastCOM);
        }
    });
    it("should leave the last computer", async () => {
        num = 10
        const computers = await Computers.deployed();
        const created = await computers.leaveComputer(num);
        const lastCOM = await computers.getComputer(num)
        if (lastCOM[0] == false){
            assert.it
            console.log("Computer: ",lastCOM);
        }
    });
});