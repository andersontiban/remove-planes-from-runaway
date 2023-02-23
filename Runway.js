class Runway {
    static MAX_PLANES_ALLOWED_ON_ALL_RUNWAYS = 100;
    static planes = [];

    name;

    constructor(name) {
        this.name = name
    }
    
    add(plane) {

        if (Runway.planes.length>Runway.MAX_PLANES_ALLOWED_ON_ALL_RUNWAYS) {
            throw new Error ("runways at full capacity!")
        }
        Runway.planes.push(plane)
    }

    remove(planeName){
        if(Runway.planes.length == 0){
            throw new Error("Runway has no planes to remove");
        }
        for(let x in Runway.planes){
            if(Runway.planes[x] == planeName){
                Runway.planes.splice(x,1);
            }
        }
    }
}
Runway.planes.length = 100;
console.log(Runway.planes.length)
module.exports = Runway;