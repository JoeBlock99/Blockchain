const Storage = artifacts.require("Storage");

contract("Storage", async accounts => {
    const num = 10;
    it("should store correct num", async () => {
        console.log("Guarde",num);
        const storage = await Storage.deployed();
        const stored = await storage.store(num);
        const retrieved = await storage.retrieve();

        assert.equal(retrieved, num);
        console.log("Recivi",retrieved);
    });
    it("should substract 1 from stored num", async () => {
        console.log("Guardado",num);
        const storage = await Storage.deployed();
        const stored = await storage.substract1();
        const retrieved = await storage.retrieve();

        assert.equal(retrieved, num -1);
        console.log("Recivi",retrieved);
    });
});