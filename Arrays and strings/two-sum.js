function twoSums(nums, target) {
    let dic = {};
    let compliment;
    let arrLength = nums.length;

    for (i = 0; i < arrLength; i++) {
        complement = target - nums[i];
        if (complement in dic) {
            return [dic[complement], i];
        }
        dic[nums[i]] = i;
    }
    return dic;
}

let result = twoSums([2, 6, 9, 7, 3], 10);
console.log(result);