#! /bin/bash

# clean up stray files from the previous run.
for f in host1/map_results/*.txt host2/map_results/*.txt map_results/*.txt reduce_results/results.txt
do
    rm -f $f
done

# run the map step on both hosts in parallel.
HOST=host1 node map.js &
HOST=host2 node map.js &

# wait for them to both be done.
wait

# run the shuffle step.
HOSTS=host1,host2 node shuffle.js

# run the reduce step.
node reduce.js

# view the final result of the MapReduce job.
cat reduce_results/results.txt
