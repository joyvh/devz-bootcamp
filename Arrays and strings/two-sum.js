function twoSums(nums, target) {
    let dic = {};
    let arrLength = nums.length;

    for (let i = 0; i < arrLength; i++) {
        let complement = target - nums[i];
        if (complement in dic) {
            return [dic[complement], i];
        }
        dic[nums[i]] = i;
    }
    return dic;
}

let result = twoSums([2, 6, 9, 7, 3], 10);
console.log(result);