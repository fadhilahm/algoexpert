#!/bin/bash

# delete txt file inside the respective directories
for h in host1 host2
do 
    file=$h/latencies.txt
    if [ -f $file ]
        then
            echo "$file detected. Initiate kill sequence..."
            rm $h/latencies.txt
        else
            echo "$file not found. Skipping to next phase..."
    fi
done

# command for creating a text file in 2 seperate files that is filled with 200 different integers
$(for h in host1 host2; do for i in `seq 1 200`; do r=$(( ( RANDOM % 20000 ) + 1 )); echo $r >> $h/latencies.txt; done; done;)
