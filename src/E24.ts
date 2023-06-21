import Queue from "./utils/queue";

function hotPotato (elementsList: string[], num: number) {
    const queue = new Queue();
    const eliminatedMembers = [];

    for(const participant of elementsList) {
        queue.enqueue(participant);
    }

    while(queue.size() > 1) {
        for(let i = 0; i < num; i++) {
            const dequeued = queue.dequeue();
            queue.enqueue(dequeued);
        }
        eliminatedMembers.push(queue.dequeue() as any);
    }
    
    return {
        eliminated: eliminatedMembers,
        winner: queue.dequeue()
    }
};

export default hotPotato;
