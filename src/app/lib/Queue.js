const Queue = require("bull");
const redisConfig = require("../../config/redis");

const jobs = require("../jobs");

const queues = Object.values(jobs).map(job =>({
    bull: new Queue(job.key,redisConfig),
    name:job.key,
    handle: job.handle
}))

module.exports = {
    queues,
    add(name, data){
        const queue = queues.find(name => name ===name);
        return queue.bull.add(data);
    },
    process(){
        return this.queues.forEach(queue => {
            queue.bull.process(queue.handle)

            queue.bull.on("failed",(job,err)=> {
                console.log("job failed",queue.key,job.data);
                console.log(err);   
            });
        });

    },
}
