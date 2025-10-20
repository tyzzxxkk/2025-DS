class Vertex {
    constructor(value) {
        this.value = value;
        this.adjacent_vertices = [];
    }

    addAdjacentVertex() {
        this.adjacent_vertices.push(vertex);
    }

    removeAdjacentVertex(vertex) {
        for(let i = 0; i < this.adjacent_vertices.length; i++) {
            if(this.adjacent_vertices[i] === vertex) [
                this.adjacent_vertices.splice(i, 1)
            ]
        }
    }
}

let ben = new Vertex("ben");
let jake = new Vertex("jake");
let joy = new Vertex("joy");
let ivy = new Vertex("ivy");
let elin = new Vertex("elin");
let anna = new Vertex("anna");
let david = new Vertex("david");

ben.addAdjacentVertex(jake);
jake.addAdjacentVertex(ben);
joy.addAdjacentVertex(ben);
joy.addAdjacentVertex(ivy);
ivy.addAdjacentVertex(joy);
ivy.addAdjacentVertex(ben);
elin.addAdjacentVertex(ivy);
elin.addAdjacentVertex(anna);
anna.addAdjacentVertex(david);
anna.addAdjacentVertex(ben);
anna.addAdjacentVertex(elin);
david.addAdjacentVertex(anna);
