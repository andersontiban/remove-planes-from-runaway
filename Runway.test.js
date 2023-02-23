let Runway = require("./Runway");

describe("Runway class", ()=>{
    let jfk = new Runway("jfk");
    test("Runway makes object", ()=>{
        expect(typeof jfk).toBe("object");
    })

    test("Max planes is 100", ()=>{
        expect(Runway.MAX_PLANES_ALLOWED_ON_ALL_RUNWAYS).toBe(100);
    })

    test("Runway class name", ()=>{
        expect(jfk.name).toBe("jfk");
    })

    test("add planes to runway", ()=>{
        Runway.planes.length = 0;
        jfk.add("boe1");
        expect(Runway.planes.length).toBe(1);
    })

    test("error receive if planes over 100", ()=>{
        Runway.planes.length = 100;
        jfk.add("booe1");
        expect(jfk.add).toThrow('runways at full capacity!');
    })

    test("remove planes from runway", ()=>{
        Runway.planes.length = 0;
        jfk.add("boe1");
        jfk.remove("boe1");
        expect(Runway.planes.length).toBe(0);
    })

    test("Receive error remove plane when array len is 0", ()=>{
        Runway.planes.length = 0;
        expect(jfk.remove).toThrow("Runway has no planes to remove");
    })
})