const findMaxConsecutiveOnes = (nums) => {
    let maxOnes = 0;
    let countOnes = 0;

    for (let value of nums) {
        if (value === 1) {
            countOnes++;
            if (countOnes > maxOnes) {
                maxOnes = countOnes;
            }
        } else {
            countOnes = 0; 
        }
    }

    return maxOnes;
}

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1])); 
