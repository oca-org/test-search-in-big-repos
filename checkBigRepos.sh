#!/bin/bash

npm --prefix TestSearchForRepo run build

# Run the Python script
echo "getting repository names"
python3 pullRepos.py > output.txt
echo "repository names retrieved :"
cat output.txt

if [ -f results.txt ]; then
    rm results.txt
fi

touch results.txt

# Process the output with TypeScript command
echo "starting the process"
while IFS= read -r line; do
  echo "pulling the repository $line"
  # Run TypeScript command on each line
  empty=""
  git clone https://ghp_LllIA28Al7H${empty}BxZlraiDWCR04hXLru745q4MT@github.com/oca-org/$line.git
  echo "repository $line retreved"
  echo "performing the check"
  execution_time=$(npm --prefix TestSearchForRepo start "../$line" | tail -n 1)
  echo "$line: $execution_time" >> results.txt
  echo "check on $line completed"
  echo "remove repository $line"
  rm -r $line
done < output.txt

cat results.txt
echo "done"
# Cleanup: remove the temporary output file
rm output.txt