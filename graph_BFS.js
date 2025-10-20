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

function BFS(vertex) {
    let queue = new Queue();
    let visited_vertices = {};
    queue.enqueue(vertex);
    visited_vertices[vertex.value] = true;

    while(queue.isEmpty()===false) {
        let currentVertex = queue.dequeue().data;
        console.log('정점 : ${currentVertex.value}');

        for(let adjacent of currentVertex.adjacent_vertices) {
            if(visited_vertices[adjacent.value]) {
                continue;
            } else {
                visited_vertices[adjacent] = true;
                queue.enqueue(adjacent);
            }
        }
    }
}

let ben = new Vertex("ben")
let jake = new Vertex("jake");
let joy = new Vertex("joy");
let ivy = new Vertex("ivy");
let elin = new Vertex("elin");
let anna = new Vertex("anna");
let david = new Vertex("david");
let owen = new Vertex("david")

ben.addAdjacentVertex(ivy);
ben.addAdjacentVertex(jake);
ben.addAdjacentVertex(anna);
ben.addAdjacentVertex(david);

ivy.addAdjacentVertex(ben);
ivy.addAdjacentVertex(joy);

joy.addAdjacentVertex(ivy);
joy.addAdjacentVertex(jake);

jake.addAdjacentVertex(ben);
jake.addAdjacentVertex(joy);

anna.addAdjacentVertex(ben);

david.addAdjacentVertex(ben);
david.addAdjacentVertex(elin);

elin.addAdjacentVertax(david);
elin.addAdjacentVertax(owen);

owen.addAdjacentVertax(elin);

DFS(elin);